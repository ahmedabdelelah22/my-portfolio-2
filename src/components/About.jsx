import { personal } from '../data';
import { useInView } from '../hooks/useInView';
import CVDownload from './CVDownload';
import Socials from './Socials';

export default function About() {
  const [ref, inView] = useInView();
  return (
    <section id="about" className="section" ref={ref}>
      <p className="section-label">About me</p>
      <h2 className={`section-title fade-up ${inView ? 'in-view' : ''}`}>Who I am</h2>
      <div className="grid md:grid-cols-2 gap-12 mt-8">
        <div className="flex flex-col gap-10" >
        <p className={`text-slate-500 dark:text-slate-400 leading-relaxed text-sm fade-up delay-1 ${inView ? 'in-view' : ''}`}>{personal.bio}</p>
        < CVDownload />
        </div>
        <div className={`divide-y divide-slate-100 dark:divide-slate-800 fade-up delay-2 ${inView ? 'in-view' : ''}`}>
          {[
            { label: 'Name', value: personal.name },
            { label: 'Email', value: personal.email },
            { label: 'Phone', value: personal.phone },
            { label: 'GitHub', value: personal.github },
            { label: 'Location', value: personal.location },
            { label: 'Status', value: 'Available for hire', green: true },
          ].map(item => (
            <div key={item.label} className="flex justify-between py-3 text-sm">
              <span className="text-slate-400 dark:text-slate-500">{item.label}</span>
              <span className={`font-medium ${item.green ? 'text-green-500 dark:text-green-400' : 'text-slate-700 dark:text-slate-200'}`}>{item.value}</span>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
