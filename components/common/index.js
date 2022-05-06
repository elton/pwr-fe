import Image from 'next/image';

export const Avatar = ({ avatar, author, date }) => {
  return (
    <div className='flex items-center space-x-2 text-sm text-pwr-textgray'>
      <div className='relative h-8 w-8 overflow-hidden rounded-full border-2 border-pwr-purple'>
        {avatar && <Image src={avatar} width={64} height={64} alt={author} />}
      </div>
      <div>{author}</div>
      <div>{date}</div>
    </div>
  );
};
