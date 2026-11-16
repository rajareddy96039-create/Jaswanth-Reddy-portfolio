import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Code2 } from 'lucide-react';
import { HERO_IMAGE_PATH } from '../data/portfolioData';

interface HeroSectionProps {
  githubUrl: string;
}

export function HeroSection({ githubUrl }: HeroSectionProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Two-column Hero Split */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-sm font-medium text-blue-400 tracking-wide">
              First-Year B.Tech Computer Science Student · Aspiring AI Engineer
            </p>

            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.08] [text-wrap:balance]">
              JASWANTH REDDY K
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Building a disciplined foundation in{' '}
              <span className="text-white font-medium">Python</span>,{' '}
              <span className="text-white font-medium">web development</span>, and{' '}
              <span className="accent-gradient-text font-semibold">
                Generative AI
              </span>
              —turning first-year computer science fundamentals into structured,
              working software projects.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg accent-gradient-btn px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/40 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 whitespace-nowrap shrink-0 min-h-[44px]"
              >
                <span>Explore Projects</span>
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700/80 bg-slate-900/60 px-5 py-3 text-sm font-medium text-slate-200 transition-colors duration-150 hover:border-blue-500/50 hover:bg-slate-800/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 whitespace-nowrap shrink-0 min-h-[44px]"
              >
                <span>GitHub Profile</span>
                <ArrowUpRight className="h-4 w-4 text-slate-400" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Matching-Height Visual Container */}
          <div className="lg:col-span-5">
            <div className="relative h-full min-h-[280px] sm:min-h-[340px] overflow-hidden rounded-2xl glass-card">
              {!imageError ? (
                <img
                  src={HERO_IMAGE_PATH}
                  alt="Abstract dark navy glass planes and luminous electric blue neural geometry"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#0B1228] via-[#10193A] to-[#1A133B] p-8 text-center">
                  <Code2 className="h-10 w-10 text-blue-400 mb-3" aria-hidden="true" />
                  <p className="font-display text-sm font-semibold text-slate-200">
                    Python · Web Foundations · AI
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    B.Tech Computer Science Portfolio
                  </p>
                </div>
              )}

              {/* Measured Scrim & Clean Caption */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060A17]/90 via-[#060A17]/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-xs font-mono text-blue-300">
                  Academic Status · Year 01
                </p>
                <p className="mt-1 text-sm font-medium text-slate-100">
                  Focused on Python logic, web structure, and foundational AI systems
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Summary Strip Below Hero Split */}
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="rounded-xl glass-card px-5 py-4">
            <p className="text-xs text-slate-400">Degree Program</p>
            <p className="mt-1 font-display text-base font-semibold text-white">
              B.Tech Computer Science
            </p>
          </div>
          <div className="rounded-xl glass-card px-5 py-4">
            <p className="text-xs text-slate-400">Academic Standing</p>
            <p className="mt-1 font-display text-base font-semibold text-white tabular-nums">
              1st Year Undergraduate
            </p>
          </div>
          <div className="rounded-xl glass-card px-5 py-4">
            <p className="text-xs text-slate-400">Target Discipline</p>
            <p className="mt-1 font-display text-base font-semibold text-white">
              AI & Machine Learning
            </p>
          </div>
          <div className="rounded-xl glass-card px-5 py-4">
            <p className="text-xs text-slate-400">Active Builds</p>
            <p className="mt-1 font-display text-base font-semibold text-white tabular-nums">
              02 Python Projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
