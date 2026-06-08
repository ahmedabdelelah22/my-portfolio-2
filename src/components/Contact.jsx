import { personal } from '../data';
import { useInView } from '../hooks/useInView';
import Socials from './Socials';

export default function Contact() {
  const [ref, inView] = useInView();
  return (
    <section id="contact" className="section" ref={ref}>
      <p className="section-label">Get in touch</p>
      <h2 className={`section-title fade-up ${inView ? 'in-view' : ''}`}>Contact</h2>
      <p className={`section-sub fade-up delay-1 ${inView ? 'in-view' : ''}`}>Available for freelance work and full-time positions</p>
      <div className="grid md:grid-cols-2 gap-12">
        <div className={`flex flex-col gap-5 fade-up delay-2 ${inView ? 'in-view' : ''}`}>
          {[
            { icon: '📞', label: 'Phone', value: personal.phone },
            { icon: '✉️', label: 'Email', value: personal.email },
            { icon: '💻', label: 'GitHub', value: personal.github },
            { icon: '📍', label: 'Location', value: personal.location },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-base flex-shrink-0 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                {item.icon}
              </div>
              <div>
                <p className="text-xs text-slate-400 dark:text-slate-500 mb-0.5">{item.label}</p>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{item.value}</p>
              </div>
            </div>
          ))}
          <div className='my-3'>
           <Socials />
           </div>
        </div>
        <form className={`flex flex-col gap-3 fade-up delay-3 ${inView ? 'in-view' : ''}`} onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder="Your name" className="input" />
          <input type="email" placeholder="Your email" className="input" />
          <textarea placeholder="Your message..." rows={4} className="input resize-none" />
          <button type="submit" className="btn-primary w-full py-3 text-center">Send Message ↗</button>
        </form>
      </div>
    </section>
  );
}
