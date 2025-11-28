import React from 'react';

const PromoVideoIframe: React.FC = () => (
  <div className="flex justify-center p-8">
    <iframe
      className="aspect-video h-auto max-w-full"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/l168qWtKah0"
      title="Los Mexicanacas Promo Video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

export default PromoVideoIframe;
