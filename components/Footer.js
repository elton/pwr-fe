import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import myLoader from '../libs/loader';

const Footer = () => {
  return (
    <footer className='my-10 mx-auto w-4/5 space-y-4 text-center text-xs text-pwr-brown lg:my-16'>
      <div className='w-full space-y-4 lg:flex lg:items-center lg:justify-center lg:space-y-0 lg:space-x-8'>
        <div className='flex items-center justify-center space-x-1'>
          <div>Proudly made in</div>
          <div className='h-3 w-4'>
            <Image
              loader={myLoader}
              src='cn.svg'
              title='China'
              alt='China'
              width={20}
              height={15}
            />
          </div>

          <div>by Elton Zheng</div>
        </div>

        <ul className='flex items-center justify-center space-x-3 text-sm text-pwr-textgray'>
          <li className='border-b-2 border-transparent transition-all duration-500 hover:text-pwr-green'>
            <a
              href='https://www.facebook.com/elton.zheng.sh'
              target='_blank'
              rel='noreferrer'>
              <FaFacebook />
            </a>
          </li>
          <li className='border-b-2 border-transparent transition-all duration-500 hover:text-pwr-green'>
            <a
              href='https://www.instagram.com/elton.zheng'
              target='_blank'
              rel='noreferrer'>
              <FaInstagram />
            </a>
          </li>
          <li className='border-b-2 border-transparent transition-all duration-500 hover:text-pwr-green'>
            <a href='https://github.com/elton' target='_blank' rel='noreferrer'>
              <FaGithub />
            </a>
          </li>
          <li className='border-b-2 border-transparent transition-all duration-500 hover:text-pwr-green'>
            <a
              href='mailto:elton.zheng.sh@gmail.com'
              target='_blank'
              rel='noreferrer'>
              <HiMail />
            </a>
          </li>
        </ul>
      </div>

      <div>
        &copy; {new Date().toDateString().slice(-4)}{' '}
        <a href='https://pwr.ink' className='text-pwr-green hover:underline'>
          pwr.ink
        </a>{' '}
        all rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
