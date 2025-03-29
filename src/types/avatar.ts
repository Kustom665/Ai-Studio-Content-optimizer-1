export interface AvatarParams {
  style: string;
  gender: 'male' | 'female' | 'neutral';
  outfit: string;
  expressions: Expression[];
  gestures: Gesture[];
}

export interface AvatarResponse {
  id: string;
  status: 'created' | 'failed';
  url?: string;
  error?: string;
  previewUrl?: string;
}

export interface Expression {
  name: string;
  intensity: number;
  duration: number;
}

export interface Gesture {
  name: string;
  timing: number;
  duration: number;
}