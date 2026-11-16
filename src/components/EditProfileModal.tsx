import { FormEvent, useEffect, useState } from 'react';
import { RotateCcw, Save, X } from 'lucide-react';
import { DEFAULT_PROFILE } from '../data/portfolioData';
import { EditableProfile } from '../types/portfolio';

interface EditProfileModalProps {
  isOpen: boolean;
  profile: EditableProfile;
  onSave: (updated: EditableProfile) => void;
  onReset: () => void;
  onClose: () => void;
}

export function EditProfileModal({
  isOpen,
  profile,
  onSave,
  onReset,
  onClose,
}: EditProfileModalProps) {
  const [draft, setDraft] = useState<EditableProfile>(profile);

  useEffect(() => {
    setDraft(profile);
  }, [profile, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSave({
      ...draft,
      githubUrl: draft.githubUrl.trim() || DEFAULT_PROFILE.githubUrl,
    });
    onClose();
  };

  const handleCertChange = (
    index: number,
    field: 'title' | 'issuer' | 'year',
    value: string
  ) => {
    setDraft((prev) => {
      const nextCerts = [...prev.certificates];
      nextCerts[index] = { ...nextCerts[index], [field]: value };
      return { ...prev, certificates: nextCerts };
    });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="edit-profile-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700/70 bg-[#0B1124] p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-mono text-blue-400">Local Browser Storage</p>
            <h3
              id="edit-profile-title"
              className="mt-1 font-display text-2xl font-bold text-white"
            >
              Edit Portfolio Placeholders
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              Fill in your personal academic and contact details. Leave fields blank to
              display clean editable placeholders.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close placeholder editor"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-900/70 text-slate-300 transition-colors hover:border-slate-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 shrink-0"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs font-medium text-slate-300">
                College / University Name
              </span>
              <input
                type="text"
                value={draft.collegeName}
                onChange={(e) =>
                  setDraft((prev) => ({ ...prev, collegeName: e.target.value }))
                }
                placeholder="e.g., Your Institute of Technology"
                className="mt-1.5 w-full rounded-lg border border-slate-700/80 bg-[#070B19]/90 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </label>

            <label className="block">
              <span className="text-xs font-medium text-slate-300">
                Registration Number
              </span>
              <input
                type="text"
                value={draft.registrationNumber}
                onChange={(e) =>
                  setDraft((prev) => ({
                    ...prev,
                    registrationNumber: e.target.value,
                  }))
                }
                placeholder="e.g., 2026CS000"
                className="mt-1.5 w-full rounded-lg border border-slate-700/80 bg-[#070B19]/90 px-3.5 py-2.5 text-sm font-mono text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </label>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs font-medium text-slate-300">Email Address</span>
              <input
                type="email"
                value={draft.email}
                onChange={(e) =>
                  setDraft((prev) => ({ ...prev, email: e.target.value }))
                }
                placeholder="your.email@example.com"
                className="mt-1.5 w-full rounded-lg border border-slate-700/80 bg-[#070B19]/90 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </label>

            <label className="block">
              <span className="text-xs font-medium text-slate-300">
                LinkedIn Profile URL
              </span>
              <input
                type="url"
                value={draft.linkedinUrl}
                onChange={(e) =>
                  setDraft((prev) => ({ ...prev, linkedinUrl: e.target.value }))
                }
                placeholder="https://linkedin.com/in/your-profile"
                className="mt-1.5 w-full rounded-lg border border-slate-700/80 bg-[#070B19]/90 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </label>
          </div>

          <label className="block">
            <span className="text-xs font-medium text-slate-300">
              GitHub Profile URL
            </span>
            <input
              type="url"
              value={draft.githubUrl}
              onChange={(e) =>
                setDraft((prev) => ({ ...prev, githubUrl: e.target.value }))
              }
              placeholder="https://github.com/kommurujaswanthreddy"
              className="mt-1.5 w-full rounded-lg border border-slate-700/80 bg-[#070B19]/90 px-3.5 py-2.5 text-sm font-mono text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </label>

          {/* Future Certificates Placeholders */}
          <div className="border-t border-slate-800/80 pt-5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Future Certificate Slots
            </h4>
            <div className="mt-3 space-y-3">
              {draft.certificates.map((cert, index) => (
                <div
                  key={cert.id}
                  className="grid grid-cols-1 gap-2 rounded-xl border border-slate-800 bg-[#070B19]/70 p-3 sm:grid-cols-12"
                >
                  <input
                    type="text"
                    aria-label={`Certificate ${index + 1} title`}
                    value={cert.title}
                    onChange={(e) =>
                      handleCertChange(index, 'title', e.target.value)
                    }
                    placeholder="Certificate Title"
                    className="sm:col-span-5 rounded-md border border-slate-700/70 bg-slate-900/80 px-2.5 py-1.5 text-xs text-white focus:border-blue-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    aria-label={`Certificate ${index + 1} issuer`}
                    value={cert.issuer}
                    onChange={(e) =>
                      handleCertChange(index, 'issuer', e.target.value)
                    }
                    placeholder="Issuer / Platform"
                    className="sm:col-span-5 rounded-md border border-slate-700/70 bg-slate-900/80 px-2.5 py-1.5 text-xs text-white focus:border-blue-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    aria-label={`Certificate ${index + 1} year`}
                    value={cert.year}
                    onChange={(e) =>
                      handleCertChange(index, 'year', e.target.value)
                    }
                    placeholder="Year"
                    className="sm:col-span-2 rounded-md border border-slate-700/70 bg-slate-900/80 px-2.5 py-1.5 text-xs font-mono text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800/80 pt-5">
            <button
              type="button"
              onClick={() => {
                onReset();
                setDraft(DEFAULT_PROFILE);
              }}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700/80 bg-slate-900/70 px-4 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 whitespace-nowrap min-h-[40px]"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Reset Placeholders</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg px-4 py-2 text-xs font-medium text-slate-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 min-h-[40px]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg accent-gradient-btn px-5 py-2 text-xs font-semibold text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 whitespace-nowrap min-h-[40px]"
              >
                <Save className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
