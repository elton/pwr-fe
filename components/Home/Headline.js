import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, ReadMore } from '../common';

const Headline = ({ headlines }) => {
  dayjs.extend(relativeTime);
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
        {headlines.map((headline) => (
          <div key={headline.id.toString()}>
            <div className='mb-4 flex items-center space-x-2 text-xs text-pwr-textgray'>
              <div className='h-1 w-1 rounded-full bg-pwr-red'></div>
              {headline.topics.map((topic) => (
                <div key={topic.id.toString()}>{topic.name}</div>
              ))}

              {headline.tags.map((tag) => (
                <div
                  key={tag.id.toString()}
                  className='rounded-md bg-pwr-lightgray px-2'>
                  {tag.name}
                </div>
              ))}
            </div>

            <h1 className='mb-6 text-3xl font-semibold hover:text-pwr-green hover:underline lg:text-5xl'>
              <Link href='/detail'>
                <a>{headline.title}</a>
              </Link>
            </h1>
            <div>
              {headline?.image && (
                <Link href='/detail'>
                  <a className='relative -z-10 mb-1 block h-64 overflow-hidden'>
                    <Image
                      src={decodeURI(headline.image)}
                      priority={true}
                      alt={headline.description ?? ''}
                      layout='fill'
                      objectFit='cover'
                      objectPosition='center'
                    />
                  </a>
                </Link>
              )}
            </div>
            <div className='mb-4 text-xs text-pwr-textgray'>
              Image {headline.description || ''} of {headline.image_author} via{' '}
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
              avatar={headline.author.avatar}
              author={headline.author.name}
              date={dayjs(headline.author.created_at).fromNow()}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Headline;
