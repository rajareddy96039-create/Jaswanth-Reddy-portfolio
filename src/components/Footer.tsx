interface FooterProps {
  githubUrl: string;
}

export function Footer({ githubUrl }: FooterProps) {
  return (
    <footer className="border-t border-slate-800/70 bg-[#050814] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div>
          <p className="font-display text-sm font-semibold text-white">
            Jaswanth Reddy K
          </p>
          <p className="mt-0.5 text-xs text-slate-400">
            First-Year B.Tech Computer Science Student · Aspiring AI Engineer
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-xs text-slate-400">
          <a href="#home" className="hover:text-white transition-colors whitespace-nowrap">
            Home
          </a>
          <a href="#about" className="hover:text-white transition-colors whitespace-nowrap">
            About
          </a>
          <a href="#skills" className="hover:text-white transition-colors whitespace-nowrap">
            Skills
          </a>
          <a href="#projects" className="hover:text-white transition-colors whitespace-nowrap">
            Projects
          </a>
          <a
            href="#achievements"
            className="hover:text-white transition-colors whitespace-nowrap"
          >
            Achievements
          </a>
          <a href="#contact" className="hover:text-white transition-colors whitespace-nowrap">
            Contact
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors whitespace-nowrap"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
