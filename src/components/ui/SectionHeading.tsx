import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = true,
  className = ''
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-serif text-[#f5f5f5] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#a3a3a3] text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {centered && (
        <div className="w-24 h-1 bg-[#c9a769] mx-auto mt-6 rounded-full opacity-70"></div>
      )}
    </div>
  );
};
