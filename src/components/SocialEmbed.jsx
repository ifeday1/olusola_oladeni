import React, { useState, useRef, useEffect } from 'react';

const SocialEmbed = ({ src, height = "800px", title }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const hasLoaded = useRef(false);

  useEffect(() => {
    // Only load iframe once (cached) - don't re-fetch on re-renders
    if (!hasLoaded.current) {
      hasLoaded.current = true;
    }
  }, []);

  return (
    <div className="w-full rounded-xl overflow-hidden border border-gray-200" style={{ height }}>
      {!isLoaded && (
        <div style={{ 
          position: 'absolute', 
          top: 0, left: 0, right: 0, bottom: 0, 
          background: '#f3f4f6', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          zIndex: 1
        }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            border: '4px solid #3b82f6', 
            borderTopColor: 'transparent',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
        </div>
      )}
      <iframe
        src={src}
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        allowTransparency="true"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        style={{ border: 0, width: '100%', height: '100%', opacity: isLoaded ? 1 : 0 }}
      />
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default SocialEmbed;