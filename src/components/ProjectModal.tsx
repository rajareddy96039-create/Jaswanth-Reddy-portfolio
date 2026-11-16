import { useEffect, useState } from 'react';
import { X, Calculator, CheckCircle2, Clock } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

function getLetterGrade(pct: number): { grade: string; remark: string } {
  if (pct >= 90) return { grade: 'A+', remark: 'Outstanding' };
  if (pct >= 80) return { grade: 'A', remark: 'Very Good' };
  if (pct >= 70) return { grade: 'B', remark: 'Good' };
  if (pct >= 60) return { grade: 'C', remark: 'Satisfactory' };
  if (pct >= 50) return { grade: 'D', remark: 'Pass' };
  return { grade: 'F', remark: 'Needs Improvement' };
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Interactive Grade Calculator Sandbox state
  const [scores, setScores] = useState<[string, string, string]>([
    '86',
    '91',
    '78',
  ]);

  // Interactive Basic Calculator Sandbox state
  const [numA, setNumA] = useState('24');
  const [numB, setNumB] = useState('6');
  const [operator, setOperator] = useState<'+' | '-' | '*' | '/'>('+');

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const isInProgress = project.status === 'In Progress';

  // Compute Grade Calculator Preview
  const parsedScores = scores.map((s) => {
    const val = Number(s);
    if (s.trim() === '' || Number.isNaN(val)) return null;
    return val;
  });
  const hasInvalidScore = parsedScores.some(
    (v) => v === null || v < 0 || v > 100
  );
  const totalMarks = hasInvalidScore
    ? 0
    : (parsedScores as number[]).reduce((acc, v) => acc + v, 0);
  const averagePct = hasInvalidScore ? 0 : totalMarks / 3;
  const gradeResult = getLetterGrade(averagePct);

  // Compute Basic Calculator Preview
  const aVal = Number(numA);
  const bVal = Number(numB);
  const validNums =
    numA.trim() !== '' &&
    numB.trim() !== '' &&
    !Number.isNaN(aVal) &&
    !Number.isNaN(bVal);

  let calcOutput = '';
  if (!validNums) {
    calcOutput = 'Enter valid numeric values';
  } else if (operator === '/' && bVal === 0) {
    calcOutput = 'Error: Division by zero is not allowed';
  } else {
    const raw =
      operator === '+'
        ? aVal + bVal
        : operator === '-'
          ? aVal - bVal
          : operator === '*'
            ? aVal * bVal
            : aVal / bVal;
    calcOutput = Number.isInteger(raw) ? String(raw) : raw.toFixed(4).replace(/\.?0+$/, '');
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700/70 bg-[#0B1124] p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono">
              {isInProgress ? (
                <Clock className="h-3.5 w-3.5 text-amber-300" aria-hidden="true" />
              ) : (
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
              )}
              <span className={isInProgress ? 'text-amber-300' : 'text-blue-300'}>
                {project.status}
              </span>
              <span className="text-slate-600" aria-hidden="true">
                ·
              </span>
              <span className="text-slate-400">{project.subtitle}</span>
            </div>

            <h3
              id="project-modal-title"
              className="mt-2 font-display text-2xl font-bold text-white"
            >
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-900/70 text-slate-300 transition-colors hover:border-slate-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 shrink-0"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          {project.description}
        </p>

        {/* Key Learning Focus */}
        <div className="mt-6 border-t border-slate-800/80 pt-5">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Engineering & Learning Notes
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            {project.learningFocus.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1 w-1 rounded-full bg-blue-400 shrink-0"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Interactive Logic Simulation */}
        <div className="mt-6 rounded-xl border border-slate-800 bg-[#070B19] p-5">
          <div className="flex items-center gap-2 text-xs font-medium text-blue-300">
            <Calculator className="h-4 w-4" aria-hidden="true" />
            <span>
              {project.interactiveType === 'grade-calculator'
                ? 'Interactive Logic Simulation (Python Grade Rules)'
                : 'Interactive Logic Preview (In-Progress CLI Operations)'}
            </span>
          </div>

          {project.interactiveType === 'grade-calculator' ? (
            <div className="mt-4 space-y-4">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {['Subject 1', 'Subject 2', 'Subject 3'].map((label, idx) => (
                  <label key={label} className="block">
                    <span className="text-xs text-slate-400">{label} (0–100)</span>
                    <input
                      type="number"
                      min={0}
                      max={100}
                      value={scores[idx]}
                      onChange={(e) => {
                        const next: [string, string, string] = [...scores] as [
                          string,
                          string,
                          string,
                        ];
                        next[idx] = e.target.value;
                        setScores(next);
                      }}
                      className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900/90 px-3 py-2 text-sm font-mono text-white tabular-nums focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </label>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-800/80 pt-4">
                {hasInvalidScore ? (
                  <p className="text-xs font-mono text-amber-300">
                    Please enter valid marks between 0 and 100 for all three subjects.
                  </p>
                ) : (
                  <>
                    <div className="flex items-center gap-6 text-xs">
                      <div>
                        <span className="text-slate-400 block">Total</span>
                        <span className="font-mono text-base font-medium text-white tabular-nums">
                          {totalMarks} / 300
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Average</span>
                        <span className="font-mono text-base font-medium text-white tabular-nums">
                          {averagePct.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-400 block">
                        Computed Grade
                      </span>
                      <span className="font-display text-xl font-bold text-blue-400 tabular-nums">
                        {gradeResult.grade} · {gradeResult.remark}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          ) : (
            <div className="mt-4 space-y-4">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <label className="block">
                  <span className="text-xs text-slate-400">First Number</span>
                  <input
                    type="number"
                    value={numA}
                    onChange={(e) => setNumA(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900/90 px-3 py-2 text-sm font-mono text-white tabular-nums focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </label>

                <div>
                  <span className="text-xs text-slate-400 block">Operation</span>
                  <div className="mt-1 grid grid-cols-4 gap-1">
                    {(['+', '-', '*', '/'] as const).map((op) => (
                      <button
                        key={op}
                        type="button"
                        onClick={() => setOperator(op)}
                        className={`rounded-lg py-2 text-sm font-mono font-medium transition-colors min-h-[38px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                          operator === op
                            ? 'bg-blue-600 text-white'
                            : 'border border-slate-700 bg-slate-900/80 text-slate-300 hover:text-white'
                        }`}
                      >
                        {op}
                      </button>
                    ))}
                  </div>
                </div>

                <label className="block">
                  <span className="text-xs text-slate-400">Second Number</span>
                  <input
                    type="number"
                    value={numB}
                    onChange={(e) => setNumB(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900/90 px-3 py-2 text-sm font-mono text-white tabular-nums focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </label>
              </div>

              <div className="flex items-center justify-between border-t border-slate-800/80 pt-4">
                <span className="text-xs text-slate-400">
                  Simulated Python output
                </span>
                <span
                  className={`font-mono text-base font-medium tabular-nums ${
                    calcOutput.startsWith('Error')
                      ? 'text-amber-300'
                      : 'text-blue-300'
                  }`}
                >
                  {calcOutput}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
