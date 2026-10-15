export type RoutePath = '/' | '/services' | '/training' | '/contact';

export interface ServiceDetail {
  id: string;
  category: 'cybersecurity' | 'development' | 'design';
  title: string;
  shortDesc: string;
  iconName: string;
  details: string[];
  scope: string;
  deliverables: string[];
}

export interface TrainingProgram {
  id: string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  track: 'Offensive' | 'Defensive' | 'Operations' | 'Engineering' | 'Python & AI';
  shortDesc: string;
  iconName: string;
  topics: string[];
  practicalLabs: string[];
  prerequisites: string;
  skillsGained: string[];
  durationNotice: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  organization: string;
  phone: string;
  enquiryType: string;
  details: string;
  consent: boolean;
}
