import Image from 'next/image';
import Link from 'next/link';
import { HiArrowSmRight } from 'react-icons/hi';
import { Avatar } from '../common';

const Articles = ({ articles }) => {
  return (
    <div className='lg:ml-24 lg:pr-16'>
      <div className='mt-16 mb-6 flex justify-between'>
        <div className=' text-2xl font-semibold text-pwr-darkblack'>
          Recent Articles
        </div>
        <Link href='/'>
          <a className='flex items-center space-x-1 text-xs text-pwr-green'>
            <span>See the full list</span> <HiArrowSmRight />
          </a>
        </Link>
      </div>
      <div className='space-y-8'>
        {articles.map((article) => (
          <div key={article.id} className='lg:flex lg:justify-between'>
            <div className='space-y-3 lg:w-4/5 lg:pr-12'>
              <div className='text-2xl text-pwr-black'>{article.title}</div>
              <div className='text-pwr-lightbrown'>{article.subtitle}</div>

              <Avatar
                avatar={article.avatar}
                author={article.author}
                date={article.date}
              />
            </div>
            <div className='relative -z-10 hidden h-32 w-32 overflow-hidden lg:block'>
              <Image
                src={article.image}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                alt=''
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
