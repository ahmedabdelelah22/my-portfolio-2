import { experience } from '../data';
import { useInView } from '../hooks/useInView';

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Work History</p>

        <h2
          className={`section-title fade-up ${
            inView ? 'in-view' : ''
          }`}
        >
          Experience
        </h2>

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-[175px] top-0 h-full w-[2px] bg-gradient-to-b from-blue-500 to-purple-500" />

          {experience.map((item, i) => (
            <div
              key={item.role}
              className={`relative grid md:grid-cols-[160px_1fr] gap-8 mb-10 fade-up delay-${
                i + 1
              } ${inView ? 'in-view' : ''}`}
            >
              {/* Date */}
              <div className="hidden md:block text-right pr-8">
                <span className="text-sm font-medium text-slate-400">
                  {item.period}
                </span>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-[9px] md:left-[168px] top-2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-slate-900/100 shadow-lg" />

              {/* Content Card */}
              <div className="link-underline ml-10 md:ml-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <span className="md:hidden text-xs text-slate-400 block mb-2">
                  {item.period}
                </span>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {item.role}
                </h3>

                <p className="text-blue-600 dark:text-blue-400 font-medium mt-1 mb-4">
                  {item.company}
                </p>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}