import React, { useEffect, useState } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const TwitterEmbed = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Re-render component when tab becomes visible to ensure proper loading
    const timer = setTimeout(() => {
      setKey(prev => prev + 1);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ width: '100%', minHeight: '550px', position: 'relative' }}>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="oladenisola"
        options={{
          height: 550,
          width: '100%',
          theme: 'light',
          chrome: 'noheader nofooter noborders'
        }}
        key={key}
        placeholder={
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            minHeight: '200px',
            background: '#f3f4f6',
            borderRadius: '8px'
          }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              border: '4px solid #1da1f2', 
              borderTopColor: 'transparent',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}></div>
          </div>
        }
      />
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default TwitterEmbed;