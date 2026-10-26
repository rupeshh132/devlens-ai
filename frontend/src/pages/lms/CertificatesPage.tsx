import { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import { Award, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CertificatesPage() {
  const [certificates, setCertificates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/certificates').then(res => {
      setCertificates(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="p-8 text-center">Loading certificates...</div>;

  return (
    <div className="p-8 max-w-6xl mx-auto pb-32">
      <div className="flex items-center gap-3 mb-8">
        <Award className="h-8 w-8 text-yellow-500" />
        <h1 className="text-3xl font-bold text-foreground">My Certificates</h1>
      </div>

      {certificates.length === 0 ? (
        <div className="text-center py-20 border border-dashed rounded-xl border-border">
          <Award className="h-16 w-16 mx-auto text-muted-foreground/30 mb-4" />
          <p className="text-muted-foreground text-lg">You haven't earned any certificates yet.</p>
          <p className="text-sm text-muted-foreground mt-2">Complete a course to earn your first certificate!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map(cert => (
            <div key={cert.id} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-all">
              <div className="h-40 bg-gradient-to-br from-brand-navy to-black p-6 relative flex flex-col items-center justify-center text-center">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <Award className="h-12 w-12 text-yellow-500 mb-2 z-10" />
                <h3 className="font-bold text-white z-10 line-clamp-2">{cert.course.title}</h3>
              </div>
              <div className="p-5 flex-1 flex flex-col bg-card">
                <p className="text-sm text-muted-foreground mb-4">
                  Issued on: {new Date(cert.issuedAt).toLocaleDateString()}
                </p>
                <div className="mt-auto flex items-center gap-3">
                  <Link 
                    to={`/certificate/${cert.id}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-primary/10 text-primary py-2 rounded-lg font-medium hover:bg-primary/20 transition-colors text-sm"
                  >
                    <ExternalLink className="h-4 w-4" /> View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
