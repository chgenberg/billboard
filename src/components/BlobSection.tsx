import React, { ReactNode } from 'react'

type BlobSectionProps = {
  children: ReactNode;
  className?: string;
  blobClass?: string;
  blobColor?: string;
};

export default function BlobSection({ children, className = '', blobClass = '', blobColor = '#f7f3ef' }: BlobSectionProps) {
  return (
    <div className={`relative flex flex-col items-center justify-center py-8 px-6 my-8 ${className}`}>
      <svg
        viewBox="0 0 400 200"
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 ${blobClass}`}
        aria-hidden
      >
        <path
          fill={blobColor}
          d="M60,40 Q100,10 200,30 Q300,50 340,100 Q380,150 300,180 Q220,210 120,180 Q20,150 60,100 Q100,50 60,40 Z"
          opacity="0.95"
        />
      </svg>
      <div className="relative z-10 w-full max-w-2xl text-center">
        {children}
      </div>
    </div>
  )
} 