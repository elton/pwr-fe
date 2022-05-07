import Image from 'next/image';
import Link from 'next/link';
import { Avatar, ReadMore } from '../common';

const Headline = ({ headline }) => {
  return (
    <div className='flex lg:pr-16'>
      <div>
        <ul className='hidden space-y-4 font-Pathway text-4xl text-pwr-gray lg:block'>
          <li className='text-pwr-lightbrown'>01</li>
          <li>02</li>
          <li>03</li>
          <li>04</li>
        </ul>
      </div>
      <div className='text-pwr-darkblack lg:ml-16'>
        <div className='mb-4 flex items-center space-x-2 text-xs text-pwr-textgray'>
          <div className='h-1 w-1 rounded-full bg-pwr-red'></div>
          <div>Backend</div>
          <div className='rounded-md bg-pwr-lightgray px-2'>Golang</div>
        </div>
        <h1 className='mb-6 text-3xl font-semibold hover:text-pwr-green hover:underline lg:text-5xl'>
          <Link href='/detail'>
            <a>{headline.title}</a>
          </Link>
        </h1>
        <div className='relative -z-10 mb-1 h-64 overflow-hidden'>
          {headline?.image && (
            <Link href='/detail'>
              <a>
                <Image
                  src={headline.image}
                  priority={true}
                  alt={headline.description || ''}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                />
              </a>
            </Link>
          )}
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
        <div className='mb-6 text-pwr-black'>
          {headline.subtitle}
          <ReadMore url='/detail' />
        </div>
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
