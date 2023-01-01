import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import '@fontsource/rubik-glitch';
import '@fontsource/inter';

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
];

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  return (
    <>
      <nav className='sticky top-0 flex justify-center items-center h-20 bg-gray-dark/30 backdrop-blur-sm'>
        <ul className='flex-1 flex'>
          <Link href='/'>
            <li className='text-5xl font-display hover:cursor-pointer hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent from-brand-orange to-brand-yellow transition-colors duration-200 ease-in'>
              R
            </li>
          </Link>
        </ul>
        <ul className='flex lg:hidden'>
          <button
            className='p-2 hover:bg-gray rounded-lg'
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <GiHamburgerMenu size='2rem' />
          </button>
        </ul>
        <ul className='hidden lg:flex flex-row space-x-12'>
          {menu.map((item, i) => (
            <Link href={item.href} key={i} rel='noopener noreferrer'>
              <li
                className={clsx(
                  'text-md font-medium font-primary hover:cursor-pointer hover:text-white transition-colors duration-200 ease-in',
                  item.href == router.asPath ? 'text-white' : 'text-[#B9B9B9]'
                )}
              >
                {item.text}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      {isNavOpen && (
        <div className='w-full h-full fixed left-0 top-0 z-50 bg-gray-dark p-4'>
          <div className='flex-col w-full'>
            <button
              className='ml-auto mb-4'
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <MdClose size='2rem' />
            </button>
            {menu.map((item, i) => (
              <div key={i} className='border-b border-gray py-5 mx-2'>
                <Link href={item.href} key={i} rel='noopener noreferrer'>
                  <h2
                    className={clsx(
                      'text-lg text-gray-light font-medium hover:text-white',
                      item.href == router.asPath && 'text-white'
                    )}
                  >
                    {item.text}
                  </h2>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
