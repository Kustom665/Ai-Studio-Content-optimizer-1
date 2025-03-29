export const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  wsUrl: import.meta.env.VITE_WEBSOCKET_URL,
};

export const AI_CONFIG = {
  model: import.meta.env.VITE_AI_MODEL,
  maxTokens: parseInt(import.meta.env.VITE_MAX_TOKENS),
  temperature: parseFloat(import.meta.env.VITE_TEMPERATURE),
};

export const VIDEO_CONFIG = {
  maxSize: parseInt(import.meta.env.VITE_MAX_VIDEO_SIZE),
  supportedFormats: import.meta.env.VITE_SUPPORTED_VIDEO_FORMATS.split(','),
};

export const HEYGEN_CONFIG = {
  apiKey: import.meta.env.VITE_HEYGEN_API_KEY,
  baseUrl: 'https://api.heygen.com/v1',
  avatars: [
    { id: 'prof_m_1', name: 'Professional Male', type: 'professional' },
    { id: 'prof_f_1', name: 'Professional Female', type: 'professional' },
    { id: 'cas_m_1', name: 'Casual Male', type: 'casual' },
    { id: 'cas_f_1', name: 'Casual Female', type: 'casual' }
  ],
  voices: [
    { id: 'en_m_1', name: 'Natural Male', language: 'en-US' },
    { id: 'en_f_1', name: 'Natural Female', language: 'en-US' },
    { id: 'en_m_2', name: 'Professional Male', language: 'en-US' },
    { id: 'en_f_2', name: 'Professional Female', language: 'en-US' }
  ],
  languages: [
    { code: 'en-US', name: 'English (US)' },
    { code: 'en-GB', name: 'English (UK)' },
    { code: 'es-ES', name: 'Spanish' },
    { code: 'fr-FR', name: 'French' }
  ]
};