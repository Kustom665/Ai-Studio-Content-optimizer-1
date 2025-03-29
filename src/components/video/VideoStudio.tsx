import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Video, Upload, Play, Download } from 'lucide-react';
import { useVideoStore } from '../../stores/videoStore';
import { HEYGEN_CONFIG } from '../../config/constants';

export function VideoStudio() {
  const {
    currentVideo,
    generatedVideoUrl,
    isProcessing,
    error,
    avatarId,
    voiceId,
    language,
    script,
    setCurrentVideo,
    setAvatarId,
    setVoiceId,
    setLanguage,
    setScript,
    processVideo,
  } = useVideoStore();

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'video/*': [] },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setCurrentVideo(acceptedFiles[0]);
      }
    },
  });

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6">AI Video Studio</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Video Upload/Preview Section */}
        <div>
          {!currentVideo && !generatedVideoUrl ? (
            <div
              {...getRootProps()}
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-500 transition-colors cursor-pointer"
            >
              <input {...getInputProps()} />
              <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600">Drag & drop a video here, or click to select</p>
              <p className="text-sm text-gray-500 mt-2">Supported formats: MP4, MOV, AVI</p>
            </div>
          ) : (
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <video
                src={generatedVideoUrl || (currentVideo && URL.createObjectURL(currentVideo))}
                className="w-full h-full object-contain"
                controls
              />
            </div>
          )}
        </div>

        {/* Controls Section */}
        <div>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Video Settings</h3>
              <div className="space-y-4">
                <select
                  className="w-full p-2 border rounded-lg"
                  value={avatarId}
                  onChange={(e) => setAvatarId(e.target.value)}
                >
                  {HEYGEN_CONFIG.avatars.map((avatar) => (
                    <option key={avatar.id} value={avatar.id}>
                      {avatar.name}
                    </option>
                  ))}
                </select>

                <select
                  className="w-full p-2 border rounded-lg"
                  value={voiceId}
                  onChange={(e) => setVoiceId(e.target.value)}
                >
                  {HEYGEN_CONFIG.voices.map((voice) => (
                    <option key={voice.id} value={voice.id}>
                      {voice.name}
                    </option>
                  ))}
                </select>

                <select
                  className="w-full p-2 border rounded-lg"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  {HEYGEN_CONFIG.languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Script</h3>
              <textarea
                className="w-full h-32 p-3 border rounded-lg resize-none"
                placeholder="Enter your video script here..."
                value={script}
                onChange={(e) => setScript(e.target.value)}
              />
            </div>

            {error && (
              <div className="text-red-600 text-sm">{error}</div>
            )}

            <div className="flex space-x-4">
              <button
                className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => processVideo()}
                disabled={isProcessing || !script}
              >
                {isProcessing ? (
                  <>
                    <span className="animate-spin">⌛</span>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    <span>Generate Video</span>
                  </>
                )}
              </button>
              
              {generatedVideoUrl && (
                <a
                  href={generatedVideoUrl}
                  download
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Download className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}