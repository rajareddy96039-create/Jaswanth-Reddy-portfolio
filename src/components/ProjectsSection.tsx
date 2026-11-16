import { useState } from 'react';
import { ArrowUpRight, FolderGit2, Layers } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';

interface ProjectsSectionProps {
  githubUrl: string;
  onSelectProject: (project: ProjectItem) => void;
}

export function ProjectsSection({
  githubUrl,
  onSelectProject,
}: ProjectsSectionProps) {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      id="projects"
      className="border-t border-slate-800/70 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-blue-400">03. Projects</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              Learning builds & active practice
            </h2>
            <p className="mt-3 max-w-2xl text-base text-slate-300">
              Early Python and Generative AI learning projects focused on clean logic,
              input validation, and step-by-step engineering habits.
            </p>
          </div>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start sm:self-auto rounded-lg border border-slate-700/80 bg-slate-900/70 px-4 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-blue-500/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 whitespace-nowrap shrink-0 min-h-[40px]"
          >
            <FolderGit2 className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
            <span>View GitHub Profile</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {PROJECTS_DATA.map((project) => {
            const isInProgress = project.status === 'In Progress';
            const imgBroken = failedImages[project.id];

            return (
              <article
                key={project.id}
                className="rounded-2xl glass-card glass-card-hover overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Project Visual Header */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-slate-800/70 bg-slate-950">
                    {!imgBroken ? (
                      <img
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        referrerPolicy="no-referrer"
                        onError={() => handleImageError(project.id)}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#0B1228] via-[#121D40] to-[#1A133A] p-6 text-center">
                        <Layers className="h-8 w-8 text-blue-400 mb-2" aria-hidden="true" />
                        <p className="font-display text-sm font-medium text-slate-200">
                          {project.title}
                        </p>
                      </div>
                    )}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090F22]/85 via-transparent to-transparent" />
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7">
                    {/* Clean unboxed metadata row */}
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs">
                      <span className="text-slate-400">{project.subtitle}</span>
                      <span className="text-slate-600" aria-hidden="true">
                        ·
                      </span>
                      <span
                        className={`font-mono font-medium ${
                          isInProgress ? 'text-amber-300' : 'text-blue-300'
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    <h3 className="mt-2 font-display text-2xl font-bold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {project.description}
                    </p>

                    <ul className="mt-5 space-y-2 border-t border-slate-800/70 pt-4 text-xs leading-relaxed text-slate-300">
                      {project.learningFocus.map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <span
                            aria-hidden="true"
                            className="mt-1.5 h-1 w-1 rounded-full bg-blue-400 shrink-0"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="border-t border-slate-800/70 bg-slate-950/30 px-6 py-4 sm:px-7 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-slate-400">
                    {project.stack.map((tech, idx) => (
                      <span key={tech} className="inline-flex items-center gap-2">
                        <span>{tech}</span>
                        {idx < project.stack.length - 1 && (
                          <span className="text-slate-700" aria-hidden="true">
                            ·
                          </span>
                        )}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 rounded-lg accent-gradient-btn px-4 py-2 text-xs font-semibold text-white transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 whitespace-nowrap shrink-0 min-h-[40px]"
                  >
                    <span>
                      {isInProgress ? 'Inspect Progress & Demo' : 'Inspect Logic & Demo'}
                    </span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
