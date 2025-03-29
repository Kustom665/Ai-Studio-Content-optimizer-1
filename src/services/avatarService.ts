import { HEYGEN_CONFIG } from '../config/constants';
import { AvatarParams, AvatarResponse } from '../types/avatar';

class AvatarService {
  private readonly baseUrl: string;
  private readonly headers: HeadersInit;

  constructor() {
    this.baseUrl = HEYGEN_CONFIG.baseUrl;
    this.headers = {
      'Authorization': `Bearer ${HEYGEN_CONFIG.apiKey}`,
      'Content-Type': 'application/json',
    };
  }

  async createAvatar(params: AvatarParams): Promise<AvatarResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/avatars`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          style: params.style,
          gender: params.gender,
          outfit: params.outfit,
          expressions: params.expressions,
          gestures: params.gestures,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create avatar');
      }

      return await response.json();
    } catch (error) {
      console.error('Error creating avatar:', error);
      throw error;
    }
  }

  async updateAvatar(avatarId: string, params: Partial<AvatarParams>): Promise<AvatarResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/avatars/${avatarId}`, {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify(params),
      });

      if (!response.ok) {
        throw new Error('Failed to update avatar');
      }

      return await response.json();
    } catch (error) {
      console.error('Error updating avatar:', error);
      throw error;
    }
  }

  async getAvatarPresets(): Promise<AvatarResponse[]> {
    try {
      const response = await fetch(`${this.baseUrl}/avatars/presets`, {
        headers: this.headers,
      });

      if (!response.ok) {
        throw new Error('Failed to get avatar presets');
      }

      return await response.json();
    } catch (error) {
      console.error('Error getting avatar presets:', error);
      throw error;
    }
  }
}