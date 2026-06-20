import React from 'react';

export const GradientMesh: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none bg-background noise-bg" 
      aria-hidden="true"
    >
      <div 
        className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vw] min-w-150 min-h-100 rounded-full blur-[140px] opacity-[0.06]"
        style={{
          background: 'radial-gradient(circle, rgba(91, 108, 255, 0.6) 0%, transparent 80%)'
        }}
      />

      <div 
        className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[160px] opacity-[0.03]"
        style={{
          background: 'radial-gradient(circle, rgba(91, 108, 255, 0.4) 0%, transparent 80%)'
        }}
      />

      <div 
        className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1.5px,transparent_1.5px)] bg-size-[24px_24px] opacity-70"
        style={{ 
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 25%, black, transparent 75%)',
          maskImage: 'radial-gradient(ellipse at 50% 25%, black, transparent 75%)' 
        }}
      />
    </div>
  );
};

export default GradientMesh;
