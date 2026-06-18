import React from 'react';

export const GradientMesh: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none bg-background" 
      aria-hidden="true"
    >
      <div 
        className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full blur-[120px] opacity-[0.08]"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, transparent 70%)'
        }}
      />
      
      <div 
        className="absolute top-[-5%] right-[-5%] w-[60%] h-[60%] rounded-full blur-[100px] opacity-[0.07]"
        style={{
          background: 'radial-gradient(circle, rgba(79, 70, 229, 0.8) 0%, transparent 70%)'
        }}
      />
      
      <div 
        className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full blur-[110px] opacity-[0.06]"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.8) 0%, transparent 70%)'
        }}
      />
      
      <div 
        className="absolute top-[30%] right-[-15%] w-[65%] h-[65%] rounded-full blur-[130px] opacity-[0.05]"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.8) 0%, transparent 70%)'
        }}
      />

      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full blur-[150px] opacity-[0.04]"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, transparent 70%)'
        }}
      />
      
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none" />
    </div>
  );
};

export default GradientMesh;
