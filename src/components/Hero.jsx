
import { personal } from '../data';
import { useTyping } from '../hooks/useTyping';
import { useInView } from '../hooks/useInView';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";
import Socials from './Socials';

const roles = [
  'Full-Stack Developer',
  'React Developer',
  'Node.js Developer',
  'Next.js Developer'
];

export default function Hero() {
  const typedText = useTyping(roles);
  const [ref, inView] = useInView();

  return (
    <section
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl opacity-50 animate-blob" />
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl opacity-50 animate-blob" />
        <div className="absolute -bottom-8 left-1/2 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl opacity-50 animate-blob" />
      </div>

      <div className="max-w-4xl mx-auto px-6 w-full relative z-10">

        {/* Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 ${inView ? 'in-view' : ''}`}>
          <span className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-blue-600">
            Open to opportunities
          </span>
        </div>

        {/* Heading */}
        <div className={inView ? 'in-view' : ''}>
          <h1 className="text-5xl md:text-7xl font-black mb-3">
            Hi, I'm{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
              {personal.name.split(' ')[0]}
            </span>
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-600 mt-4">
            {typedText}
            <span className="animate-pulse ml-1">|</span>
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mt-8 mb-10">
          I build modern, high-performance web applications using React, Next.js,
          Node.js, and MongoDB.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="#projects"
            className=" px-8 py-4 font-semibold text-white rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center gap-2"
          >
            View My Work
            <HiArrowRight className='bouncing' size={20} />
          </a>

          <a
            href="#contact"
            className="px-8 py-4 font-semibold border rounded-lg text-slate-900 dark:text-white border-slate-300 dark:border-slate-600 flex items-center gap-2"
          >
            Get In Touch
          </a>

          <a
            href={personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 font-semibold border rounded-lg flex items-center gap-2"
          >
            <FaGithub size={20} />
            GitHub
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Projects', value: '6+',    icon: '🚀' },
            { label: 'Courses', value: '5+',     icon: '📚' },
            { label: 'Graduated', value: '2023', icon: '🎓' },
            { label: 'Country', value: 'Egypt',  icon: '🌍' }
          ].map((stat) => (
            <div key={stat.label} className="link-underline p-5 rounded-xl border bg-white/40 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 text-center">
              {/* <div className="text-2xl">{stat.icon}</div> */}
              {/* <div className="text-3xl font-bold">{stat.value}</div> */}
              <div className="text-l text-slate-600">{stat.icon} {stat.label} {stat.value}</div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-16">
           <Socials />
        </div>

      </div>
    </section>
  );
}