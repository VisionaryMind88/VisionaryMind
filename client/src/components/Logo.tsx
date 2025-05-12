import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="h-10 w-10 bg-accent-blue rounded-lg flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue via-accent-purple to-accent-green opacity-70"></div>
        <span className="text-xl font-heading font-bold relative z-10">VM</span>
      </div>
      <span className="text-xl font-heading font-bold text-text-primary">VisionaryMind</span>
    </div>
  );
};

export default Logo;
