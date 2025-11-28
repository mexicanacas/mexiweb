import React from 'react';
import YouTube from 'react-youtube';

const PromoVideo: React.FC = () => (
  <div className="flex justify-center p-8">
    <YouTube
      videoId="l168qWtKah0"
      className="[&>iframe]:aspect-video [&>iframe]:h-auto [&>iframe]:max-w-full"
    />
  </div>
);

export default PromoVideo;
