import React from 'react';
import { YOUTUBE_VIDEO_ID } from '../../constants/video';

export const VideoEmbed = () => {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0`}
        title="UTAGE セットアップガイド"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};