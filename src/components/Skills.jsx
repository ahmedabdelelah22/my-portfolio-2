import { useState } from 'react';
import { skills } from '../data';
import { useInView } from '../hooks/useInView';
 
export default function SkillsTabs() {
  const [ref, inView] = useInView();
  const [activeTab, setActiveTab] = useState(0);
 
  return (
    <section id="skills" className="section py-20" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className={`section-label fade-up ${inView ? 'in-view' : ''}`}>What I know</p>
          <h2 className={`section-title fade-up delay-1 ${inView ? 'in-view' : ''}`}>
            Technical Skills
          </h2>
        </div>
 
        {/* Tabs */}
        <div className={`fade-up delay-2 ${inView ? 'in-view' : ''}`}>
          {/* Tab Buttons */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 dark:border-slate-700">
            {skills.map((group, i) => (
              <button
                key={group.category}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-3 font-semibold text-sm transition-all relative ${
                  activeTab === i
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {group.category}
                {activeTab === i && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
                )}
              </button>
            ))}
          </div>
 
          {/* Tab Content */}
          <div className="min-h-64">
            {skills[activeTab] && (
              <div className="animate-fade-in">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {skills[activeTab].items.map(item => (
                    <div
                      key={item}
                      className="group card card-hover p-4 flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}