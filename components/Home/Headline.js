import Image from 'next/image';
import { Avatar } from '../common';

const Headline = ({ headline }) => {
  return (
    <div className='flex w-9/12 lg:pt-16 lg:pr-16'>
      <div>
        <ul className='space-y-4 font-Pathway text-4xl text-pwr-gray'>
          <li className='text-pwr-lightbrown'>01</li>
          <li>02</li>
          <li>03</li>
          <li>04</li>
        </ul>
      </div>
      <div className='ml-16 text-pwr-darkblack'>
        <div className='mb-4 flex items-center space-x-2 text-xs text-pwr-textgray'>
          <div className='h-1 w-1 rounded-full bg-pwr-red'></div>
          <div>Backend</div>
          <div className='rounded-md bg-pwr-lightgray px-2'>Golang</div>
        </div>
        <h1 className='mb-4 text-5xl font-semibold'>{headline.title}</h1>
        <div className='relative mb-2 h-64 overflow-hidden'>
          <Image
            src={headline.image}
            priority={true}
            alt={headline.description || ''}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
        </div>
        <div className='mb-4 text-xs text-pwr-textgray'>
          Image {headline.description || ''} of {headline.author} via{' '}
          <a
            href={headline.url}
            className='underline'
            target='_blank'
            rel='noreferrer'>
            Unsplash
          </a>
        </div>
        <div className='mb-4 text-sm text-pwr-black'>{headline.subtitle}</div>
        <Avatar
          avatar={headline.avatar}
          author={headline.author}
          date={headline.date}
        />
      </div>
    </div>
  );
};

export default Headline;
