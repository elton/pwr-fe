import React from 'react';
import { Avatar } from '../common';

const Articles = ({ articles }) => {
  return (
    <div className='lg:ml-24 lg:pr-16'>
      <div className='mt-16 mb-6 flex items-center justify-between'>
        <div className=' text-2xl font-semibold text-pwr-darkblack'>
          Recent Articles
        </div>
        <div className='rounded-md bg-pwr-lightgray px-2 py-1 text-xs text-pwr-brown'>
          more &gt;
        </div>
      </div>
      <div className='space-y-6'>
        {articles.map((article) => (
          <div key={article.id} className='space-y-3'>
            <div className='text-xl text-pwr-black'>{article.title}</div>
            <div className='text-xs text-pwr-lightbrown'>
              {article.subtitle}
            </div>

            <Avatar
              avatar={article.avatar}
              author={article.author}
              date={article.date}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
