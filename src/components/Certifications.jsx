import { certifications } from '../data';
import { useInView } from '../hooks/useInView';
import { Award, ExternalLink, Calendar } from 'lucide-react';
 
export default function Certifications() {
  const [ref, inView] = useInView();
 
  return (
    <section id="certifications" className="section py-20" ref={ref}>
      {/* Header */}
      <div className="mb-16">
        <p className={`section-label fade-up ${inView ? 'in-view' : ''}`}>
          Continuous Learning
        </p>
        <h2 className={`section-title fade-up delay-1 ${inView ? 'in-view' : ''}`}>
          Certifications & Achievements
        </h2>
        <p className={`section-sub fade-up delay-2 ${inView ? 'in-view' : ''}`}>
          Professional courses completed and verified credentials
        </p>
      </div>
 
      {/* Certifications Grid */}
      <div className={`grid md:grid-cols-2 gap-6 fade-up delay-3 ${inView ? 'in-view' : ''}`}>
        {certifications.map((cert, i) => (
          <div
            key={cert.title}
            className="group relative p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
          >
            {/* Left accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-l-xl" />
 
            {/* Icon & Badge */}
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <Award size={24} />
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <Calendar size={14} />
                {cert.year}
              </div>
            </div>
 
            {/* Content */}
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">
              {cert.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              {cert.instructor} • {cert.platform}
            </p>
 
            {/* Certificate Link */}
            {cert.certificateUrl && (
              <a
                href={cert.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group-hover:gap-3"
              >
                View Certificate
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}