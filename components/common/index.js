import Image from 'next/image';

export const Avatar = ({ avatar, author, date }) => {
  return (
    <div className='flex items-center space-x-2 text-sm text-pwr-brown'>
      <div className='relative -z-10 h-8 w-8 overflow-hidden rounded-full border-2 border-pwr-green'>
        {avatar && <Image src={avatar} width={64} height={64} alt={author} />}
      </div>
      <div>{author}</div>
      <div>·</div>
      <div className=' text-pwr-textgray'>{date}</div>
    </div>
  );
};

export const Topics = ({ topics }) => (
  <>
    <div className='text-xl font-semibold text-pwr-black'>Most Topics</div>
    <div className='flex flex-wrap text-sm'>
      {topics.map((topic) => (
        <div
          key={topic.id}
          className='mt-3 mr-3 space-x-2 rounded-lg bg-pwr-lightgray px-3 py-1 text-pwr-textgray'>
          <span>{topic.name}</span>
          <span className='text-xs text-pwr-green/60'>({topic.count})</span>
        </div>
      ))}
    </div>
  </>
);
