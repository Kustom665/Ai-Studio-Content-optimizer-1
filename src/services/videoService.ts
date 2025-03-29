import { HEYGEN_CONFIG } from '../config/constants';
import { VideoGenerationParams, VideoResponse, TranslationParams } from '../types/video';

class VideoService {
  private readonly baseUrl: string;
  private readonly headers: HeadersInit;

  constructor() {
    this.baseUrl = HEYGEN_CONFIG.baseUrl;
    this.headers = {
      'Authorization': `Bearer ${HEYGEN_CONFIG.apiKey}`,
      'Content-Type': 'application/json',
    };
  }

  async generateVideo(params: VideoGenerationParams): Promise<VideoResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/videos/generate`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          avatar_id: params.avatarId,
          voice_id: params.voiceId,
          script: params.script,
          language: params.language,
          background: params.background,
          resolution: params.resolution,
          scene_settings: params.sceneSettings,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate video');
      }

      return await response.json();
    } catch (error) {
      console.error('Error generating video:', error);
      throw error;
    }
  }

  async translateVideo(params: TranslationParams): Promise<VideoResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/videos/translate`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          video_id: params.videoId,
          target_language: params.targetLanguage,
          preserve_voice: params.preserveVoice,
          generate_subtitles: params.generateSubtitles,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to translate video');
      }

      return await response.json();
    } catch (error) {
      console.error('Error translating video:', error);
      throw error;
    }
  }

  async getVideoStatus(videoId: string): Promise<VideoResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/videos/${videoId}`, {
        headers: this.headers,
      });

      if (!response.ok) {
        throw new Error('Failed to get video status');
      }

      return await response.json();
    } catch (error) {
      console.error('Error getting video status:', error);
      throw error;
    }
  }
}