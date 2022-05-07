import React from 'react';

const Footer = () => {
  return (
    <div className='my-10 mx-auto w-4/5 space-y-4 text-center text-pwr-brown lg:my-16 lg:flex lg:w-auto lg:justify-center lg:space-y-0'>
      <ul className='flex space-x-8 text-sm text-pwr-textgray'>
        <li className='border-b-2 border-transparent transition-all duration-500 hover:border-pwr-green hover:text-pwr-green'>
          <a
            href='https://www.facebook.com/elton.zheng.sh'
            target='_blank'
            rel='noreferrer'>
            Facebook
          </a>
        </li>
        <li className='border-b-2 border-transparent transition-all duration-500 hover:border-pwr-green hover:text-pwr-green'>
          <a
            href='https://www.instagram.com/elton.zheng'
            target='_blank'
            rel='noreferrer'>
            Instagram
          </a>
        </li>
        <li className='border-b-2 border-transparent transition-all duration-500 hover:border-pwr-green hover:text-pwr-green'>
          <a href='https://github.com/elton' target='_blank' rel='noreferrer'>
            Github
          </a>
        </li>
        <li className='border-b-2 border-transparent transition-all duration-500 hover:border-pwr-green hover:text-pwr-green'>
          <a
            href='mailto:elton.zheng.sh@gmail.com'
            target='_blank'
            rel='noreferrer'>
            Email
          </a>
        </li>
      </ul>
      <div className='text-xs lg:ml-44'>
        &copy; {new Date().toDateString().slice(-4)} pwr.ink all rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;
