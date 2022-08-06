import Link from 'next/link';
import React from 'react';

import Card from '../Card';

const FeaturedPosts: React.FC = () => {
  return (
    <>
      <div className='min-h-[700px] items-center'>
        <h1 className='text-3xl font-bold text-center bg-gradient-to-r from-brand-orange to-brand-yellow bg-clip-text text-transparent'>
          Featured Post
        </h1>
        <div className='mt-12 h-full flex flex-col justify-center items-center'>
          <Card
            thumbnail='https://images.unsplash.com/photo-1584931423298-c576fda54bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            date={new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
            description='When the COVID-19 starts i’m feel hard to find the right data to power my project, so i make my own'
            link='/'
            key={1}
            title='The story how i make my personal site awoksedrftxgftdrsaokkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk'
          />
          <Link href='/' passHref>
            <a rel='noopener noreferer'>
              <p className='hover:text-gray-light hover:cursor-pointer mt-12 text-lg font-sans font-bold underline decoration-dashed underline-offset-8'>
                See more
              </p>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FeaturedPosts;
