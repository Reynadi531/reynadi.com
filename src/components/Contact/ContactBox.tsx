import React from 'react';
import { IconType } from 'react-icons';

export interface IContactBoxProps {
  label: string;
  href: string;
  icon: IconType;
}

const ContactBox: React.FC<IContactBoxProps> = ({ label, href, icon }) => {
  const Icon = icon;
  return (
    <>
      <div className='flex flex-row gap-4 items-center'>
        <a href={href} target='_blank' rel='noopener noreferrer'>
          <button className='p-3 rounded-full text-gray-light bg-gray hover:bg-gray-light hover:text-gray transition-colors duration-200 ease-in'>
            <Icon size='2rem' />
          </button>
        </a>
        <p className='text-lg tracking-wide'>{label}</p>
      </div>
    </>
  );
};

export default ContactBox;
