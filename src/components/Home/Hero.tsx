import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <div className='min-h-[800px] flex flex-col justify-center items-center'>
      <h1 className='text-center text-4xl font-sans font-bold max-w-[82vw] text-transparent leading-tight bg-gradient-to-r from-brand-orange to-brand-yellow bg-clip-text'>
        I like to bring idea alive and push it to the limit
      </h1>
      <p className='text-center text-lg font-semibold text-gray-light mt-6'>
        I&apos;m Rey, a full-stack engineer with a passion for achieving
        valuable products and understanding customer needs
      </p>
    </div>
  );
};

export default Hero;
