import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineMenu, HiOutlineSun, HiOutlineX } from 'react-icons/hi';
import myLoader from '../libs/loader';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <Head>
        <title>PWR - Power Ink 能量墨水</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='PWR - Power Ink 能量墨水, Provide photography, PC and mobile UI design, web application, WeChat MiniApp, APP development and other professional services. 提供摄影、PC和移动端UI设计、web应用、小程序、APP的开发等专业服务。'
        />
        <meta
          name='keywords'
          content='PWR, Power Ink, 能量墨水, Photography, 摄影, UI Design, UI设计, Web App Development, web应用开发, 小程序开发, App开发'
        />
      </Head>
      <header className='fixed inset-x-0 top-0 flex items-center bg-white/90 shadow backdrop-blur-md lg:z-10 lg:h-32 lg:border-b lg:border-pwr-lightgray lg:px-16 lg:shadow-none'>
        <div className='z-20 mx-auto flex w-full items-center justify-between  py-3 px-5 lg:justify-start lg:p-0'>
          <div className='h-4 w-36 lg:h-8 lg:w-60'>
            <Image
              loader={myLoader}
              src='logo.svg'
              alt='pwr.ink | 能量墨水'
              width={243}
              height={31}
            />
          </div>
          <button
            onClick={toggleMenu}
            className='z-30 text-pwr-black focus:outline-none lg:hidden'>
            {isOpen ? (
              <HiOutlineX className='h-6 w-6' />
            ) : (
              <HiOutlineMenu className='h-6 w-6' />
            )}
          </button>
        </div>

        <nav
          className={`absolute top-0 right-0 z-10 lg:relative lg:mt-0 lg:block lg:translate-y-0 lg:pr-12`}>
          <ul
            className={`${
              isOpen
                ? 'mt-12 lg:mt-0'
                : '-translate-y-full shadow-none ease-in-out'
            } translate-x-0 space-y-1 rounded-bl-md bg-white py-3 px-2 text-sm font-semibold text-pwr-black shadow transition-all duration-500 lg:flex lg:translate-y-0 lg:space-y-0 lg:space-x-10 lg:rounded-none lg:bg-transparent lg:px-0 lg:py-0 lg:uppercase lg:shadow-none`}>
            <li className='border-b-2 border-transparent px-4 py-1 transition-all duration-500 hover:border-pwr-green hover:text-pwr-green lg:px-0'>
              <Link href='/'>
                <a>Photography</a>
              </Link>
            </li>
            <li className='border-b-2 border-transparent px-4 py-1 transition-all duration-500 hover:border-pwr-green hover:text-pwr-green lg:px-0'>
              <Link href='/'>
                <a>Design</a>
              </Link>
            </li>
            <li className='border-b-2 border-transparent px-4 py-1 transition-all duration-500 hover:border-pwr-green hover:text-pwr-green lg:px-0'>
              <Link href='/'>
                <a>Service</a>
              </Link>
            </li>
            <li className='border-b-2 border-transparent px-4 py-1 transition-all duration-500 hover:border-pwr-green hover:text-pwr-green lg:px-0'>
              <Link href='/'>
                <a>Blog</a>
              </Link>
            </li>
          </ul>
        </nav>

        <div className='hidden h-full items-center space-x-5 border-l border-pwr-lightgray pl-12 text-pwr-gray lg:flex'>
          <HiOutlineSun className='h-6 w-6' />
          <a
            href='https://github.com/elton/pwr-fe'
            target='_blank'
            rel='noreferrer'>
            <FaGithub className='h-6 w-6' />
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
