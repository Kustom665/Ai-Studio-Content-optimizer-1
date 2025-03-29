export interface VideoGenerationParams {
  avatarId: string;
  voiceId: string;
  script: string;
  language: string;
  background?: string;
  resolution?: string;
  sceneSettings?: SceneSettings;
}

export interface TranslationParams {
  videoId: string;
  targetLanguage: string;
  preserveVoice: boolean;
  generateSubtitles: boolean;
}

export interface VideoResponse {
  id: string;
  status: 'processing' | 'completed' | 'failed';
  url?: string;
  error?: string;
  subtitles?: SubtitleTrack[];
}

export interface SceneSettings {
  background: string;
  lighting: string;
  camera: CameraSettings;
  props?: string[];
}

export interface CameraSettings {
  angle: string;
  zoom: number;
  movement?: string;
}

export interface SubtitleTrack {
  language: string;
  url: string;
  format: 'vtt' | 'srt';
}