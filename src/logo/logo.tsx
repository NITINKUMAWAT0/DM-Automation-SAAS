import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="h-8 w-8 rounded-lg bg-white text-black flex items-center justify-center font-bold glow-box">
        Dm
      </div>
      <span className="text-xl font-semibold text-white glow-text">
        Automation
      </span>
    </div>
  );
};

export default Logo;
