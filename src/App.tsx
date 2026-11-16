/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { DEFAULT_PROFILE } from './data/portfolioData';
import { EditableProfile, ProjectItem } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { EditProfileModal } from './components/EditProfileModal';

const STORAGE_KEY = 'jaswanth_portfolio_placeholders_v1';
const SECTION_IDS = [
  'home',
  'about',
  'skills',
  'projects',
  'achievements',
  'contact',
];

function loadSavedProfile(): EditableProfile {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROFILE;
    const parsed = JSON.parse(raw) as Partial<EditableProfile>;
    return {
      ...DEFAULT_PROFILE,
      ...parsed,
      certificates:
        Array.isArray(parsed.certificates) && parsed.certificates.length > 0
          ? parsed.certificates
          : DEFAULT_PROFILE.certificates,
    };
  } catch {
    return DEFAULT_PROFILE;
  }
}

export default function App() {
  const [profile, setProfile] = useState<EditableProfile>(loadSavedProfile);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: 0.05,
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSaveProfile = (updated: EditableProfile) => {
    setProfile(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Ignore storage quota errors cleanly
    }
  };

  const handleResetProfile = () => {
    setProfile(DEFAULT_PROFILE);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage errors cleanly
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#060A17] hero-glow-canvas text-slate-100 flex flex-col">
        <Navbar activeSection={activeSection} />

        <main className="flex-1">
          <HeroSection githubUrl={profile.githubUrl} />
          <AboutSection
            profile={profile}
            onOpenEditor={() => setIsEditorOpen(true)}
          />
          <SkillsSection />
          <ProjectsSection
            githubUrl={profile.githubUrl}
            onSelectProject={setSelectedProject}
          />
          <AchievementsSection
            certificates={profile.certificates}
            onOpenEditor={() => setIsEditorOpen(true)}
          />
          <ContactSection
            profile={profile}
            onOpenEditor={() => setIsEditorOpen(true)}
          />
        </main>

        <Footer githubUrl={profile.githubUrl} />

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        <EditProfileModal
          isOpen={isEditorOpen}
          profile={profile}
          onSave={handleSaveProfile}
          onReset={handleResetProfile}
          onClose={() => setIsEditorOpen(false)}
        />
      </div>
    </MotionConfig>
  );
}
