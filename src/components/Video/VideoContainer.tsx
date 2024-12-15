import React from 'react';
import { VideoEmbed } from './VideoEmbed';
import { VideoHeader } from './VideoHeader';

export const VideoContainer = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 h-full">
      <VideoHeader />
      <div className="mt-4 -mx-6 -mb-6">
        <VideoEmbed />
      </div>
    </div>
  );
};