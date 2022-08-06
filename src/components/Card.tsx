import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IProps {
  thumbnail: string;
  title: string;
  description: string;
  link: string;
  date: string;
}

const Card: React.FC<IProps> = ({
  thumbnail,
  title,
  description,
  link,
  date,
}) => {
  return (
    <Link href={link} passHref>
      <a rel='noopener noreferrer'>
        <div className='min-h-[24rem] max-w-[24rem] border-[1px] border-gray-light rounded-md hover:cursor-pointer'>
          <div className='h-full'>
            <div className='relative -z-10 w-full h-[12rem] bg-black rounded-md'>
              <Image
                src={thumbnail}
                alt={title}
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div className='p-4 w-full h-full'>
              <h1 className='max-w-[24rem] truncate text-lg font-semibold'>
                {title}
              </h1>
              <p className='text-md mt-2 text-gray-light'>{date}</p>
              <p className='text-md mt-2'>{description}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
