import { useState } from 'react';
import { VIDEO_CONFIG } from '../config/constants';

export function useVideoProcessing() {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const processVideo = async (file: File): Promise<void> => {
    if (file.size > VIDEO_CONFIG.maxSize) {
      setError('File size exceeds maximum limit');
      return;
    }

    const extension = file.name.split('.').pop()?.toLowerCase();
    if (!extension || !VIDEO_CONFIG.supportedFormats.includes(extension)) {
      setError('Unsupported file format');
      return;
    }

    try {
      setProgress(0);
      // Simulate processing with progress updates
      for (let i = 0; i <= 100; i += 10) {
        await new Promise(resolve => setTimeout(resolve, 500));
        setProgress(i);
      }
      setError(null);
    } catch (err) {
      setError('Error processing video');
      setProgress(0);
    }
  };

  return { progress, error, processVideo };
}