import { create } from 'zustand';
import { heygenService } from '../services/heygenService';
import { HEYGEN_CONFIG } from '../config/constants';

interface VideoState {
  currentVideo: File | null;
  generatedVideoUrl: string | null;
  isProcessing: boolean;
  error: string | null;
  avatarId: string;
  voiceId: string;
  language: string;
  script: string;
  setCurrentVideo: (video: File | null) => void;
  setAvatarId: (id: string) => void;
  setVoiceId: (id: string) => void;
  setLanguage: (lang: string) => void;
  setScript: (script: string) => void;
  processVideo: () => Promise<void>;
  reset: () => void;
}

export const useVideoStore = create<VideoState>((set, get) => ({
  currentVideo: null,
  generatedVideoUrl: null,
  isProcessing: false,
  error: null,
  avatarId: HEYGEN_CONFIG.avatars[0].id,
  voiceId: HEYGEN_CONFIG.voices[0].id,
  language: HEYGEN_CONFIG.languages[0].code,
  script: '',
  
  setCurrentVideo: (video) => set({ currentVideo: video }),
  setAvatarId: (id) => set({ avatarId: id }),
  setVoiceId: (id) => set({ voiceId: id }),
  setLanguage: (lang) => set({ language: lang }),
  setScript: (script) => set({ script: script }),
  
  processVideo: async () => {
    const state = get();
    if (!state.script) {
      set({ error: 'Please enter a script for the video' });
      return;
    }

    set({ isProcessing: true, error: null });

    try {
      const response = await heygenService.generateVideo({
        avatarId: state.avatarId,
        voiceId: state.voiceId,
        script: state.script,
        language: state.language,
      });

      // Poll for video status
      const checkStatus = async (videoId: string) => {
        const status = await heygenService.getVideoStatus(videoId);
        if (status.status === 'completed' && status.url) {
          set({ generatedVideoUrl: status.url, isProcessing: false });
        } else if (status.status === 'failed') {
          throw new Error(status.error || 'Video generation failed');
        } else {
          setTimeout(() => checkStatus(videoId), 2000);
        }
      };

      await checkStatus(response.id);
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to generate video',
        isProcessing: false 
      });
    }
  },

  reset: () => set({
    currentVideo: null,
    generatedVideoUrl: null,
    isProcessing: false,
    error: null,
    avatarId: HEYGEN_CONFIG.avatars[0].id,
    voiceId: HEYGEN_CONFIG.voices[0].id,
    language: HEYGEN_CONFIG.languages[0].code,
    script: '',
  }),
}));