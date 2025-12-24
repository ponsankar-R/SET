import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  href,
  ...props 
}) => {
  const baseStyles = "inline-block text-center px-6 py-3 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer border-none";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30",
    secondary: "bg-white text-blue-900 hover:bg-gray-100 shadow-lg",
    outline: "border-2 border-white text-white hover:bg-white/10"
  };

  const widthStyle = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthStyle} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={combinedClasses} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
