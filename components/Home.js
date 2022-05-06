import Image from 'next/image';

const Home = ({ headline }) => {
  return (
    <div className='flex last:lg:px-5'>
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
              width={headline.width}
              height={headline.height}
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
          <div className='mb-4 text-sm'>{headline.subtitle}</div>
          <div className='flex items-center space-x-2 text-sm text-pwr-textgray'>
            <div className='relative h-8 w-8 overflow-hidden rounded-full border-2 border-pwr-purple'>
              <Image
                src={headline.avator}
                width={64}
                height={64}
                alt={headline.avator}
              />
            </div>
            <div>{headline.author}</div>
            <div>{headline.date}</div>
          </div>
        </div>
      </div>

      <aside className='w-3/12 border-l border-pwr-lightgray lg:pt-16 lg:pl-16'>
        <div>Most Popular</div>
        <div></div>
      </aside>
    </div>
  );
};

export default Home;
