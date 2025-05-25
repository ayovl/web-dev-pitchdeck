export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProblemPoint {
  id: string;
  text: string;
  icon: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PackageFeature {
  id: string;
  title: string;
  features: string[];
  icon: string;
}

export interface FormData {
  name: string;
  email: string;
  website: string;
  requirements: string;
}