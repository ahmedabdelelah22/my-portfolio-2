import { personal } from '../data';
import { Download, FileText } from 'lucide-react';
 
export default function CVDownload() {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Download CV */}
      <a
        href={personal.cvUrl}
        type="application/pdf"
        download="Ahmed_Abdelelah_CV.pdf"
        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300"
      >
        <FileText size={20} />
        Download CV
        <Download size={20} />
      </a>
 
      {/* View Portfolio */}
      <a
        href={personal.portfolioUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white font-semibold rounded-lg hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300"
      >
        View Live Portfolio
      </a>
    </div>
  );
}
 