'use client';

import React, { type FC } from 'react';

export const LoadingSpinner: FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-green-500 border-dotted rounded-full animate-spin"></div>
    </div>
  );
}

export default LoadingSpinner;
