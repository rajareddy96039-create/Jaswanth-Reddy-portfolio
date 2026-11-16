export type SkillCategory = 'all' | 'programming-ai' | 'web';

export interface SkillItem {
  id: string;
  name: string;
  level: string;
  category: Exclude<SkillCategory, 'all'>;
  categoryLabel: string;
  summary: string;
  topics: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  status: 'Completed Learning Project' | 'In Progress';
  stack: string[];
  description: string;
  learningFocus: string[];
  interactiveType: 'grade-calculator' | 'basic-calculator';
  imageSrc: string;
  imageAlt: string;
}

export interface LearningMilestone {
  id: string;
  index: string;
  title: string;
  timeframe: string;
  description: string;
}

export interface CertificateSlot {
  id: string;
  title: string;
  issuer: string;
  year: string;
}

export interface EditableProfile {
  collegeName: string;
  registrationNumber: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  certificates: CertificateSlot[];
}
