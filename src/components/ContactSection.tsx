import { FormEvent, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  PencilLine,
  Send,
} from 'lucide-react';
import { EditableProfile } from '../types/portfolio';

interface ContactSectionProps {
  profile: EditableProfile;
  onOpenEditor: () => void;
}

export function ContactSection({ profile, onOpenEditor }: ContactSectionProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [senderName, setSenderName] = useState('');
  const [senderSubject, setSenderSubject] = useState('');
  const [messageBody, setMessageBody] = useState('');
  const [composerFeedback, setComposerFeedback] = useState<string | null>(null);

  const hasEmail = profile.email.trim().length > 0;
  const hasLinkedin = profile.linkedinUrl.trim().length > 0;

  const handleCopy = async (key: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch {
      setCopiedKey(null);
    }
  };

  const handleComposeSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formatted = `To: Jaswanth Reddy K\nFrom: ${senderName || 'Visitor'}\nSubject: ${
      senderSubject || 'Portfolio Inquiry'
    }\n\n${messageBody}`;

    if (hasEmail) {
      const mailtoUrl = `mailto:${encodeURIComponent(
        profile.email.trim()
      )}?subject=${encodeURIComponent(
        senderSubject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        `Hi Jaswanth,\n\n${messageBody}\n\nBest regards,\n${senderName || 'Visitor'}`
      )}`;
      window.location.href = mailtoUrl;
      setComposerFeedback(
        'Opening your default email client with the drafted message.'
      );
      return;
    }

    try {
      await navigator.clipboard.writeText(formatted);
      setComposerFeedback(
        'Email placeholder is not set yet—your drafted message was copied to the clipboard.'
      );
    } catch {
      setComposerFeedback(
        'Email placeholder is not set yet. Use "Edit Placeholders" to add your email address.'
      );
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-slate-800/70 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-blue-400">05. Contact</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              Connect & collaborate
            </h2>
            <p className="mt-3 max-w-2xl text-base text-slate-300">
              Open to connecting with fellow Computer Science students, mentors, and
              developers interested in Python, web fundamentals, and AI engineering.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenEditor}
            className="inline-flex items-center gap-2 self-start sm:self-auto rounded-lg border border-slate-700/80 bg-slate-900/70 px-4 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-blue-500/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 whitespace-nowrap shrink-0 min-h-[40px]"
          >
            <PencilLine className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
            <span>Edit Contact Placeholders</span>
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Direct Channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* GitHub Card */}
            <div className="rounded-2xl glass-card p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                    <Github className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-white">
                      GitHub
                    </h3>
                    <p className="text-xs text-slate-400">Code repositories & practice</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('github', profile.githubUrl)}
                  aria-label="Copy GitHub URL"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/70 text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  {copiedKey === 'github' ? (
                    <Check className="h-4 w-4 text-blue-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-mono text-blue-300 hover:text-blue-200 break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
              >
                <span>{profile.githubUrl}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            </div>

            {/* Email Placeholder Card */}
            <div className="rounded-2xl glass-card p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400 shrink-0">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-white">
                      Email
                    </h3>
                    <p className="text-xs text-slate-400">
                      {hasEmail ? 'Direct email address' : 'Editable placeholder'}
                    </p>
                  </div>
                </div>
                {hasEmail ? (
                  <button
                    type="button"
                    onClick={() => handleCopy('email', profile.email)}
                    aria-label="Copy email address"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/70 text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    {copiedKey === 'email' ? (
                      <Check className="h-4 w-4 text-blue-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={onOpenEditor}
                    className="text-xs font-medium text-blue-400 hover:text-blue-300 whitespace-nowrap"
                  >
                    Add Email
                  </button>
                )}
              </div>

              {hasEmail ? (
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-4 inline-block text-sm font-mono text-slate-200 hover:text-white break-all"
                >
                  {profile.email}
                </a>
              ) : (
                <p className="mt-4 text-xs font-mono text-amber-300/90">
                  [Email Address Placeholder — Click &ldquo;Add Email&rdquo; to set]
                </p>
              )}
            </div>

            {/* LinkedIn Placeholder Card */}
            <div className="rounded-2xl glass-card p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                    <Linkedin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-white">
                      LinkedIn
                    </h3>
                    <p className="text-xs text-slate-400">
                      {hasLinkedin ? 'Professional profile' : 'Editable placeholder'}
                    </p>
                  </div>
                </div>
                {!hasLinkedin && (
                  <button
                    type="button"
                    onClick={onOpenEditor}
                    className="text-xs font-medium text-blue-400 hover:text-blue-300 whitespace-nowrap"
                  >
                    Add LinkedIn
                  </button>
                )}
              </div>

              {hasLinkedin ? (
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-mono text-blue-300 hover:text-blue-200 break-all"
                >
                  <span>{profile.linkedinUrl}</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
              ) : (
                <p className="mt-4 text-xs font-mono text-amber-300/90">
                  [LinkedIn URL Placeholder — Click &ldquo;Add LinkedIn&rdquo; to set]
                </p>
              )}
            </div>
          </div>

          {/* Functional Message Draft Composer */}
          <div className="lg:col-span-7 rounded-2xl glass-card p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-white">
              Draft a Message
            </h3>
            <p className="mt-1.5 text-sm text-slate-400">
              {hasEmail
                ? 'Prepares an email in your mail client addressed to Jaswanth.'
                : 'Formats and copies your message to the clipboard until an email address placeholder is configured.'}
            </p>

            <form onSubmit={handleComposeSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-medium text-slate-300">Your Name</span>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Enter your name"
                    className="mt-1.5 w-full rounded-lg border border-slate-700/80 bg-[#070B19]/80 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </label>

                <label className="block">
                  <span className="text-xs font-medium text-slate-300">Subject</span>
                  <input
                    type="text"
                    required
                    value={senderSubject}
                    onChange={(e) => setSenderSubject(e.target.value)}
                    placeholder="Topic or collaboration"
                    className="mt-1.5 w-full rounded-lg border border-slate-700/80 bg-[#070B19]/80 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-xs font-medium text-slate-300">Message</span>
                <textarea
                  rows={4}
                  required
                  value={messageBody}
                  onChange={(e) => setMessageBody(e.target.value)}
                  placeholder="Write your note here..."
                  className="mt-1.5 w-full rounded-lg border border-slate-700/80 bg-[#070B19]/80 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </label>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg accent-gradient-btn px-5 py-2.5 text-sm font-semibold text-white transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 whitespace-nowrap shrink-0 min-h-[44px]"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  <span>{hasEmail ? 'Open Email Client' : 'Copy Formatted Draft'}</span>
                </button>

                {composerFeedback && (
                  <p className="text-xs text-blue-300">{composerFeedback}</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
