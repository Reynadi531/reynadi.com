import Link from 'next/link';
import React from 'react';
import { SiGithub, SiInstagram, SiLinkedin, SiTwitter } from 'react-icons/si';

const menu = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'Projects',
    href: '/projects',
  },
  {
    text: 'Blogs',
    href: '/blogs',
  },
  {
    text: 'About',
    href: '/about',
  },
  {
    text: 'Contact',
    href: '/contact',
  },
  {
    text: 'Analytics',
    href: '/',
  },
  {
    text: 'Guestbook',
    href: '/',
  },
  {
    text: 'Source Code',
    href: '/',
  },
];

const socials = [
  {
    href: 'https://github.com/Reynadi531',
    icon: SiGithub,
  },
  {
    href: 'https://twitter.com/reynadi17',
    icon: SiTwitter,
  },
  {
    href: 'https://instagram.com/reynadiap',
    icon: SiInstagram,
  },
  {
    href: 'https://www.linkedin.com/in/reynadiap/',
    icon: SiLinkedin,
  },
];

const Footer: React.FC = () => {
  return (
    <>
      <nav className='flex flex-col justify-center items-center py-4 border-t-[1px] border-gray-light font-sans'>
        <ul className='flex flex-wrap justify-center gap-4 text-gray-light'>
          {menu.map((item, i) => (
            <Link href={item.href} key={i} rel='noopener noreferrer'>
              <li className='text-sm hover:cursor-pointer hover:text-white'>
                {item.text}
              </li>
            </Link>
          ))}
        </ul>
        <div className='mt-4'>
          <h2 className='font-bold text-center'>Find me on</h2>
          <div className='mt-2 flex flex-wrap gap-8 justify-center'>
            {socials.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
              >
                <item.icon size='2rem' />
              </Link>
            ))}
          </div>
          <p className='text-center text-sm mt-4 italic text-gray-light tracking-wider'>
            Love & Peace
          </p>
          <p className='text-center text-sm mt-1'>
            {new Date().getFullYear()} Reynadi
          </p>
        </div>
      </nav>
    </>
  );
};

export default Footer;
