import { experience } from '../data';
import { useInView } from '../hooks/useInView';

export default function Experience() {
  const [ref, inView] = useInView();
  return (
    <section id="experience" className="section" ref={ref}>
      <p className="section-label">Work history</p>
      <h2 className={`section-title fade-up ${inView ? 'in-view' : ''}`}>Experience</h2>
      <div className="divide-y divide-slate-100 dark:divide-slate-800 mt-8">
        {experience.map((item, i) => (
          <div key={item.role} className={`grid md:grid-cols-[180px_1fr] gap-6 py-8 fade-up delay-${i + 1} ${inView ? 'in-view' : ''}`}>
            <span className="text-sm text-slate-400 dark:text-slate-500">{item.period}</span>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-white mb-1">{item.role}</h3>
              <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">{item.company}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
