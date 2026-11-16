import { Award, PencilLine } from 'lucide-react';
import { LEARNING_MILESTONES } from '../data/portfolioData';
import { CertificateSlot } from '../types/portfolio';

interface AchievementsSectionProps {
  certificates: CertificateSlot[];
  onOpenEditor: () => void;
}

export function AchievementsSection({
  certificates,
  onOpenEditor,
}: AchievementsSectionProps) {
  return (
    <section
      id="achievements"
      className="border-t border-slate-800/70 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-blue-400">
              04. Achievements & Milestones
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              Honest learning milestones & future certifications
            </h2>
            <p className="mt-3 max-w-2xl text-base text-slate-300">
              Documenting genuine first-year progress without inflated claims—paired
              with dedicated placeholders reserved for upcoming verified certificates.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenEditor}
            className="inline-flex items-center gap-2 self-start sm:self-auto rounded-lg border border-slate-700/80 bg-slate-900/70 px-4 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-blue-500/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 whitespace-nowrap shrink-0 min-h-[40px]"
          >
            <PencilLine className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
            <span>Update Certificate Slots</span>
          </button>
        </div>

        {/* Honest Learning Milestones */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {LEARNING_MILESTONES.map((milestone) => (
            <article
              key={milestone.id}
              className="rounded-2xl glass-card glass-card-hover p-6"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-mono text-sm font-medium text-blue-400 tabular-nums">
                  {milestone.index}
                </span>
                <span className="text-xs text-slate-400">{milestone.timeframe}</span>
              </div>
              <h3 className="mt-2 font-display text-lg font-semibold text-white">
                {milestone.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {milestone.description}
              </p>
            </article>
          ))}
        </div>

        {/* Future Certificates Placeholder Grid */}
        <div className="mt-12 rounded-2xl glass-card p-6 sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-slate-800/70 pb-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400 shrink-0">
                <Award className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  Future Certificates (Placeholder)
                </h3>
                <p className="text-xs text-slate-400">
                  Reserved slots to be filled as verified coursework and AI
                  certifications are completed.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {certificates.map((cert) => {
              const isPlaceholder =
                cert.title.toLowerCase().includes('placeholder') ||
                cert.year.toLowerCase() === 'planned';
              return (
                <div
                  key={cert.id}
                  className="rounded-xl border border-dashed border-slate-700/80 bg-[#070B19]/70 p-5 flex flex-col justify-between"
                >
                  <div>
                    <p
                      className={`text-xs font-mono ${
                        isPlaceholder ? 'text-slate-400' : 'text-blue-300'
                      }`}
                    >
                      {cert.year}
                    </p>
                    <h4 className="mt-2 font-display text-base font-semibold text-slate-100">
                      {cert.title}
                    </h4>
                  </div>
                  <p className="mt-3 text-xs text-slate-400">{cert.issuer}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
