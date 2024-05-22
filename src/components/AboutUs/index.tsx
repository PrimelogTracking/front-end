import React, { type FC, ReactNode } from 'react';

interface AboutUsProps {
  children: ReactNode;
  title: string;
  description: string;
}

export const AboutUs: FC<AboutUsProps> = ({ children, title, description }) => {
  return (
    <div className="bg-blue-600 rounded-lg p-6" style={{backgroundColor: "#7B7879"}}>
      <div className="flex items-center justify-start gap-3 mb-4">
        <span className="text-xl font-semibold">{title}</span>
        {children}
      </div>
      <p className="text-lg">{description}</p>
    </div>
  );
}

export default AboutUs;
