import { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { PlayCircle, Sparkles, Trophy, X, File, FileText, CheckCircle, ArrowLeft, BrainCircuit, Loader2, Video , Lightbulb, Clock, ThumbsUp, ThumbsDown, ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { learnApi } from '../../../lib/learn-api';
import { toast } from 'sonner';
import { TopicAiNotesView } from '../../../components/learn/TopicAiNotesView';
import { findTopicMetadata } from '../../../data/curriculumData';

interface ContentItem {
  id: string;
  title: string;
  type: 'VIDEO' | 'NOTES_PDF' | 'ARTICLE';
  contentUrl: string;
  isFree: boolean;
}

function getYoutubeId(url: string): string | null {
  if (!url) return null;
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (shortMatch) return shortMatch[1];
  const longMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  if (longMatch) return longMatch[1];
  const embedMatch = url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]+)/);
  if (embedMatch) return embedMatch[1];
  return null;
}

export function getYoutubeStartTime(url: string): number {
  if (!url) return 0;
  // matches ?t=120 or &t=120s or &t=1h15m20s or &t=18m45s or ?start=120
  const match = url.match(/[?&](?:t|start)=([0-9hms]+)/i);
  if (!match) return 0;
  const val = match[1];
  if (/^\d+$/.test(val)) return parseInt(val, 10);
  if (/^\d+s$/i.test(val)) return parseInt(val, 10);
  let total = 0;
  const hours = val.match(/(\d+)h/i);
  const mins = val.match(/(\d+)m/i);
  const secs = val.match(/(\d+)s/i);
  if (hours) total += parseInt(hours[1], 10) * 3600;
  if (mins) total += parseInt(mins[1], 10) * 60;
  if (secs) total += parseInt(secs[1], 10);
  return total;
}

export function getYoutubeEndTime(url: string): number {
  if (!url) return 0;
  // matches ?end=120 or &end=120s or &end=1h15m20s or &end=47m04s
  const match = url.match(/[?&]end=([0-9hms]+)/i);
  if (!match) return 0;
  const val = match[1];
  if (/^\d+$/.test(val)) return parseInt(val, 10);
  if (/^\d+s$/i.test(val)) return parseInt(val, 10);
  let total = 0;
  const hours = val.match(/(\d+)h/i);
  const mins = val.match(/(\d+)m/i);
  const secs = val.match(/(\d+)s/i);
  if (hours) total += parseInt(hours[1], 10) * 3600;
  if (mins) total += parseInt(mins[1], 10) * 60;
  if (secs) total += parseInt(secs[1], 10);
  return total;
}

export function formatTimestamp(seconds: number): string {
  if (!seconds || seconds <= 0) return '0:00';
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  if (h > 0) {
    return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// Smart VideoPlayer - uses a facade for YouTube, and native player for direct MP4s with timestamp jumping support
interface VideoPlayerProps {
  video: ContentItem;
  seekTime?: number | null;
  onSeek?: (seconds: number) => void;
  topicTitle?: string;
  chapterTitle?: string;
  subjectName?: string;
  nextTopic?: { id: string; title: string } | null;
  onOpenQuiz?: () => void;
}

function VideoPlayer({ 
  video, 
  seekTime = null, 
  onSeek, 
  topicTitle,
  chapterTitle,
  subjectName,
  nextTopic,
  onOpenQuiz
}: VideoPlayerProps) {
  const navigate = useNavigate();
  const initialStartTime = useMemo(() => getYoutubeStartTime(video.contentUrl), [video.contentUrl]);
  const initialEndTime = useMemo(() => getYoutubeEndTime(video.contentUrl), [video.contentUrl]);
  const [isPlaying, setIsPlaying] = useState(() => (seekTime !== null && seekTime >= 0) || initialStartTime > 0);
  const [currentSeek, setCurrentSeek] = useState<number | null>(() => seekTime !== null && seekTime >= 0 ? seekTime : (initialStartTime > 0 ? initialStartTime : null));
  const [playbackSeconds, setPlaybackSeconds] = useState<number>(() => initialStartTime > 0 ? initialStartTime : 0);
  const [isSegmentCompleted, setIsSegmentCompleted] = useState(false);
  const [embedError, setEmbedError] = useState(false);
  const [isWatched, setIsWatched] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // Anti-Cheat Gamification States
  const [isTheaterMode, setIsTheaterMode] = useState(false);
  const [reactions, setReactions] = useState<{id: number, emoji: string, left: string}[]>([]);
  const [realSecondsWatched, setRealSecondsWatched] = useState(0);
  let reactionIdCounter = useRef(0);
  
  const REQUIRED_SECONDS = 3 * 60; // Require 3 minutes of real-time watching
  
  const videoId = getYoutubeId(video.contentUrl);
  const isNativeVideo = !videoId && (video.contentUrl.toLowerCase().endsWith('.mp4') || video.contentUrl.includes('supabase.co'));

  // Load YouTube IFrame API script dynamically
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!(window as any).YT) {
      const existing = document.getElementById('youtube-iframe-api');
      if (!existing) {
        const tag = document.createElement('script');
        tag.id = 'youtube-iframe-api';
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
      }
    }
  }, []);

  // PostMessage helper to control YouTube iframe
  const sendIframeCommand = (func: string, args: any[] = []) => {
    try {
      if (iframeRef.current?.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({
            event: 'command',
            func,
            args
          }),
          '*'
        );
      }
    } catch (err) {
      console.error('Error posting message to YouTube iframe:', err);
    }
  };

  const handleIframeLoad = () => {
    try {
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({
          event: 'listening',
          id: 1,
          channel: 'widget'
        }),
        '*'
      );
    } catch (e) {}
  };

  // Sync external seek time requests or initial start time
  useEffect(() => {
    if (seekTime !== null && seekTime >= 0) {
      setCurrentSeek(seekTime);
      setPlaybackSeconds(seekTime);
      setIsPlaying(true);
      setIsSegmentCompleted(false);
      sendIframeCommand('seekTo', [seekTime, true]);
      sendIframeCommand('playVideo');
      if (isNativeVideo && videoRef.current) {
        videoRef.current.currentTime = seekTime;
        videoRef.current.play().catch(() => {});
      }
    } else if (initialStartTime > 0 && (currentSeek === null || currentSeek === 0)) {
      setCurrentSeek(initialStartTime);
      setPlaybackSeconds(initialStartTime);
      if (isNativeVideo && videoRef.current) {
        videoRef.current.currentTime = initialStartTime;
      }
    }
  }, [seekTime, initialStartTime, isNativeVideo]);

  const handleSeekInternal = (seconds: number) => {
    setCurrentSeek(seconds);
    setPlaybackSeconds(seconds);
    setIsPlaying(true);
    setIsSegmentCompleted(false);
    sendIframeCommand('seekTo', [seconds, true]);
    sendIframeCommand('playVideo');
    if (isNativeVideo && videoRef.current) {
      videoRef.current.currentTime = seconds;
      videoRef.current.play().catch(() => {});
    }
    if (onSeek) {
      onSeek(seconds);
    }
  };

  // Replay this concept from its start timestamp
  const handleReplaySegment = () => {
    setIsSegmentCompleted(false);
    setPlaybackSeconds(initialStartTime);
    setCurrentSeek(initialStartTime);
    setIsPlaying(true);
    sendIframeCommand('seekTo', [initialStartTime, true]);
    sendIframeCommand('playVideo');
    if (videoRef.current) {
      videoRef.current.currentTime = initialStartTime;
      videoRef.current.play().catch(() => {});
    }
  };

  // Active YouTube postMessage listener & Boundary Guard
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        let data = event.data;
        if (typeof data === 'string') {
          try {
            data = JSON.parse(data);
          } catch {
            return;
          }
        }
        if (!data || typeof data !== 'object') return;

        // Handle YouTube infoDelivery events (contains real-time currentTime)
        if (data.event === 'infoDelivery' && data.info) {
          const currentTime = data.info.currentTime;
          if (typeof currentTime === 'number') {
            setPlaybackSeconds(currentTime);

            // HARD-STOP & CLAMP AT TOPIC END:
            // Prevents student from playing or scrubbing past topic boundary into next topic
            if (initialEndTime > 0 && currentTime >= initialEndTime) {
              sendIframeCommand('pauseVideo');
              sendIframeCommand('seekTo', [initialEndTime, true]);
              setIsPlaying(false);
              setIsSegmentCompleted(true);
              if (!isWatched) {
                handleMarkAsWatched();
              }
            }
            // CLAMP AT TOPIC START:
            // Prevents student from scrubbing backward into previous topic
            else if (initialStartTime > 0 && currentTime < initialStartTime - 4 && isPlaying) {
              sendIframeCommand('seekTo', [initialStartTime, true]);
              toast.info(`This concept begins at ${formatTimestamp(initialStartTime)}.`, {
                id: 'start-time-clamped'
              });
            }
          }

          // When YouTube video state changes to ENDED (0)
          if (data.info.playerState === 0) {
            setIsPlaying(false);
            setIsSegmentCompleted(true);
          }
        }

        // Handle onStateChange
        if (data.event === 'onStateChange') {
          if (data.info === 0) { // ENDED
            setIsPlaying(false);
            setIsSegmentCompleted(true);
          } else if (data.info === 1) { // PLAYING
            setIsPlaying(true);
          } else if (data.info === 2) { // PAUSED
            setIsPlaying(false);
          }
        }
      } catch (e) {
        // Ignore non-youtube messages safely
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [initialStartTime, initialEndTime, isPlaying, isWatched]);

  // Periodic ping to YouTube iframe to keep infoDelivery flowing
  useEffect(() => {
    if (!isPlaying || !videoId) return;

    const pingInterval = setInterval(() => {
      try {
        iframeRef.current?.contentWindow?.postMessage(
          JSON.stringify({
            event: 'listening',
            id: 1,
            channel: 'widget'
          }),
          '*'
        );
      } catch (e) {}
    }, 1000);

    return () => clearInterval(pingInterval);
  }, [isPlaying, videoId]);

  const effectiveSeek = currentSeek !== null && currentSeek > 0 ? currentSeek : (initialStartTime > 0 ? initialStartTime : 0);
  const startParam = effectiveSeek > 0 ? `&start=${Math.floor(effectiveSeek)}` : '';
  const endParam = initialEndTime > 0 && initialEndTime > effectiveSeek ? `&end=${Math.floor(initialEndTime)}` : '';
  const originParam = typeof window !== 'undefined' ? `&origin=${encodeURIComponent(window.location.origin)}` : '';
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&rel=0&modestbranding=1&color=white&iv_load_policy=3${startParam}${endParam}${originParam}` : null;
  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;

  // Real-time Anti-Cheat Tracker
  useEffect(() => {
    let interval: any;
    const tick = () => {
      if (isPlaying && !document.hidden) {
        setRealSecondsWatched(prev => prev + 1);
      }
    };
    interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Cleanup old reactions
  useEffect(() => {
    if (reactions.length > 0) {
      const timer = setTimeout(() => {
        setReactions(prev => prev.slice(1));
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [reactions]);

  const addReaction = (emoji: string) => {
    const id = reactionIdCounter.current++;
    const left = `${Math.floor(Math.random() * 20) + 75}%`;
    setReactions(prev => [...prev, { id, emoji, left }]);
  };

  const handleMarkAsWatched = async () => {
    if (isWatched || realSecondsWatched < REQUIRED_SECONDS) return;
    setIsWatched(true);
    
    // Confetti burst
    for(let i=0; i<30; i++) {
        setTimeout(() => addReaction('🎉'), i * 50);
    }
    
    toast.success('Lecture Completed! +50 XP 🎉', {
      style: { background: '#22c55e', color: 'white', border: 'none' }
    });
    
    try {
        await learnApi.post('/analytics/session/log', {
            durationMinutes: 50,
            sessionType: 'LECTURE',
            wasStrict: true
        });
        window.dispatchEvent(new Event('study_session_logged'));
    } catch (e) {
        console.error("Failed to log XP for video");
    }
  };
  
  const canMarkWatched = realSecondsWatched >= REQUIRED_SECONDS;
  const minutesLeft = Math.ceil((REQUIRED_SECONDS - realSecondsWatched) / 60);

  return (
    <>
      {isTheaterMode && (
        <div className="fixed inset-0 bg-black/95 z-40 transition-opacity duration-500 backdrop-blur-sm" onClick={() => setIsTheaterMode(false)} />
      )}
      
      <div className={`space-y-4 transition-all duration-500 ${isTheaterMode ? 'relative z-50 scale-105 shadow-2xl ring-4 ring-slate-800 rounded-2xl' : ''}`}>
        <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-900 shadow-lg relative group">
          
          <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
            {reactions.map(r => (
              <div 
                key={r.id} 
                className="absolute bottom-0 text-5xl animate-float-up opacity-0"
                style={{ left: r.left }}
              >
                {r.emoji}
              </div>
            ))}
          </div>

          {isNativeVideo ? (
            <video 
              ref={videoRef}
              src={video.contentUrl} 
              controls 
              controlsList="nodownload"
              className="w-full h-full bg-black object-contain relative z-10"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onTimeUpdate={() => {
                if (!videoRef.current) return;
                const current = videoRef.current.currentTime;
                setPlaybackSeconds(current);
                if (initialEndTime > 0 && current >= initialEndTime) {
                  videoRef.current.pause();
                  videoRef.current.currentTime = initialEndTime;
                  setIsPlaying(false);
                  setIsSegmentCompleted(true);
                  if (!isWatched) handleMarkAsWatched();
                } else if (initialStartTime > 0 && current < initialStartTime - 4 && isPlaying) {
                  videoRef.current.currentTime = initialStartTime;
                }
              }}
              poster={`https://placehold.co/1280x720/1e293b/ffffff?text=${encodeURIComponent(video.title)}`}
            />
          ) : (embedError || !embedUrl) ? (
            <div className="flex flex-col items-center justify-center h-full text-white space-y-4 bg-gradient-to-br from-slate-800 to-slate-900 p-8 relative z-10">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <PlayCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <p className="text-lg font-bold">{video.title}</p>
                <p className="text-slate-400 text-sm mt-1">Video cannot be embedded</p>
              </div>
              <a
                href={video.contentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
              >
                Watch Link Externally
              </a>
            </div>
          ) : 
          !isPlaying ? (
            <div className="absolute inset-0 cursor-pointer z-10" onClick={() => setIsPlaying(true)}>
              {thumbnailUrl && (
                <img src={thumbnailUrl} alt={video.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              )}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-blue-600/90 group-hover:bg-blue-500 rounded-full flex items-center justify-center backdrop-blur-sm shadow-xl transform group-hover:scale-110 transition-all duration-300">
                  <svg className="w-10 h-10 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-16">
                <h3 className="text-white text-xl font-bold truncate">{video.title}</h3>
                <p className="text-white/80 text-sm mt-1">Click to play lecture</p>
              </div>
            </div>
          ) : (
            <iframe
              ref={iframeRef}
              id={`youtube-iframe-${videoId}`}
              key={`${videoId}-${currentSeek || 0}`}
              width="100%"
              height="100%"
              src={embedUrl}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              onLoad={handleIframeLoad}
              className="absolute inset-0 w-full h-full z-10 bg-black"
            ></iframe>
          )}

          {/* Topic Concept Completed Celebration Overlay (Hard-Stop Lock) */}
          {isSegmentCompleted && (
            <div className="absolute inset-0 z-30 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-3 shadow-xl shadow-emerald-500/10">
                <Trophy className="w-8 h-8 text-emerald-400 animate-bounce" />
              </div>

              <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-2">
                Topic Concept Completed!
              </span>

              <h2 className="text-xl sm:text-2xl font-black text-white max-w-lg">
                {topicTitle || video.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md">
                You have successfully completed this topic segment (<span className="text-emerald-400 font-mono font-bold">{formatTimestamp(initialStartTime)} ➔ {formatTimestamp(initialEndTime)}</span>). Click below to proceed to the next topic!
              </p>

              <div className="flex items-center gap-2 mt-4 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-amber-300 text-xs font-bold">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>+50 XP Claimed for this Lecture</span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
                <button
                  type="button"
                  onClick={handleReplaySegment}
                  className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600 transition-all flex items-center gap-2 shadow-sm cursor-pointer active:scale-95"
                >
                  <span>↺ Replay Concept ({formatTimestamp(initialStartTime)})</span>
                </button>

                {nextTopic ? (
                  <button
                    type="button"
                    onClick={() => {
                      navigate(`/learn/topic/${nextTopic.id}`, {
                        state: {
                          topicTitle: nextTopic.title,
                          chapterTitle: chapterTitle,
                          subjectName: subjectName
                        }
                      });
                    }}
                    className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/25 transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <span>Next Topic: {nextTopic.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => navigate('/learn/syllabus')}
                    className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black bg-blue-600 hover:bg-blue-500 text-white transition-all flex items-center gap-2 shadow-md cursor-pointer active:scale-95"
                  >
                    <span>Return to Syllabus</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}

                {onOpenQuiz && (
                  <button
                    type="button"
                    onClick={onOpenQuiz}
                    className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                  >
                    <BrainCircuit className="w-4 h-4 text-indigo-400" />
                    <span>Practice AI Quiz</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Dedicated Concept Segment Progress Bar */}
        {initialEndTime > initialStartTime && (
          <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3.5 text-white shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs mb-2">
              <div className="flex items-center gap-2 font-bold text-slate-200">
                <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}`}></span>
                <span>Topic Concept Progress:</span>
                <span className="font-mono text-white bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                  {formatTimestamp(Math.max(0, Math.min(initialEndTime - initialStartTime, playbackSeconds - initialStartTime)))} / {formatTimestamp(initialEndTime - initialStartTime)}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <span>Segment: <strong className="text-indigo-400">{formatTimestamp(initialStartTime)}</strong> ➔ <strong className="text-rose-400">{formatTimestamp(initialEndTime)}</strong></span>
                <span className="bg-rose-500/20 text-rose-300 font-extrabold px-1.5 py-0.5 rounded text-[10px] border border-rose-500/30">
                  Auto-Stop Guard Active
                </span>
              </div>
            </div>
            
            <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden relative">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 transition-all duration-300"
                style={{
                  width: `${Math.min(100, Math.max(0, ((playbackSeconds - initialStartTime) / (initialEndTime - initialStartTime)) * 100))}%`
                }}
              />
            </div>
          </div>
        )}

        {/* Video Controls & Gamification Toolbar */}
        <div className={`flex flex-col space-y-4 pt-4 ${isTheaterMode ? 'text-white' : ''}`}>
          {/* Top Row: Title & Actions */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex-1">
              <h3 className={`text-xl font-bold ${isTheaterMode ? 'text-white' : 'text-slate-900'}`}>
                {video.title}
              </h3>
              {initialStartTime > 0 && (
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold bg-rose-500/10 text-rose-600 border border-rose-300/40">
                    <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                    <span>
                      {initialEndTime > initialStartTime 
                        ? `Topic Segment: ${formatTimestamp(initialStartTime)} ➔ ${formatTimestamp(initialEndTime)} (${Math.round((initialEndTime - initialStartTime) / 60)} mins)`
                        : `Topic Concept Starts At ${formatTimestamp(initialStartTime)}`}
                    </span>
                  </span>
                  <button
                    type="button"
                    onClick={() => handleSeekInternal(initialStartTime)}
                    className="text-[11px] font-bold text-indigo-500 hover:text-indigo-400 hover:underline flex items-center gap-1 transition-colors"
                  >
                    <span>↺ Jump to Concept Start</span>
                  </button>
                </div>
              )}
              {(isPlaying && videoId) && (
                <button onClick={() => setEmbedError(true)} className="text-xs text-slate-400 hover:text-red-500 mt-1 flex items-center transition-colors">
                  Video not playing? Try alternative player
                </button>
              )}
            </div>
            
            <div className="flex items-center gap-3 shrink-0">
              <button 
                onClick={() => setIsTheaterMode(!isTheaterMode)}
                className={`flex items-center px-4 py-2.5 rounded-xl font-medium transition-all shadow-sm border ${
                  isTheaterMode 
                    ? 'bg-slate-800 text-yellow-400 border-slate-700 hover:bg-slate-700' 
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:shadow-md'
                }`}
              >
                <Lightbulb className={`w-4 h-4 mr-2 ${isTheaterMode ? 'animate-pulse' : ''}`} />
                {isTheaterMode ? 'Lights On' : 'Theater Mode'}
              </button>

              <button 
                onClick={handleMarkAsWatched}
                disabled={isWatched || !canMarkWatched}
                className={`flex items-center px-5 py-2.5 rounded-xl font-bold transition-all shadow-sm ${
                  isWatched 
                    ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white border-none shadow-green-200' 
                    : canMarkWatched
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-200 border-none'
                        : 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
                }`}
              >
                {isWatched ? (
                  <><CheckCircle className="w-4 h-4 mr-2" /> Watched (+50 XP)</>
                ) : canMarkWatched ? (
                  <><CheckCircle className="w-4 h-4 mr-2 animate-bounce" /> Claim 50 XP</>
                ) : (
                  <><Clock className="w-4 h-4 mr-2" /> <span className="font-medium text-sm">Focus for {minutesLeft}m to unlock</span></>
                )}
              </button>
            </div>
          </div>

          {/* Bottom Row: Vibes & Anti-Cheat Status */}
          <div className={`flex flex-col sm:flex-row items-center justify-between p-3.5 rounded-xl border transition-colors gap-3 ${isTheaterMode ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-50 border-slate-200/60'}`}>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className={`text-xs font-bold uppercase tracking-wider hidden sm:block ${isTheaterMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Live Reactions
              </div>
              <div className="flex gap-2.5 flex-1 justify-around sm:justify-start">
                <button onClick={() => addReaction('🔥')} className={`w-10 h-10 flex items-center justify-center rounded-full shadow-sm border hover:scale-110 hover:-translate-y-1 transition-all text-xl ${isTheaterMode ? 'bg-slate-700 border-slate-600' : 'bg-white border-slate-200'}`} title="Fire">🔥</button>
                <button onClick={() => addReaction('🤯')} className={`w-10 h-10 flex items-center justify-center rounded-full shadow-sm border hover:scale-110 hover:-translate-y-1 transition-all text-xl ${isTheaterMode ? 'bg-slate-700 border-slate-600' : 'bg-white border-slate-200'}`} title="Mind Blown">🤯</button>
                <button onClick={() => addReaction('💡')} className={`w-10 h-10 flex items-center justify-center rounded-full shadow-sm border hover:scale-110 hover:-translate-y-1 transition-all text-xl ${isTheaterMode ? 'bg-slate-700 border-slate-600' : 'bg-white border-slate-200'}`} title="Insight">💡</button>
                <button onClick={() => addReaction('👏')} className={`w-10 h-10 flex items-center justify-center rounded-full shadow-sm border hover:scale-110 hover:-translate-y-1 transition-all text-xl ${isTheaterMode ? 'bg-slate-700 border-slate-600' : 'bg-white border-slate-200'}`} title="Clap">👏</button>
              </div>
            </div>
            
            <div className={`text-xs font-medium px-3 py-1.5 rounded-full flex items-center w-full sm:w-auto justify-center ${isTheaterMode ? 'bg-emerald-900/40 text-emerald-400 border border-emerald-800/50' : 'bg-emerald-50 text-emerald-700 border border-emerald-100'}`}>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
              Anti-Cheat Active
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ContentRatingWidget({ contentId }: { contentId: string }) {
  const [rated, setRated] = useState(false);
  const [isHelpful, setIsHelpful] = useState<boolean | null>(null);
  const [showFeedbackBox, setShowFeedbackBox] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState<number>(0);
  const [doubtCount, setDoubtCount] = useState<number>(0);

  useEffect(() => {
    let isMounted = true;
    learnApi.get(`/content/items/${contentId}/rating`)
      .then(res => {
        if (!isMounted) return;
        if (res.data) {
          setRated(res.data.rated);
          setIsHelpful(res.data.userRating);
          setFeedbackText(res.data.feedbackText || '');
          setHelpfulCount(res.data.helpfulCount || 0);
          setDoubtCount(res.data.doubtCount || 0);
        }
      })
      .catch(() => {});
    return () => { isMounted = false; };
  }, [contentId]);

  const handleRate = async (helpful: boolean) => {
    if (helpful) {
      setSubmitting(true);
      try {
        await learnApi.post(`/content/items/${contentId}/rating`, {
          isHelpful: true,
          feedbackText: feedbackText || null
        });
        setRated(true);
        setIsHelpful(true);
        setShowFeedbackBox(false);
        setHelpfulCount(prev => prev + 1);
        toast.success('Marked as helpful 👍 Thanks for the feedback!');
      } catch (e) {
        toast.error('Failed to submit feedback');
      } finally {
        setSubmitting(false);
      }
    } else {
      setIsHelpful(false);
      setShowFeedbackBox(true);
    }
  };

  const submitDoubtFeedback = async () => {
    setSubmitting(true);
    try {
      await learnApi.post(`/content/items/${contentId}/rating`, {
        isHelpful: false,
        feedbackText: feedbackText.trim() || 'Had doubts with this concept'
      });
      setRated(true);
      setShowFeedbackBox(false);
      setDoubtCount(prev => prev + 1);
      toast.success('Feedback recorded! Our instructors will review this lesson.');
    } catch (e) {
      toast.error('Failed to submit feedback');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <p className="font-bold text-slate-800">Was this lesson clear and helpful?</p>
          <p className="text-[11px] text-slate-500">Your feedback helps us continuously improve lesson quality.</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleRate(true)}
            disabled={submitting}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all border ${
              rated && isHelpful === true
                ? 'bg-emerald-100 text-emerald-800 border-emerald-300 shadow-2xs'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200'
            }`}
          >
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>Helpful</span>
            {helpfulCount > 0 && <span className="text-[10px] opacity-75 font-normal">({helpfulCount})</span>}
          </button>

          <button
            type="button"
            onClick={() => handleRate(false)}
            disabled={submitting}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all border ${
              rated && isHelpful === false
                ? 'bg-amber-100 text-amber-800 border-amber-300 shadow-2xs'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-amber-50 hover:text-amber-700 hover:border-amber-200'
            }`}
          >
            <ThumbsDown className="w-3.5 h-3.5" />
            <span>Had Doubts</span>
            {doubtCount > 0 && <span className="text-[10px] opacity-75 font-normal">({doubtCount})</span>}
          </button>
        </div>
      </div>

      {showFeedbackBox && (
        <div className="mt-3 pt-3 border-t border-slate-200/80 space-y-2 animate-in fade-in">
          <label className="text-[11px] font-semibold text-slate-600 block">
            What was confusing or needs improvement? (Optional)
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={feedbackText}
              onChange={e => setFeedbackText(e.target.value)}
              placeholder="e.g. Explanation was too fast, needed formula derivation..."
              className="flex-1 px-3 py-1.5 text-xs bg-white border border-slate-300 rounded-xl outline-none focus:border-indigo-500"
            />
            <button
              type="button"
              onClick={submitDoubtFeedback}
              disabled={submitting}
              className="px-3.5 py-1.5 text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors disabled:opacity-50"
            >
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

interface QuizQuestion {
  id: string;
  questionText: string;
  optionsJson: string;
  correctAnswer: string;
  explanation: string;
}

interface TopicQuizProps {
  topicId: string;
  topicTitle: string;
  chapterTitle: string;
  subjectName: string;
}

function generateTopicQuestions(topicTitle: string, chapterTitle: string, subjectName: string): QuizQuestion[] {
  return [
    {
      id: `${topicTitle}-q1`,
      questionText: `Which of the following statements is scientifically accurate regarding "${topicTitle}" in ${chapterTitle}?`,
      optionsJson: JSON.stringify({
        A: `The governing principle remains valid across all standard reference frames when expressed in SI units.`,
        B: `The core quantities are non-measurable and violate the principle of conservation.`,
        C: `All dimensional formulas for the parameters cancel out to yield zero magnitude.`,
        D: `It only applies to macroscopic objects at absolute zero without any energy transfer.`
      }),
      correctAnswer: 'A',
      explanation: `In standard curriculum studies, "${topicTitle}" represents a verified physical or mathematical principle that obeys dimensional homogeneity and conservation laws under consistent SI units.`
    },
    {
      id: `${topicTitle}-q2`,
      questionText: `In numerical and analytical problem-solving for ${topicTitle}, what is the essential first step to avoid step-marking penalties?`,
      optionsJson: JSON.stringify({
        A: `Directly multiply raw values without writing down standard governing formulas.`,
        B: `Convert all given parameters into standard SI units and verify sign conventions.`,
        C: `Ignore significant figures and assume all decimal constants are integers.`,
        D: `Omit units in the final numerical answer to avoid losing marks.`
      }),
      correctAnswer: 'B',
      explanation: `CBSE and entrance exam guidelines strictly award step marks for converting all given quantities into SI units, stating the standard formula, and appending proper units with the final result.`
    },
    {
      id: `${topicTitle}-q3`,
      questionText: `Which fundamental principle directly governs the behavior of ${topicTitle} within ${chapterTitle}?`,
      optionsJson: JSON.stringify({
        A: `Arbitrary non-standard empirical rules without dimensional consistency.`,
        B: `Newtonian / Classical and Conservation Principles applicable to ${subjectName}.`,
        C: `Linear scaling with zero boundary conditions at all thermal states.`,
        D: `Discontinuous variation dependent exclusively on the observer's location.`
      }),
      correctAnswer: 'B',
      explanation: `Concepts within ${chapterTitle} are derived from foundational conservation laws (energy, momentum, mass, or charge) established in ${subjectName}.`
    }
  ];
}

function TopicQuiz({ topicId, topicTitle, chapterTitle, subjectName }: TopicQuizProps) {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const [quizStartTime, setQuizStartTime] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const isUuid = (str: string) => {
    return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(str);
  };

  const startQuiz = async () => {
    setLoading(true);
    setQuizStartTime(Date.now());
    try {
      if (isUuid(topicId)) {
        const res = await learnApi.get(`/content/topics/${topicId}/questions`);
        if (res.data && Array.isArray(res.data) && res.data.length > 0) {
          setQuestions(res.data);
          setStarted(true);
          setLoading(false);
          return;
        }
      }
    } catch (err) {
      // Fallback
    }

    // Try AI generation endpoint
    try {
      const aiRes = await learnApi.post('/ai/generate-practice', { topic: `${topicTitle} (${chapterTitle})` });
      if (aiRes.data && aiRes.data.practiceSet) {
        const raw = aiRes.data.practiceSet;
        const match = raw.match(/\[[\s\S]*\]/);
        if (match) {
          const parsed = JSON.parse(match[0]);
          if (Array.isArray(parsed) && parsed.length > 0) {
            const formatted: QuizQuestion[] = parsed.map((item: any, idx: number) => ({
              id: `ai-q-${idx}`,
              questionText: item.question || item.questionText || `Question on ${topicTitle}`,
              optionsJson: typeof item.options === 'string' ? item.options : JSON.stringify(item.options || { A: '', B: '', C: '', D: '' }),
              correctAnswer: item.correct_answer || item.correctAnswer || 'A',
              explanation: item.explanation || `Derived from core principles of ${topicTitle}.`
            }));
            setQuestions(formatted);
            setStarted(true);
            setLoading(false);
            return;
          }
        }
      }
    } catch (e) {
      // AI practice endpoint offline or limit reached - use high-yield fallback
    }

    // High-yield topic generator fallback: guarantees 100% quiz uptime
    const fallbackQuestions = generateTopicQuestions(topicTitle, chapterTitle, subjectName);
    setQuestions(fallbackQuestions);
    setStarted(true);
    setLoading(false);
  };

  const handleFinish = async (finalScore: number) => {
    setFinished(true);
    
    // Log XP (10 XP per correct answer)
    const earnedXp = finalScore * 10;
    const realElapsedMinutes = quizStartTime > 0 
      ? Math.max(1, Math.round((Date.now() - quizStartTime) / 60000))
      : 2;

    if (earnedXp > 0) {
        import('sonner').then(({ toast }) => {
            toast.success(`Quiz Completed! +${earnedXp} XP (${realElapsedMinutes} min study) 🎉`, {
              style: { background: '#22c55e', color: 'white', border: 'none' }
            });
        });
        try {
            await learnApi.post('/analytics/session/log', {
                durationMinutes: realElapsedMinutes, // Authentic elapsed study duration
                sessionType: 'ACTIVE',
                wasStrict: true
            });
            window.dispatchEvent(new Event('study_session_logged'));
        } catch (e) {
            console.error("Failed to log study session for quiz");
        }
    }
  };

  if (!started) {
    return (
      <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto py-16">
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
          <div className="relative w-32 h-32 bg-gradient-to-br from-indigo-50 to-purple-100 border border-purple-200 rounded-full flex items-center justify-center shadow-inner">
            <BrainCircuit className="w-16 h-16 text-purple-600 animate-pulse" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border-2 border-white flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> AI Powered
          </div>
        </div>
        
        <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700 mb-4">
          Topic Mastery Quiz
        </h3>
        <p className="text-slate-600 text-lg mb-10 max-w-md leading-relaxed">
          Test your understanding with intelligent, dynamically generated questions and earn up to <strong className="text-purple-600">10 XP per question</strong>!
        </p>
        
        <button 
          onClick={startQuiz}
          disabled={loading}
          className="relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-purple-500/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/40 disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {loading ? (
            <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Generating Quiz...</>
          ) : (
            <>Start Challenge <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></>
          )}
        </button>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="text-center py-24 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
        <BrainCircuit className="w-16 h-16 text-slate-300 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-slate-700">No Questions Found</h3>
        <p className="text-slate-500 mt-2">The AI is still processing the topic material. Please check back later!</p>
      </div>
    );
  }

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);
    let message = "Keep learning!";
    let color = "from-slate-500 to-slate-600";
    if (percentage >= 80) { message = "Outstanding! Master level unlocked."; color = "from-amber-400 to-orange-500"; }
    else if (percentage >= 50) { message = "Good job! You're getting there."; color = "from-emerald-400 to-green-500"; }
    
    return (
      <div className="flex flex-col items-center justify-center text-center max-w-lg mx-auto py-16 animate-in zoom-in-95 duration-500">
        <div className="relative mb-6">
          <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-full blur-2xl opacity-40`} />
          <div className={`w-32 h-32 bg-gradient-to-br ${color} rounded-full flex flex-col items-center justify-center text-white shadow-xl border-4 border-white relative z-10`}>
            <Trophy className="w-10 h-10 mb-1 opacity-90" />
            <span className="text-3xl font-black">{percentage}%</span>
          </div>
        </div>
        
        <h3 className="text-3xl font-black text-slate-900 mb-2">Quiz Completed!</h3>
        <p className="text-slate-600 text-lg mb-2 font-medium">{message}</p>
        <div className="bg-slate-100 rounded-xl px-6 py-3 mb-10 flex items-center gap-4">
           <div className="text-center">
              <span className="block text-2xl font-bold text-slate-800">{score}</span>
              <span className="text-xs font-bold text-slate-500 uppercase">Correct</span>
           </div>
           <div className="w-px h-10 bg-slate-300"></div>
           <div className="text-center">
              <span className="block text-2xl font-bold text-purple-600">+{score * 10}</span>
              <span className="text-xs font-bold text-purple-400 uppercase">XP Earned</span>
           </div>
        </div>
        
        <button 
          onClick={() => { setStarted(false); setFinished(false); setScore(0); setCurrentIndex(0); }}
          className="px-8 py-3.5 bg-slate-900 text-white rounded-xl font-bold shadow-lg shadow-slate-900/20 hover:bg-slate-800 hover:-translate-y-1 transition-all"
        >
          Try Another Quiz
        </button>
      </div>
    );
  }

  const q = questions[currentIndex];
  let options: Record<string, string> = {};
  try {
    options = JSON.parse(q.optionsJson);
  } catch(e) {}

  const handleOptionSelect = (key: string) => {
    if (showExplanation) return;
    setSelectedOption(key);
    setShowExplanation(true);
    if (key === q.correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      handleFinish(score + (selectedOption === q.correctAnswer ? 1 : 0));
    }
  };

  const progressPercentage = ((currentIndex) / questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto py-8">
      {/* Progress Header */}
      <div className="mb-8">
        <div className="flex justify-between items-end mb-3">
          <div>
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Question {currentIndex + 1}</span>
            <span className="text-xs font-bold text-slate-400 ml-1">of {questions.length}</span>
          </div>
          <div className="flex items-center gap-1 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold">
             <Trophy className="w-3.5 h-3.5" /> Score: {score * 10}
          </div>
        </div>
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500 ease-out" 
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
      
      {/* Question Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-8 leading-relaxed">
          {q.questionText}
        </h3>
        
        <div className="space-y-3">
          {Object.entries(options).map(([key, value]) => {
            const isCorrect = key === q.correctAnswer;
            const isSelected = key === selectedOption;
            
            let btnClass = "w-full flex items-center text-left p-4 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden group ";
            let icon = null;
            
            if (!showExplanation) {
              btnClass += "border-slate-100 bg-white hover:border-purple-300 hover:bg-purple-50 hover:shadow-md hover:-translate-y-0.5 cursor-pointer text-slate-700";
            } else {
              if (isCorrect) {
                btnClass += "border-emerald-500 bg-emerald-50 text-emerald-900 shadow-md";
                icon = <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0 ml-3 animate-in zoom-in" />;
              } else if (isSelected) {
                btnClass += "border-red-400 bg-red-50 text-red-900";
                icon = <X className="w-6 h-6 text-red-500 shrink-0 ml-3 animate-in zoom-in" />;
              } else {
                btnClass += "border-slate-100 bg-slate-50 opacity-60 text-slate-500 cursor-default";
              }
            }

            return (
              <button 
                key={key} 
                onClick={() => handleOptionSelect(key)}
                className={btnClass}
                disabled={showExplanation}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 shrink-0 transition-colors ${showExplanation && isCorrect ? 'bg-emerald-200 text-emerald-800' : showExplanation && isSelected ? 'bg-red-200 text-red-800' : 'bg-slate-100 text-slate-500 group-hover:bg-purple-200 group-hover:text-purple-800'}`}>
                  {key}
                </div>
                <span className="font-medium text-lg flex-1 pr-2">{value}</span>
                {icon}
              </button>
            );
          })}
        </div>
      </div>

      {/* AI Explanation */}
      {showExplanation && (
        <div className="animate-in fade-in slide-in-from-bottom-4 zoom-in-95 duration-300">
          <div className={`relative overflow-hidden p-6 rounded-3xl mb-6 border ${selectedOption === q.correctAnswer ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'}`}>
            {/* Sparkles Decoration */}
            <div className="absolute -top-4 -right-4 opacity-10">
              <Sparkles className={`w-32 h-32 ${selectedOption === q.correctAnswer ? 'text-emerald-500' : 'text-red-500'}`} />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                 {selectedOption === q.correctAnswer 
                   ? <div className="bg-emerald-200/50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1"><Sparkles className="w-3 h-3" /> Excellent!</div>
                   : <div className="bg-red-200/50 text-red-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1"><BrainCircuit className="w-3 h-3" /> AI Insight</div>
                 }
              </div>
              <p className={`text-base leading-relaxed ${selectedOption === q.correctAnswer ? 'text-emerald-900' : 'text-red-900'}`}>
                <span className="font-bold opacity-80 mr-2">Explanation:</span>
                {q.explanation || 'The correct option clearly addresses the core concept of the topic.'}
              </p>
            </div>
          </div>
          
          <button 
            onClick={nextQuestion}
            className="w-full flex items-center justify-center bg-slate-900 text-white font-bold py-4 px-6 rounded-2xl shadow-xl hover:bg-slate-800 hover:-translate-y-1 transition-all"
          >
            {currentIndex < questions.length - 1 ? 'Next Question' : 'View Results'} <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </div>
      )}
    </div>
  );
}


// --- AI Tutor Widget ---
function AITutorWidget({ topicName }: { topicId?: string, topicName: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [isPro, setIsPro] = useState<boolean>(() => {
    const plan = localStorage.getItem('learn_subscription_plan');
    return Boolean(plan && plan.toUpperCase() !== 'FREE');
  });
  const [quota, setQuota] = useState<{ doubtsUsedToday: number; dailyLimit: number; doubtsRemaining: number; isPro: boolean } | null>(null);
  const [chatHistory, setChatHistory] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: `Hi! I'm your PrepLens Tutor for ${topicName || 'this topic'}. What do you need help with?` }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Sync latest subscription status from backend profile
    learnApi.get('/profile').then(res => {
      if (res.data) {
        const isPaid = Boolean(res.data.isPaidUser || (res.data.subscriptionPlan && res.data.subscriptionPlan.toUpperCase() !== 'FREE'));
        setIsPro(isPaid);
        if (res.data.subscriptionPlan) {
          localStorage.setItem('learn_subscription_plan', res.data.subscriptionPlan);
        }
      }
    }).catch(() => {});

    // Fetch live doubt quota on mount
    learnApi.get('/ai/doubt-quota').then(res => {
      if (res.data) {
        setQuota(res.data);
        if (res.data.isPro) setIsPro(true);
      }
    }).catch(() => {});
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory, isOpen]);

  useEffect(() => {
    if (topicName && topicName !== 'this topic' && chatHistory.length === 1 && chatHistory[0].text.includes('this topic')) {
      setChatHistory([{ role: 'ai', text: `Hi! I'm your PrepLens Tutor for ${topicName}. What do you need help with?` }]);
    }
  }, [topicName]);


  const handleAsk = async () => {
    if (!question.trim()) return;
    const q = question;
    setQuestion('');
    setChatHistory(prev => [...prev, { role: 'user', text: q }]);
    setLoading(true);

    try {
      const res = await learnApi.post('/ai/ask-doubt', { topic: topicName, question: q });
      setChatHistory(prev => [...prev, { role: 'ai', text: res.data.answer }]);
      if (res.data && res.data.doubtsRemaining !== undefined) {
        setQuota({
          doubtsUsedToday: res.data.doubtsUsedToday,
          dailyLimit: res.data.dailyLimit,
          doubtsRemaining: res.data.doubtsRemaining,
          isPro: Boolean(res.data.isPro),
        });
      }
    } catch (e: any) {
      if (e.response?.status === 403) {
        setChatHistory(prev => [...prev, { role: 'ai', text: "🔒 " + e.response.data.error }]);
      } else {
        setChatHistory(prev => [...prev, { role: 'ai', text: "Sorry, I'm having trouble thinking right now." }]);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-40 flex items-center justify-center animate-bounce group"
      >
        <Sparkles className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Ask AI Tutor
        </span>
      </button>

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[calc(100vw-2.5rem)] sm:w-[440px] h-[580px] max-h-[85vh] bg-white shadow-2xl border border-slate-200 rounded-2xl z-[60] flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-200" />
              <div>
                <h3 className="font-bold text-sm leading-tight">PrepLens AI Tutor</h3>
                <p className="text-[10px] text-indigo-200">Instant Doubt Clearing & Concept Explanations</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white p-1 hover:bg-white/10 rounded-lg transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {chatHistory.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'user' ? (
                  <div className="max-w-[85%] rounded-2xl p-3 text-sm shadow-sm bg-indigo-600 text-white rounded-tr-sm whitespace-pre-wrap leading-relaxed font-medium">
                    {msg.text}
                  </div>
                ) : (
                  <div className="max-w-[92%] rounded-2xl p-3.5 text-sm shadow-sm bg-white border border-slate-200 text-slate-800 rounded-tl-sm overflow-hidden">
                    <div className="prose prose-sm prose-slate max-w-none text-slate-800 leading-relaxed font-sans [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 [&_h1]:text-base [&_h1]:font-bold [&_h1]:text-indigo-950 [&_h1]:mt-3 [&_h1]:mb-1.5 [&_h2]:text-sm [&_h2]:font-bold [&_h2]:text-indigo-900 [&_h2]:mt-3 [&_h2]:mb-1.5 [&_h3]:text-xs [&_h3]:font-bold [&_h3]:text-indigo-800 [&_h3]:mt-2.5 [&_h3]:mb-1 [&_p]:my-1.5 [&_p]:text-slate-700 [&_ul]:my-1.5 [&_ul]:pl-5 [&_ul]:list-disc [&_ol]:my-1.5 [&_ol]:pl-5 [&_ol]:list-decimal [&_li]:my-0.5 [&_li]:text-slate-700 [&_strong]:text-slate-900 [&_strong]:font-semibold [&_code]:bg-slate-100 [&_code]:text-indigo-600 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-xs [&_hr]:my-2.5 [&_hr]:border-slate-200">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          table: ({node, ...props}) => (
                            <div className="my-2.5 overflow-x-auto rounded-lg border border-slate-200 shadow-xs">
                              <table className="min-w-full divide-y divide-slate-200 text-xs text-left" {...props} />
                            </div>
                          ),
                          thead: ({node, ...props}) => (
                            <thead className="bg-slate-100 font-semibold text-slate-900" {...props} />
                          ),
                          th: ({node, ...props}) => (
                            <th className="px-2.5 py-1.5 font-bold whitespace-nowrap text-[11px] text-slate-800" {...props} />
                          ),
                          td: ({node, ...props}) => (
                            <td className="px-2.5 py-1.5 border-t border-slate-100 text-slate-700 text-[11px] align-top" {...props} />
                          ),
                          blockquote: ({node, ...props}) => (
                            <blockquote className="border-l-4 border-indigo-400 bg-indigo-50/50 pl-3 py-1.5 my-2 italic text-slate-700 text-xs rounded-r" {...props} />
                          )
                        }}
                      >
                        {msg.text}
                      </ReactMarkdown>
                    </div>
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 text-slate-500 rounded-2xl rounded-tl-sm p-4 shadow-sm flex gap-1">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-slate-200">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={question}
                onChange={e => setQuestion(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleAsk()}
                placeholder="Ask a doubt..."
                className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500"
              />
              <button 
                onClick={handleAsk}
                disabled={loading || !question.trim()}
                className="bg-indigo-600 text-white p-2.5 rounded-xl hover:bg-indigo-700 disabled:opacity-50 transition-colors"
              >
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-2 text-center">
              {isPro ? (
                <p className="text-[11px] font-semibold text-indigo-600 flex items-center justify-center gap-1.5 bg-indigo-50/70 py-1 px-2.5 rounded-lg border border-indigo-100">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-500 animate-pulse" />
                  <span>
                    Pro Member · {quota ? `${quota.doubtsRemaining} of ${quota.dailyLimit} doubts left today` : '20 Doubts/day Active'}
                  </span>
                </p>
              ) : (
                <p className="text-[10px] text-slate-400 flex items-center justify-center gap-1.5">
                  <span>
                    ⚡ {quota ? `${quota.doubtsRemaining} of ${quota.dailyLimit} free doubts left today` : '3 free doubts per day'}
                  </span>
                  <a href="/learn/pricing" className="text-indigo-600 font-bold hover:underline">Upgrade</a>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
// --- End AI Tutor Widget ---


export function TopicStudyPage() {
  const [activePdf, setActivePdf] = useState<ContentItem | null>(null);
  const [pdfReadTime, setPdfReadTime] = useState(0);
  const [pdfWatched, setPdfWatched] = useState<Record<string, boolean>>({});

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (activePdf && !document.hidden) {
      interval = setInterval(() => {
        setPdfReadTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [activePdf]);

  const REQUIRED_PDF_SECONDS = 1 * 60; // 1 minute for testing (can be increased to 2 or 5)

  const handleClaimPdfXp = async () => {
    if (!activePdf) return;
    setPdfWatched(prev => ({...prev, [activePdf.id]: true}));
    
    // Confetti
    import('sonner').then(({ toast }) => {
      toast.success('Notes Reading Completed! +20 XP 🎉', {
        style: { background: '#22c55e', color: 'white', border: 'none' }
      });
    });

    try {
        await learnApi.post('/analytics/session/log', {
            durationMinutes: 20, // 20 XP
            sessionType: 'NOTES',
            wasStrict: true
        });
        window.dispatchEvent(new Event('study_session_logged'));
    } catch (e) {
        console.error("Failed to log XP for PDF");
    }
  };

  const { topicId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState<'video' | 'notes' | 'quiz' | 'ai-notes'>('video');
  const [contentItems, setContentItems] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [videoSeekSeconds, setVideoSeekSeconds] = useState<number | null>(null);

  // Resolve authentic metadata from global curriculum (resilient to F5 refresh / direct navigation)
  const resolvedMeta = topicId ? findTopicMetadata(topicId) : null;

  const topicTitle = (location.state as any)?.topicTitle || resolvedMeta?.topicTitle || contentItems[0]?.title || 'Study Topic';
  const chapterTitle = (location.state as any)?.chapterTitle || resolvedMeta?.chapterTitle || 'High-Yield Engine';
  const subjectName = resolvedMeta?.subjectName || (location.state as any)?.subjectName || 'Science';
  const classLevel = resolvedMeta?.classLevel || (location.state as any)?.classLevel || 'Class 11';
  const chapterId = (location.state as any)?.chapterId || resolvedMeta?.chapterId;

  // Sibling & Next Topic Calculation for Seamless Journey
  const allTopicsFromState = (location.state as any)?.allTopics as any[] | undefined;
  const [chapterTopics, setChapterTopics] = useState<any[]>(allTopicsFromState || []);

  useEffect(() => {
    if (allTopicsFromState && allTopicsFromState.length > 0) {
      setChapterTopics(allTopicsFromState);
      return;
    }
    if (!chapterId) return;
    learnApi.get(`/content/chapters/${chapterId}/topics`)
      .then(res => {
        if (res.data && Array.isArray(res.data)) {
          setChapterTopics(res.data);
        }
      })
      .catch(() => {});
  }, [chapterId, allTopicsFromState]);

  const effectiveNextTopic = useMemo(() => {
    if (chapterTopics.length > 0 && topicId) {
      const idx = chapterTopics.findIndex((t: any) => t.id?.toLowerCase() === topicId.toLowerCase());
      if (idx !== -1 && idx < chapterTopics.length - 1) {
        return {
          id: chapterTopics[idx + 1].id,
          title: chapterTopics[idx + 1].title
        };
      }
    }
    return null;
  }, [chapterTopics, topicId]);

  const handleSeekVideo = (seconds: number) => {
    setVideoSeekSeconds(seconds);
    setActiveTab('video');

    setTimeout(() => {
      const el = document.getElementById('lecture-video-player');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);

    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const timeFormatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    toast.success(`Jumping lecture to ${timeFormatted} ⏱️`);
  };

  useEffect(() => {
    if (!topicId) return;
    const fetchContent = async () => {
      setLoading(true);
      try {
        const res = await learnApi.get(`/content/topics/${topicId}/items`);
        setContentItems(res.data || []);
      } catch (err) {
        console.error('Failed to fetch content items', err);
        setContentItems([]);
      }
      setLoading(false);
    };
    fetchContent();
  }, [topicId]);

  const videos = contentItems.filter(i => i.type === 'VIDEO');
  const pdfs = contentItems.filter(i => i.type === 'NOTES_PDF');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <button
        onClick={() => navigate('/learn/syllabus')}
        className="flex items-center text-slate-500 hover:text-slate-800 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Syllabus
      </button>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="border-b border-slate-200 bg-slate-50 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">{topicTitle}</h1>
            <p className="text-slate-600 mt-0.5 text-xs font-medium">
              {chapterTitle} • PrepLens Learn High-Yield Engine
            </p>
          </div>
          <button
            onClick={() => setActiveTab('ai-notes')}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold hover:bg-indigo-100 transition-colors"
          >
            <Sparkles className="h-3.5 w-3.5 text-indigo-600 animate-pulse" />
            <span>AI Notes Available</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-200 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('video')}
            className={`flex-1 min-w-[130px] py-4 text-center font-medium border-b-2 transition-colors flex items-center justify-center gap-2 ${
              activeTab === 'video' ? 'border-blue-600 text-blue-600 bg-blue-50/50 font-bold' : 'border-transparent text-slate-600 hover:bg-slate-50'
            }`}
          >
            <PlayCircle className="w-5 h-5" /> Video Lecture
            {videos.length > 0 && (
              <span className="ml-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {videos.length}
              </span>
            )}
          </button>

          {/* AI Smart Notes Tab */}
          <button
            onClick={() => setActiveTab('ai-notes')}
            className={`flex-1 min-w-[170px] py-4 text-center font-medium border-b-2 transition-colors flex items-center justify-center gap-2 ${
              activeTab === 'ai-notes' 
                ? 'border-indigo-600 text-indigo-600 bg-indigo-50/50 font-bold' 
                : 'border-transparent text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Sparkles className="w-4.5 h-4.5 text-indigo-500 animate-pulse" /> 
            <span>AI Smart Notes</span>
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow-2xs">
              Fast Revision
            </span>
          </button>

          <button
            onClick={() => setActiveTab('notes')}
            className={`flex-1 min-w-[130px] py-4 text-center font-medium border-b-2 transition-colors flex items-center justify-center gap-2 ${
              activeTab === 'notes' ? 'border-blue-600 text-blue-600 bg-blue-50/50 font-bold' : 'border-transparent text-slate-600 hover:bg-slate-50'
            }`}
          >
            <FileText className="w-5 h-5" /> Smart Notes (PDF)
            {pdfs.length > 0 && (
              <span className="ml-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {pdfs.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex-1 min-w-[120px] py-4 text-center font-medium border-b-2 transition-colors flex items-center justify-center gap-2 ${
              activeTab === 'quiz' ? 'border-blue-600 text-blue-600 bg-blue-50/50 font-bold' : 'border-transparent text-slate-600 hover:bg-slate-50'
            }`}
          >
            <BrainCircuit className="w-5 h-5" /> AI Quiz
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 min-h-[500px]">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            </div>
          ) : (
            <>
              {/* VIDEO TAB */}
              {activeTab === 'video' && (
                <div className="space-y-8 max-w-4xl mx-auto">
                  {videos.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center bg-slate-50/70 border border-dashed border-slate-200 rounded-3xl p-8">
                      <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-3">
                        <Video className="w-7 h-7 text-indigo-500" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-800">No Video Lecture Recorded Yet</h3>
                      <p className="text-slate-500 mt-1 text-xs max-w-md leading-relaxed">
                        Our master educators are preparing the video lecture for "{topicTitle}". In the meantime, fast-track your study using AI Smart Notes or test your retention with the AI Quiz!
                      </p>
                      <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
                        <button
                          onClick={() => setActiveTab('ai-notes')}
                          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Study AI Smart Notes</span>
                        </button>
                        <button
                          onClick={() => setActiveTab('quiz')}
                          className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 active:scale-95"
                        >
                          <BrainCircuit className="w-3.5 h-3.5 text-purple-600" />
                          <span>Take AI Quiz</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    videos.map((video) => (
                      <div key={video.id} id="lecture-video-player" className="space-y-4">
                        <VideoPlayer 
                          video={video} 
                          seekTime={videoSeekSeconds}
                          onSeek={handleSeekVideo}
                          topicTitle={topicTitle}
                          chapterTitle={chapterTitle}
                          subjectName={subjectName}
                          nextTopic={effectiveNextTopic}
                          onOpenQuiz={() => setActiveTab('quiz')}
                        />
                        <ContentRatingWidget contentId={video.id} />
                      </div>
                    ))
                  )}

                  {/* Fast Revision AI Notes Callout Banner */}
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-indigo-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
                    <div className="flex items-center gap-3.5">
                      <div className="h-11 w-11 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-indigo-600/20">
                        <Sparkles className="h-5 w-5 animate-pulse" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Don't have 45 mins to re-watch this lecture?</h4>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Read AI-extracted video timestamps, key definitions, formulas & sure-shot exam answers in 3 minutes.
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveTab('ai-notes')}
                      className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs shrink-0 flex items-center gap-2 active:scale-95"
                    >
                      <span>Read AI Smart Notes</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* NOTES TAB */}
              {activeTab === 'notes' && (
                <div className="space-y-6 max-w-5xl mx-auto">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                    <div>
                      <h2 className="text-2xl font-bold text-blue-950 flex items-center gap-2">
                        <FileText className="text-blue-600" /> Smart Study Notes
                      </h2>
                      <p className="text-blue-800/70 mt-1 font-medium">Read materials directly in our focus-reader to earn XP.</p>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-blue-100 flex items-center gap-2">
                       <span className="flex h-3 w-3 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                       </span>
                       <span className="text-sm font-bold text-slate-700">Anti-Cheat Active</span>
                    </div>
                  </div>

                  {pdfs.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-24 text-center bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl">
                      <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                        <FileText className="w-10 h-10 text-slate-300" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-700">No Materials Yet</h3>
                      <p className="text-slate-500 mt-1 text-sm max-w-sm">Admin hasn't uploaded any notes or PDFs for this topic yet. Check back later!</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {pdfs.map((pdf) => (
                        <div key={pdf.id} className="flex flex-col bg-white border border-slate-200 rounded-2xl p-4 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group">
                          <div className="flex">
                            {/* Thumbnail Left */}
                            <div className="w-24 h-32 bg-gradient-to-br from-slate-100 to-slate-50 rounded-xl border border-slate-200 flex flex-col items-center justify-center flex-shrink-0 relative overflow-hidden group-hover:border-blue-200 transition-colors">
                              <div className="w-10 h-2 bg-red-500 absolute top-0 left-0 right-0"></div>
                              <File className="w-10 h-10 text-slate-400 group-hover:text-blue-500 transition-colors mb-2" />
                              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">PDF</span>
                            </div>
                            
                            {/* Details Right */}
                            <div className="flex-1 ml-5 flex flex-col justify-between py-1">
                              <div>
                                <h3 className="font-bold text-slate-800 text-lg leading-tight line-clamp-2 group-hover:text-blue-700 transition-colors">{pdf.title}</h3>
                                <p className="text-xs text-slate-500 font-medium mt-1.5 flex items-center gap-1">
                                  <Clock className="w-3.5 h-3.5" /> Est. 10 min read
                                </p>
                              </div>
                              
                              <div className="flex gap-3 mt-4">
                                <button 
                                  onClick={() => { setActivePdf(pdf); setPdfReadTime(0); }}
                                  className="flex-1 flex items-center justify-center gap-2 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition-all shadow-sm shadow-blue-200 hover:-translate-y-0.5"
                                >
                                  <PlayCircle className="w-4 h-4" /> Read & Earn XP
                                </button>
                                <a
                                  href={pdf.contentUrl}
                                  download
                                  className="w-11 h-11 flex items-center justify-center bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl border border-slate-200 transition-colors hover:text-blue-600"
                                  title="Download for offline"
                                >
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="mt-3 pt-3 border-t border-slate-100">
                            <ContentRatingWidget contentId={pdf.id} />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* PDF READER MODAL */}
              {activePdf && (
                <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex flex-col animate-in fade-in zoom-in-95 duration-200">
                  {/* Reader Header */}
                  <div className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-4 sm:px-6 shadow-xl">
                     <div className="flex items-center gap-4 overflow-hidden">
                       <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center shrink-0">
                         <FileText className="w-5 h-5 text-blue-400" />
                       </div>
                       <div className="min-w-0">
                         <h2 className="font-bold text-white truncate">{activePdf.title}</h2>
                         <div className="flex items-center gap-2 mt-0.5">
                            <span className="flex h-2 w-2 relative">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            <p className="text-xs text-slate-400 font-medium">
                              {pdfWatched[activePdf.id] ? (
                                <span className="text-green-400">XP Claimed! You can close now.</span>
                              ) : (
                                <span>Reading Session: Stay focused for {Math.max(0, Math.ceil((REQUIRED_PDF_SECONDS - pdfReadTime)/60))} more mins</span>
                              )}
                            </p>
                         </div>
                       </div>
                     </div>
                     <div className="flex items-center gap-3 shrink-0 ml-4">
                       <button 
                         disabled={pdfWatched[activePdf.id] || pdfReadTime < REQUIRED_PDF_SECONDS} 
                         onClick={handleClaimPdfXp}
                         className={`hidden sm:flex items-center px-4 py-2 rounded-xl font-bold transition-all ${
                           pdfWatched[activePdf.id]
                             ? 'bg-green-500/20 text-green-400 border border-green-500/50 cursor-default'
                             : pdfReadTime >= REQUIRED_PDF_SECONDS
                                ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg shadow-green-900/50 hover:scale-105'
                                : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                         }`}
                       >
                          {pdfWatched[activePdf.id] ? (
                            <><CheckCircle className="w-4 h-4 mr-2" /> +20 XP Earned</>
                          ) : pdfReadTime >= REQUIRED_PDF_SECONDS ? (
                            <><CheckCircle className="w-4 h-4 mr-2 animate-bounce" /> Claim 20 XP</>
                          ) : (
                            <><Clock className="w-4 h-4 mr-2" /> Focus to unlock</>
                          )}
                       </button>
                       <button 
                         onClick={() => { setActivePdf(null); setPdfReadTime(0); }}
                         className="w-10 h-10 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl flex items-center justify-center transition-colors border border-slate-700 hover:border-slate-500"
                       >
                         <X className="w-5 h-5" />
                       </button>
                     </div>
                  </div>
                  
                  {/* Mobile Claim Button (only shows on small screens if ready) */}
                  {(!pdfWatched[activePdf.id] && pdfReadTime >= REQUIRED_PDF_SECONDS) && (
                    <div className="sm:hidden bg-slate-900 p-3 border-b border-slate-800">
                       <button 
                         onClick={handleClaimPdfXp}
                         className="w-full flex items-center justify-center px-4 py-3 rounded-xl font-bold transition-all bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg animate-pulse"
                       >
                          <CheckCircle className="w-5 h-5 mr-2" /> Claim 20 XP
                       </button>
                    </div>
                  )}

                  {/* Reader Iframe */}
                  <div className="flex-1 p-2 sm:p-6 pb-0 flex justify-center overflow-hidden">
                     <div className="w-full max-w-5xl h-full bg-white rounded-t-xl overflow-hidden shadow-2xl relative">
                        {/* Loading State */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50">
                           <Loader2 className="w-8 h-8 animate-spin text-blue-500 mb-4" />
                           <p className="text-slate-500 font-medium">Loading Document...</p>
                        </div>
                        <iframe 
                          src={activePdf.contentUrl} 
                          className="relative z-10 w-full h-full border-0" 
                          title={activePdf.title}
                        />
                     </div>
                  </div>
                </div>
              )}

              {/* QUIZ TAB */}
              {activeTab === 'quiz' && (
                <TopicQuiz 
                  topicId={topicId || ''} 
                  topicTitle={topicTitle}
                  chapterTitle={chapterTitle}
                  subjectName={subjectName}
                />
              )}

              {/* AI SMART NOTES TAB */}
              {activeTab === 'ai-notes' && (
                <TopicAiNotesView
                  topicTitle={topicTitle}
                  chapterTitle={chapterTitle}
                  subjectName={subjectName}
                  classLevel={classLevel}
                  hasVideo={videos.length > 0}
                  onSeekVideo={handleSeekVideo}
                />
              )}
            </>
          )}
        </div>
      </div>

      <AITutorWidget topicName={topicTitle} />
    </div>
  );
}
