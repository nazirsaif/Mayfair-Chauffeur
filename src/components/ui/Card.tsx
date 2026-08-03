import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  linkTo?: string;
  linkText?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  image,
  linkTo,
  linkText,
  className = '',
  children
}) => {
  const content = (
    <>
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        {icon && <div className="text-[#c9a769] mb-4">{icon}</div>}
        <h3 className="text-xl font-serif text-[#f5f5f5] mb-2">{title}</h3>
        <p className="text-[#a3a3a3] text-sm mb-4 flex-grow">{description}</p>
        {children}
        {linkTo && linkText && (
          <div className="mt-auto pt-4 flex items-center text-[#c9a769] font-medium text-sm group-hover:text-[#b59556] transition-colors">
            {linkText} <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
          </div>
        )}
      </div>
    </>
  );

  const cardClasses = `bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden flex flex-col group hover:border-[#c9a769]/50 transition-colors ${className}`;

  if (linkTo && !children) {
    return (
      <Link to={linkTo} className={cardClasses}>
        {content}
      </Link>
    );
  }

  return (
    <div className={cardClasses}>
      {content}
    </div>
  );
};
