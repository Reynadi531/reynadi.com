import Link from 'next/link';
import React from 'react';

import Card from '../Card';

interface IProps {
  title: string;
  thumbnail: string;
  date: string;
  description: string;
  link: string;
}

const FeaturedProject: React.FC<IProps> = ({
  title,
  date,
  description,
  link,
  thumbnail,
}) => {
  return (
    <>
      <div className='min-h-[700px] items-center mt-32'>
        <h1 className='text-3xl font-bold text-center bg-gradient-to-r from-brand-orange to-brand-yellow bg-clip-text text-transparent'>
          Featured Project
        </h1>
        <div className='mt-12 h-full flex flex-col justify-center items-center'>
          <Card
            thumbnail={thumbnail}
            date={new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
            description={description}
            link={link}
            key={1}
            title={title}
          />

          <Link href='/' rel='noopener noreferer'>
            <p className='hover:text-gray-light hover:cursor-pointer mt-12 text-lg font-sans font-bold underline decoration-dashed underline-offset-8'>
              See more
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FeaturedProject;
