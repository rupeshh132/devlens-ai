import { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import { Trophy, Flame, AlertTriangle } from 'lucide-react';
import { Navbar } from '@/components/ui/navbar';

export function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await api.get('/gamification/leaderboard');
        setLeaderboard(res.data);
      } catch (error) {
        console.error("Failed to fetch leaderboard", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLeaderboard();
  }, []);

  if (loading) return <div className="p-8 text-center text-foreground mt-20">Loading Top Students...</div>;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 p-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-foreground flex items-center justify-center gap-3">
            <Trophy className="w-10 h-10 text-yellow-500" />
            Global Leaderboard
          </h1>
          <p className="text-muted-foreground mt-3 text-lg">Top 50 students ranked by focus and completed projects.</p>
        </div>

        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted text-foreground">
              <tr>
                <th className="px-6 py-5 font-bold text-lg">Rank</th>
                <th className="px-6 py-5 font-bold text-lg">Student</th>
                <th className="px-6 py-5 font-bold text-lg text-right">Points</th>
                <th className="px-6 py-5 font-bold text-lg text-right">Focus Fails</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-muted-foreground text-lg">No rankings yet. Start learning to get on the board!</td>
                </tr>
              ) : (
                leaderboard.map((profile: any, index: number) => (
                  <tr key={profile.id} className="border-t border-border hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-5">
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold ${
                        index === 0 ? 'bg-yellow-500 text-black' :
                        index === 1 ? 'bg-gray-300 text-black' :
                        index === 2 ? 'bg-amber-600 text-white' :
                        'text-foreground'
                      }`}>
                        #{index + 1}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="font-semibold text-foreground text-base">
                        {profile?.user?.email?.split('@')[0] || 'Anonymous User'}
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <div className="flex items-center justify-end gap-2 font-bold text-primary text-lg">
                        <Flame className="w-5 h-5 text-orange-500" />
                        {profile.totalPoints}
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <div className="flex items-center justify-end gap-2 text-muted-foreground font-medium">
                        {profile.focusFails > 0 ? (
                          <>
                            <AlertTriangle className="w-4 h-4 text-red-500" />
                            <span className="text-red-500">{profile.focusFails} penalties</span>
                          </>
                        ) : (
                          <span className="text-green-500">Perfect Focus!</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
