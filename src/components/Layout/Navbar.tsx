import React from 'react';
import '@fontsource/rubik-glitch';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

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
  const [isOpen, SetIsOpen] = React.useState(false);
  return (
    <>
      <nav className='sticky top-0 flex justify-center items-center h-20'>
        <ul className='flex-1 flex'>
          <Link href='/'>
            <li className='text-5xl font-display hover:cursor-pointer'>R</li>
          </Link>
        </ul>
        <ul className='flex lg:hidden'>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className='p-2 hover:bg-gray rounded-lg'>
              <GiHamburgerMenu size='2rem' />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className='mt-4 shadow-xl'>
              {menu.map((item) => (
                <Link href={item.href}>
                  <DropdownMenu.Item
                    key={item.text}
                    className='w-[32vw] flex items-center px-4 py-3 bg-gray hover:bg-gray/70 hover:cursor-pointer'
                  >
                    <h1>{item.text}</h1>
                  </DropdownMenu.Item>
                </Link>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
