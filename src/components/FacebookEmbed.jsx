import React, { useEffect, useState, useRef } from 'react';

const FacebookEmbed = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    const initFacebook = () => {
      if (window.FB && window.FB.XFBML && containerRef.current) {
        window.FB.XFBML.parse(containerRef.current);
        setIsLoaded(true);
      }
    };

    // Wait longer for SDK to fully load - 3 seconds
    const timer = setTimeout(initFacebook, 3000);

    // Also try immediately if SDK already loaded
    if (window.FB) {
      initFacebook();
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      <div className="col-span-1 md:col-span-2 lg:col-span-3 min-h-[600px] relative">
        {!isLoaded && (
          <div style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            background: '#f3f4f6',
            borderRadius: '8px',
            zIndex: 1
          }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              border: '4px solid #1877f2', 
              borderTopColor: 'transparent',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}></div>
          </div>
        )}
        <div 
          data-href="https://web.facebook.com/ola.oladeni"
          data-tabs="timeline"
          data-width="500"
          data-height="600"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
          className="fb-page"
        >
          <blockquote cite="https://web.facebook.com/ola.oladeni" className="fb-xfbml-parse-ignore">
            <a href="https://web.facebook.com/ola.oladeni">Olusola Oladeni</a>
          </blockquote>
        </div>
      </div>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default FacebookEmbed;