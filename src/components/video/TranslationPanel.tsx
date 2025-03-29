import React, { useState } from 'react';
import { Globe, Type } from 'lucide-react';
import { Button } from '../shared/Button';
import { HEYGEN_CONFIG } from '../../config/constants';

interface TranslationPanelProps {
  videoId: string;
  onTranslate: (params: {
    targetLanguage: string;
    preserveVoice: boolean;
    generateSubtitles: boolean;
  }) => Promise<void>;
}

export function TranslationPanel({ videoId, onTranslate }: TranslationPanelProps) {
  const [targetLanguage, setTargetLanguage] = useState(HEYGEN_CONFIG.languages[0].code);
  const [preserveVoice, setPreserveVoice] = useState(true);
  const [generateSubtitles, setGenerateSubtitles] = useState(true);
  const [isTranslating, setIsTranslating] = useState(false);

  const handleTranslate = async () => {
    setIsTranslating(true);
    try {
      await onTranslate({
        targetLanguage,
        preserveVoice,
        generateSubtitles,
      });
    } finally {
      setIsTranslating(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Video Translation</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Target Language
          </label>
          <select
            className="w-full p-2 border rounded-lg"
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
          >
            {HEYGEN_CONFIG.languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={preserveVoice}
              onChange={(e) => setPreserveVoice(e.target.checked)}
              className="rounded border-gray-300"
            />
            <span className="text-sm text-gray-700">Preserve Voice Characteristics</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={generateSubtitles}
              onChange={(e) => setGenerateSubtitles(e.target.checked)}
              className="rounded border-gray-300"
            />
            <span className="text-sm text-gray-700">Generate Subtitles</span>
          </label>
        </div>

        <Button
          variant="primary"
          icon={<Globe className="w-5 h-5" />}
          isLoading={isTranslating}
          onClick={handleTranslate}
          disabled={!videoId}
          className="w-full"
        >
          Translate Video
        </Button>
      </div>
    </div>
  );
}