import Link from 'next/link';
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const Hero: React.FC = () => {
  return (
    <>
      <div className='min-h-[700px] flex flex-col justify-center items-center font-primary'>
        <h1 className='text-center text-4xl font-bold max-w-md text-transparent leading-tight bg-gradient-to-r from-brand-orange to-brand-yellow bg-clip-text'>
          I like to bring idea alive and push it to the limit
        </h1>
        <p className='text-center text-lg font-medium max-w-lg text-gray-light mt-6'>
          I&apos;m Rey, a full-stack engineer with a passion for achieving
          valuable products and understanding people needs
        </p>
        <div className='mt-4 bg-gradient-to-r from-brand-orange to-brand-yellow p-[2px]'>
          <Link href='/contact'>
            <button className='text-md px-4 py-3 bg-gray-dark font-semibold hover:bg-gradient-to-r from-brand-orange to-brand-yellow hover:text-gray transition-colors duration-200 ease-in'>
              Learn more about me
            </button>
          </Link>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center transition duration-200 animate-bounce'>
        <IoIosArrowDown size='2rem' />
      </div>
    </>
  );
};

export default Hero;
