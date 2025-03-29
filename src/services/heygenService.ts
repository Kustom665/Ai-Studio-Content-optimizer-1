import { HEYGEN_CONFIG } from '../config/constants';

interface VideoGenerationParams {
  avatarId: string;
  voiceId: string;
  script: string;
  language: string;
}

interface VideoResponse {
  id: string;
  status: 'processing' | 'completed' | 'failed';
  url?: string;
  error?: string;
}

class HeyGenService {
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
      const response = await fetch(`${this.baseUrl}/videos`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          avatar_id: params.avatarId,
          voice_id: params.voiceId,
          script: params.script,
          language: params.language,
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

export const heygenService = new HeyGenService();