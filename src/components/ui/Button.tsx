import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  to?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  to, 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-300 rounded-md focus:outline-none";
  
  const variants = {
    primary: "bg-[#c9a769] text-black hover:bg-[#b59556] shadow-md hover:shadow-lg",
    outline: "border border-[#c9a769] text-[#c9a769] hover:bg-[#c9a769] hover:text-black",
    ghost: "text-[#c9a769] hover:bg-neutral-900"
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
