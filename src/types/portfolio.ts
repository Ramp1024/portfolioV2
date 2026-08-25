export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone?: string;
  summary: string;
}

export interface Social {
  label: string;
  url: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string; // "Present" for current
  highlights: string[];
}

export type ProjectCategory = "AI" | "Infrastructure" | "Web" | "Hackathon";

export interface Project {
  title: string;
  subtitle?: string;
  featured: boolean;
  category: ProjectCategory;
  date: string;
  description: string;
  achievements: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  award?: string;
}

export interface Award {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  start: string;
  end: string;
}

export interface Skills {
  languages: string[];
  ai: string[];
  backend: string[];
  frontend: string[];
  infrastructure: string[];
}

export interface Now {
  building: string[];
  learning: string[];
  reading: string[];
  exploring: string[];
}

export interface Portfolio {
  profile: Profile;
  socials: Social[];
  experience: Experience[];
  projects: Project[];
  awards: Award[];
  education: Education[];
  skills: Skills;
  now: Now;
}
