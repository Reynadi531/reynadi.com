import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import '@fontsource/inter/700.css';
import '@fontsource/inter/500.css';

const Presentation: React.FC = () => {
  return (
    <>
      <div className='min-h-[700px] font-sans py-12'>
        <h1 className='text-2xl font-bold tracking-wide'>About</h1>
        <h1 className='text-4xl font-bold tracking-wide bg-gradient-to-r from-brand-orange to-brand-yellow bg-clip-text text-transparent'>
          Reynadi Andreas Priesley
        </h1>
        <div className='flex h-[1200px] lg:h-auto flex-col-reverse lg:flex-row gap-6'>
          <div className='flex-1'>
            <p className='mt-4 text-justify text-gray-light font-medium'>
              Hello, first of all, let me introduce my name is Reynadi Andreas
              Priesley, you can call me Rey. Starting my journey in software
              engineering when I was a little in 6th grade, what can you expect
              from an elementary school kid, playing around with HTML, CSS, and
              Javascript. It all started with the pandemic where I have to stay
              at home and I decided to take my coding skills seriously and make
              COVID-19 API for Indonesia.
            </p>
            <p className='mt-4 text-justify text-gray-light font-medium'>
              As of technology grows faster and endlessly, I believe there's no
              limitation where you should stop learning, that's why learning is
              about a lifetime journey. And I believe there's more outcome from
              practicing rather than just reading.
            </p>
            <p className='mt-4 text-justify text-gray-light font-medium'>
              This website was made the cause of my own anxiety when people
              asked for portfolios and articles about my opinion. This site may
              contain more than just tech stuff, that correlated to my life.
            </p>
            <Link href='/contact'>
              <button className='mt-6 w-1/3 md:w-1/5 py-3 text-black font-bold bg-gradient-to-r from-brand-orange to-brand-yellow'>
                Hit me up
              </button>
            </Link>
          </div>
          <div className='flex-1 relative mt-2 lg:mt-0 -z-10'>
            <Image
              src='/assets/img/me.jpg'
              layout='fill'
              objectFit='cover'
              alt='Rey'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Presentation;
