import { education, courses } from '../data';
import { useInView } from '../hooks/useInView';
import { GraduationCap, BookOpen, Award, CheckCircle } from 'lucide-react';
 
export default function EducationTimeline() {
  const [ref, inView] = useInView();
 
  return (
    <section id="education" className="section py-20" ref={ref}>
      {/* Header */}
      <div className="max-w-2xl mb-16">
        <p className={`section-label fade-up ${inView ? 'in-view' : ''}`}>
          Academic background
        </p>
        <h2 className={`section-title fade-up delay-1 ${inView ? 'in-view' : ''}`}>
          Education & Certifications
        </h2>
      </div>
 
      {/* Education Timeline */}
      <div className={`space-y-8 mb-16 fade-up delay-2 ${inView ? 'in-view' : ''}`}>
        {/* Timeline line */}
        <div className="relative">
          {/* Vertical line */}
          <div className="sm:absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500" />
 
          {/* Timeline items */}
          <div className="space-y-8">
            {education.map((item, i) => (
              <div key={item.degree} className="relative sm:pl-20">
                {/* Timeline dot */}
                <div className="sm:absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg mb-2">
                  <GraduationCap size={24} />
                </div>
 
                {/* Card */}
                <div className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {item.degree}
                    </h3>
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 px-3 py-1 rounded-full">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-3">
                    {item.school}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
 
      {/* Courses Section */}
      <div className={`fade-up delay-3 ${inView ? 'in-view' : ''}`}>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Professional Certifications
        </h3>
 
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {courses.map((course, i) => (
            <div
              key={course.title}
              className="group relative p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white mb-4 group-hover:scale-110 transition-transform">
                <CheckCircle size={20} />
              </div>
 
              {/* Title */}
              <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                {course.title}
              </h4>
 
              {/* Meta */}
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {course.instructor}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                {course.platform}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 