import { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillCategory } from '../types/portfolio';

const FILTER_TABS: { id: SkillCategory; label: string }[] = [
  { id: 'all', label: 'All Skills' },
  { id: 'programming-ai', label: 'Python & AI' },
  { id: 'web', label: 'Web Foundations' },
];

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('all');

  const visibleSkills =
    selectedCategory === 'all'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((skill) => skill.category === selectedCategory);

  return (
    <section
      id="skills"
      className="border-t border-slate-800/70 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-blue-400">02. Skills</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              Current technical toolkit
            </h2>
            <p className="mt-3 max-w-2xl text-base text-slate-300">
              An honest snapshot of the languages and concepts I am actively practicing
              in my first year of Computer Science.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter skills by category"
            className="inline-flex items-center gap-1 self-start sm:self-auto rounded-lg border border-slate-800 bg-slate-900/80 p-1"
          >
            {FILTER_TABS.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`rounded-md px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 min-h-[36px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                    isActive
                      ? 'bg-blue-600/90 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {visibleSkills.map((skill) => (
            <article
              key={skill.id}
              className="rounded-2xl glass-card glass-card-hover p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {skill.name}
                  </h3>
                  <span className="text-xs font-mono text-blue-300 whitespace-nowrap shrink-0">
                    {skill.categoryLabel} · {skill.level}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {skill.summary}
                </p>
              </div>

              <div className="mt-6 border-t border-slate-800/70 pt-4">
                <p className="text-xs text-slate-400 mb-2">Current study areas</p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-200">
                  {skill.topics.map((topic, index) => (
                    <span key={topic} className="inline-flex items-center gap-3">
                      <span>{topic}</span>
                      {index < skill.topics.length - 1 && (
                        <span className="text-slate-600" aria-hidden="true">
                          /
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
