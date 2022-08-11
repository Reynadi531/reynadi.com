import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { SiGithub, SiInstagram, SiLinkedin, SiTwitter } from 'react-icons/si';

import ContactBox, { IContactBoxProps } from './ContactBox';

const Contact: IContactBoxProps[] = [
  {
    href: 'mailto:rey@reynadi.com',
    icon: MdOutlineEmail,
    label: 'rey@reynadi.com',
  },
  {
    label: 'Reynadi531',
    href: 'https://github.com/Reynadi531',
    icon: SiGithub,
  },
  {
    label: '@reynadi17',
    href: 'https://twitter.com/reynadi17',
    icon: SiTwitter,
  },
  {
    label: '@reynadiap',
    href: 'https://instagram.com/reynadiap',
    icon: SiInstagram,
  },
  {
    label: 'https://www.linkedin.com/in/reynadiap/',
    href: 'https://www.linkedin.com/in/reynadiap/',
    icon: SiLinkedin,
  },
];

const Presentation: React.FC = () => {
  return (
    <>
      <div className='min-h-[700px]'>
        <h1 className='text-4xl font-bold tracking-wide bg-gradient-to-r from-brand-orange to-brand-yellow bg-clip-text text-transparent'>
          Contact
        </h1>
        <h2 className='text-xl tracking-wide text-gray-light'>
          Hit me up when you need my help, either just learning or gigs!
        </h2>
        <div className='mt-4 flex flex-col gap-4'>
          {Contact.map((item, index) => (
            <ContactBox key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Presentation;
