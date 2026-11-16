import { GraduationCap, PencilLine, Target, Cpu } from 'lucide-react';
import { EditableProfile } from '../types/portfolio';

interface AboutSectionProps {
  profile: EditableProfile;
  onOpenEditor: () => void;
}

export function AboutSection({ profile, onOpenEditor }: AboutSectionProps) {
  const collegeDisplay =
    profile.collegeName.trim() || '[College / University Name — Editable Placeholder]';
  const regDisplay =
    profile.registrationNumber.trim() || '[Registration Number — Editable Placeholder]';

  return (
    <section
      id="about"
      className="border-t border-slate-800/70 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-blue-400">01. About Me</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              First-year foundations built with clarity and intent
            </h2>
          </div>

          <button
            type="button"
            onClick={onOpenEditor}
            className="inline-flex items-center gap-2 self-start sm:self-auto rounded-lg border border-slate-700/80 bg-slate-900/70 px-4 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-blue-500/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 whitespace-nowrap shrink-0 min-h-[40px]"
          >
            <PencilLine className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
            <span>Edit Placeholders</span>
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Narrative Overview */}
          <div className="lg:col-span-7 rounded-2xl glass-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl font-semibold text-white">
                Journey & Technical Focus
              </h3>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-300">
                <p>
                  I am <span className="text-white font-medium">Jaswanth Reddy K</span>, a
                  first-year B.Tech Computer Science student committed to becoming an AI
                  Engineer. Right now, my priority is mastering core logic rather than
                  rushing past the fundamentals.
                </p>
                <p>
                  I am actively practicing <span className="text-white">Python</span> for
                  problem solving, strengthening my understanding of{' '}
                  <span className="text-white">HTML and CSS</span> for clean web
                  interfaces, and exploring{' '}
                  <span className="text-white">Artificial Intelligence, Machine Learning,</span>{' '}
                  and <span className="text-white">Generative AI</span> concepts step by
                  step.
                </p>
                <p>
                  My career goal is to bridge strong software engineering discipline with
                  applied machine learning—building reliable, understandable AI tools that
                  solve practical problems.
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-800/80 pt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400">
              <span>Python</span>
              <span aria-hidden="true">·</span>
              <span>Artificial Intelligence</span>
              <span aria-hidden="true">·</span>
              <span>Machine Learning</span>
              <span aria-hidden="true">·</span>
              <span>Web Development</span>
            </div>
          </div>

          {/* Education & Career Direction Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-2xl glass-card p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    Academic Profile
                  </h3>
                  <p className="text-xs text-slate-400">
                    Undergraduate Computer Science
                  </p>
                </div>
              </div>

              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex flex-col gap-0.5 border-b border-slate-800/70 pb-3">
                  <dt className="text-xs text-slate-400">Degree & Branch</dt>
                  <dd className="font-medium text-slate-100">
                    B.Tech in Computer Science (First Year)
                  </dd>
                </div>
                <div className="flex flex-col gap-0.5 border-b border-slate-800/70 pb-3">
                  <dt className="text-xs text-slate-400">College / Institution</dt>
                  <dd
                    className={`font-medium ${
                      profile.collegeName.trim()
                        ? 'text-slate-100'
                        : 'text-amber-300/90 font-mono text-xs'
                    }`}
                  >
                    {collegeDisplay}
                  </dd>
                </div>
                <div className="flex flex-col gap-0.5">
                  <dt className="text-xs text-slate-400">Registration Number</dt>
                  <dd
                    className={`font-mono ${
                      profile.registrationNumber.trim()
                        ? 'text-sm text-slate-100 tabular-nums'
                        : 'text-xs text-amber-300/90'
                    }`}
                  >
                    {regDisplay}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl glass-card p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400 shrink-0">
                  <Target className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    Career Direction
                  </h3>
                  <p className="text-xs text-slate-400">
                    Long-term engineering roadmap
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                Progressing from Python fundamentals and data structures toward machine
                learning mathematics, model evaluation, and applied Generative AI systems.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                <Cpu className="h-3.5 w-3.5 text-blue-400 shrink-0" aria-hidden="true" />
                <span>Focused on steady, verifiable project growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
