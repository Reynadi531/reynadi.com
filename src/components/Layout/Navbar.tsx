import { Menu } from '@headlessui/react';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
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
          <Menu>
            <Menu.Button className='p-2 hover:bg-gray rounded-lg'>
              <GiHamburgerMenu size='2rem' />
            </Menu.Button>
            <Menu.Items className='absolute shadow-xl right-14 top-8 flex flex-col backdrop-blur-sm bg-gray/95 p-2 rounded-md gap-2 w-1/3'>
              {menu.map((item, i) => (
                <Menu.Item key={i}>
                  <Link href={item.href} key={i}>
                    <div
                      key={i}
                      className='hover:bg-gray-dark px-4 py-2 rounded-md hover:cursor-pointer'
                    >
                      {item.text}
                    </div>
                  </Link>
                </Menu.Item>
              ))}
            </Menu.Items>
          </Menu>
        </ul>
        <ul className='hidden lg:flex flex-row space-x-12'>
          {menu.map((item, i) => (
            <Link href={item.href} key={i} passHref>
              <a rel='noopener noreferrer'>
                <li
                  className={clsx(
                    'text-md font-medium font-primary hover:cursor-pointer hover:text-white transition-colors duration-200 ease-in',
                    item.href == router.asPath ? 'text-white' : 'text-[#B9B9B9]'
                  )}
                >
                  {item.text}
                </li>
              </a>
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
