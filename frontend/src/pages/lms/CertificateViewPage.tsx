import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '@/lib/api';
import { Download, Shield, Award } from 'lucide-react';

// ──────────────────────────────────────────────────────────────
// Aapka signature yahan add karo:
// 1. Apna signature ek white paper pe karo
// 2. Phone se scan ya photo lo, background crop karo
// 3. Us image ko frontend/public/signature.png naam se save karo
// 4. Neeche wali line uncomment karo:
const SIGNATURE_URL = '/signature.jpg'; // ✅ Signature active hai
// ──────────────────────────────────────────────────────────────

export function CertificateViewPage() {
  const { id } = useParams<{ id: string }>();
  const [cert, setCert] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const certRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    api.get(`/certificates/${id}`).then(res => {
      setCert(res.data);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, [id]);

  const handlePrint = () => {
    window.print();
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-muted-foreground font-medium">Loading Certificate...</p>
      </div>
    </div>
  );

  if (!cert) return (
    <div className="p-8 text-center text-red-500 font-semibold">
      Certificate not found or you don't have access.
    </div>
  );

  const userName = cert.user.firstName && cert.user.firstName !== cert.user.email
    ? `${cert.user.firstName}${cert.user.lastName && cert.user.lastName.trim() ? ' ' + cert.user.lastName : ''}`
    : cert.user.email.split('@')[0].replace(/[._]/g, ' ');

  const issuedDate = new Date(cert.issuedAt).toLocaleDateString('en-IN', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <>
      {/* Print styles */}
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #cert-print-area, #cert-print-area * { visibility: visible; }
          #cert-print-area { 
            position: fixed; top: 0; left: 0; 
            width: 100vw; height: 100vh;
            margin: 0; padding: 0;
          }
          .no-print { display: none !important; }
        }
      `}</style>

      <div className="min-h-screen bg-gray-100 py-8 px-4">
        {/* Action Bar */}
        <div className="no-print max-w-[900px] mx-auto mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Shield className="w-4 h-4 text-green-600" />
            <span>Verified Certificate · ID: <code className="font-mono text-xs bg-gray-200 px-1.5 py-0.5 rounded">{cert.id?.slice(0, 16)}...</code></span>
          </div>
          <button
            onClick={handlePrint}
            className="no-print flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-lg font-semibold text-sm shadow transition-all"
          >
            <Download className="w-4 h-4" />
            Download / Print PDF
          </button>
        </div>

        {/* ══════════════ THE CERTIFICATE ══════════════ */}
        <div id="cert-print-area" ref={certRef}
          className="w-full max-w-[900px] mx-auto bg-white shadow-2xl print:shadow-none"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          {/* Top accent bar */}
          <div className="h-3 w-full" style={{ background: 'linear-gradient(90deg, #1a3a5c 0%, #2563eb 50%, #1a3a5c 100%)' }} />

          <div className="p-12 md:p-16">
            {/* Header row */}
            <div className="flex items-start justify-between mb-10">
              <div>
                <p className="text-xs font-bold tracking-[0.3em] text-blue-700 uppercase mb-1">PrepLens</p>
                <p className="text-xs text-gray-400 tracking-widest uppercase">Virtual Internship Program</p>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5">
                <Award className="w-4 h-4 text-blue-700" />
                <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Certified</span>
              </div>
            </div>

            {/* Main title */}
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-normal tracking-[0.15em] text-gray-800 uppercase mb-1">
                Certificate
              </h1>
              <div className="flex items-center gap-4 justify-center">
                <div className="flex-1 h-px bg-gray-200" />
                <p className="text-xs tracking-[0.4em] text-gray-400 uppercase font-bold px-3">of Completion</p>
                <div className="flex-1 h-px bg-gray-200" />
              </div>
            </div>

            {/* Body text */}
            <div className="text-center mb-8 space-y-3">
              <p className="text-sm text-gray-500 tracking-wider">
                This is to certify that
              </p>

              {/* Recipient Name */}
              <div className="py-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 capitalize tracking-wide"
                  style={{ fontFamily: "'Georgia', serif" }}>
                  {userName}
                </h2>
                <div className="mt-2 mx-auto w-48 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
              </div>

              <p className="text-sm text-gray-500 tracking-wider">
                has successfully completed the
              </p>

              {/* Program name */}
              <div className="my-6 py-4 px-8 border-l-4 border-blue-600 bg-blue-50/60 text-left max-w-xl mx-auto rounded-r-lg">
                <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-1">Virtual Internship Program</p>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
                  {cert.course.title}
                </h3>
              </div>

              <p className="text-sm text-gray-500 leading-relaxed max-w-lg mx-auto">
                demonstrating proficiency through project submission, peer review, and
                successful completion of all required deliverables.
              </p>
            </div>

            {/* Footer: Date + Signature */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex items-end justify-between px-4">
              {/* Date */}
              <div className="text-center">
                <p className="text-base font-bold text-gray-800 mb-1">{issuedDate}</p>
                <div className="w-full h-px bg-gray-300 mb-1" />
                <p className="text-xs tracking-[0.2em] text-gray-400 uppercase">Date of Issue</p>
              </div>

              {/* Seal / Badge */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border-4 border-blue-700 flex items-center justify-center bg-blue-50"
                  style={{ boxShadow: '0 0 0 4px rgba(37,99,235,0.15)' }}>
                  <div className="text-center">
                    <p className="text-[8px] font-black tracking-widest text-blue-700 uppercase leading-tight">PrepLens</p>
                    <p className="text-[6px] tracking-widest text-blue-500 uppercase leading-tight">Academy</p>
                    <p className="text-[7px] font-bold text-blue-700 leading-tight">✦ AI ✦</p>
                  </div>
                </div>
              </div>

              {/* Signature */}
              <div className="text-center">
                {SIGNATURE_URL ? (
                  <img
                    src={SIGNATURE_URL}
                    alt="Authorized Signature"
                    className="h-14 w-36 object-contain mb-1 mx-auto"
                  />
                ) : (
                  <div className="h-14 w-36 mb-1 flex items-end justify-center">
                    <p className="text-2xl text-gray-400 italic font-bold" style={{ fontFamily: 'cursive' }}>
                      ~ Sign ~
                    </p>
                  </div>
                )}
                <div className="w-full h-px bg-gray-300 mb-1" />
                <p className="text-xs tracking-[0.15em] text-gray-800 uppercase font-bold">Rupesh Vishwakarma</p>
                <p className="text-xs tracking-widest text-gray-400 uppercase">Lead Instructor & Founder</p>
              </div>
            </div>

            {/* Certificate ID watermark */}
            <div className="mt-6 text-center">
              <p className="text-[9px] font-mono text-gray-300 tracking-widest">
                CERTIFICATE ID: {cert.id} · VERIFY AT preplens.in
              </p>
            </div>
          </div>

          {/* Bottom accent bar */}
          <div className="h-2 w-full" style={{ background: 'linear-gradient(90deg, #1a3a5c 0%, #2563eb 50%, #1a3a5c 100%)' }} />
        </div>
      </div>
    </>
  );
}
