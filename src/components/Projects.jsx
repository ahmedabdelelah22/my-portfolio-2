import { projects } from '../data';
import { useInView } from '../hooks/useInView';

const badgeColors = {
  'Deployed': 'bg-green-50 text-green-600 border-green-100 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20',
  'Full-stack': 'bg-purple-50 text-purple-600 border-purple-100 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20',
  'Next.js': 'bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20',
  'Frontend': 'bg-amber-50 text-amber-600 border-amber-100 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20',
};

export default function Projects() {
  const [ref, inView] = useInView();
  return (
    <section id="projects" className="section" ref={ref}>
      <p className="section-label">What I've built</p>
      <h2 className={`section-title fade-up ${inView ? 'in-view' : ''}`}>Projects</h2>
      <p className={`section-sub fade-up delay-1 ${inView ? 'in-view' : ''}`}>Real-world applications built from scratch</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <div key={project.name}
            className={`stats-box card card-hover flex flex-col gap-3 fade-up delay-${(i % 3) + 1} ${inView ? 'in-view' : ''}`}>
            <div className="flex justify-between items-start">
              <span className="text-2xl">{project.emoji}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${badgeColors[project.badge] || badgeColors['Frontend']}`}>
                {project.badge}
              </span>
            </div>
            <h3 className="font-semibold text-slate-800 dark:text-white">{project.name}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <div className="flex gap-4 pt-1">
              {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-medium">Live ↗</a>}
              {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:underline">GitHub ↗</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
