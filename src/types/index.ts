export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface Template {
  title: string;
  thumbnail: string;
  duration: string;
}

export interface Project {
  title: string;
  lastModified: string;
  thumbnail: string;
}

export interface MetricData {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string;
}

export interface ContentSuggestion {
  type: 'success' | 'warning';
  text: string;
  icon: React.ReactNode;
}