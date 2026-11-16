import {
  EditableProfile,
  LearningMilestone,
  ProjectItem,
  SkillItem,
} from '../types/portfolio';

export const DEFAULT_PROFILE: EditableProfile = {
  collegeName: '',
  registrationNumber: '',
  email: '',
  linkedinUrl: '',
  githubUrl: 'https://github.com/kommurujaswanthreddy',
  certificates: [
    {
      id: 'cert-1',
      title: 'Future Certificate Placeholder 01',
      issuer: 'Issuer / Platform (To Be Updated)',
      year: 'Planned',
    },
    {
      id: 'cert-2',
      title: 'Future Certificate Placeholder 02',
      issuer: 'Issuer / Platform (To Be Updated)',
      year: 'Planned',
    },
    {
      id: 'cert-3',
      title: 'Future Certificate Placeholder 03',
      issuer: 'Issuer / Platform (To Be Updated)',
      year: 'Planned',
    },
  ],
};

export const HERO_IMAGE_PATH =
  '/src/assets/images/hero_neural_architecture_1794826203312.jpg';

export const PROJECT_IMAGE_PATH =
  '/src/assets/images/project_python_logic_1794826203850.jpg';

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'python',
    name: 'Python',
    level: 'Beginner',
    category: 'programming-ai',
    categoryLabel: 'Core Programming',
    summary:
      'Building fluency in core syntax, control flow, functions, and clean problem-solving scripts as the primary language for AI engineering.',
    topics: [
      'Variables & Data Types',
      'Conditionals & Loops',
      'Functions & Input Validation',
      'CLI Utility Scripts',
    ],
  },
  {
    id: 'generative-ai',
    name: 'Generative AI',
    level: 'Basic',
    category: 'programming-ai',
    categoryLabel: 'AI Exploration',
    summary:
      'Exploring foundational Generative AI concepts, prompt design principles, and structured workflows to support code comprehension and early prototypes.',
    topics: [
      'Prompt Structuring',
      'LLM Capabilities & Limits',
      'AI-Assisted Debugging',
      'Conceptual ML Pathways',
    ],
  },
  {
    id: 'html',
    name: 'HTML',
    level: 'Foundational',
    category: 'web',
    categoryLabel: 'Web Development',
    summary:
      'Structuring semantic web pages with clear document hierarchy, accessible landmarks, forms, and clean content organization.',
    topics: [
      'Semantic Elements',
      'Document Hierarchy',
      'Forms & Inputs',
      'Accessible Markup',
    ],
  },
  {
    id: 'css',
    name: 'CSS',
    level: 'Foundational',
    category: 'web',
    categoryLabel: 'Web Development',
    summary:
      'Styling responsive layouts with Flexbox, Grid, clean typography, and dark-mode visual balance for developer interfaces.',
    topics: [
      'Flexbox & CSS Grid',
      'Responsive Layouts',
      'Color & Typography',
      'Subtle Transitions',
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'student-grade-calculator',
    title: 'Student Grade Calculator',
    subtitle: 'Python & GenAI Learning Project',
    status: 'Completed Learning Project',
    stack: ['Python', 'Generative AI Learning', 'Conditional Logic'],
    description:
      'A structured Python learning project designed to calculate total marks, percentage scores, and letter grades from student subject inputs. Built while practicing clean conditional branching and using Generative AI explanations to review edge cases and input validation.',
    learningFocus: [
      'Designing multi-branch conditional grading rules (A+ to F) with clear boundary checks.',
      'Handling numeric input validation and preventing invalid mark ranges below 0 or above 100.',
      'Using Generative AI responsibly as a study partner to compare code readability and edge-case handling.',
    ],
    interactiveType: 'grade-calculator',
    imageSrc: HERO_IMAGE_PATH,
    imageAlt:
      'Abstract obsidian glass and electric blue geometric structure representing the Student Grade Calculator logic',
  },
  {
    id: 'python-basic-calculator',
    title: 'Python Basic Calculator',
    subtitle: 'Foundational CLI Arithmetic Build',
    status: 'In Progress',
    stack: ['Python', 'Functions', 'Error Handling'],
    description:
      'An ongoing Python command-line calculator focused on modular arithmetic functions—supporting addition, subtraction, multiplication, and division with explicit division-by-zero protection and clean user prompts.',
    learningFocus: [
      'Separating arithmetic operations into reusable, single-purpose Python functions.',
      'Implementing safe loop control so users can run repeated calculations or exit cleanly.',
      'Next milestone: adding calculation history tracking and unit test cases for each operator.',
    ],
    interactiveType: 'basic-calculator',
    imageSrc: PROJECT_IMAGE_PATH,
    imageAlt:
      'Isometric dark navy and frosted glass computation blocks representing the Python Basic Calculator project',
  },
];

export const LEARNING_MILESTONES: LearningMilestone[] = [
  {
    id: 'milestone-1',
    index: '01.',
    title: 'Started B.Tech in Computer Science',
    timeframe: 'First Year · Current',
    description:
      'Entered first-year undergraduate Computer Science studies with a deliberate focus on programming fundamentals, mathematics, and long-term preparation for Artificial Intelligence engineering.',
  },
  {
    id: 'milestone-2',
    index: '02.',
    title: 'Built First Python Logic Programs',
    timeframe: 'Early Python Practice',
    description:
      'Progressed from introductory syntax to writing complete logic exercises, including the Student Grade Calculator and ongoing Python Basic Calculator build.',
  },
  {
    id: 'milestone-3',
    index: '03.',
    title: 'Established Web Foundations (HTML & CSS)',
    timeframe: 'Frontend Fundamentals',
    description:
      'Practiced semantic HTML structure and responsive CSS layout techniques to present technical learning projects clearly on the web.',
  },
  {
    id: 'milestone-4',
    index: '04.',
    title: 'Initial Generative AI Study & Exploration',
    timeframe: 'Ongoing Learning',
    description:
      'Began exploring how modern Generative AI systems work at a foundational level and how structured prompts can assist in debugging and learning new concepts.',
  },
];
