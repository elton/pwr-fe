import { faker } from '@faker-js/faker';
import Image from 'next/image';
import { HiOutlineCalendar } from 'react-icons/hi';
import { Avatar } from '../components/common';

const Detail = ({ article }) => {
  return (
    <>
      <div className='lg:flex lg:items-center lg:justify-between'>
        <div className='mb-8 space-y-4 lg:mb-0 lg:space-y-8 lg:pr-16'>
          <div className='hidden items-center space-x-2 text-xs text-pwr-darkgreen lg:flex'>
            <HiOutlineCalendar />
            <span>{article.date}</span>
          </div>
          <h1 className='text-3xl text-pwr-darkblack lg:text-6xl'>
            {article.title}
          </h1>
          <div className='text-pwr-textgray'>{article.subtitle}</div>
          <div>
            <Avatar
              avatar={article.avatar}
              author={article.author}
              date={article.date}
            />
          </div>
        </div>
        <div>
          <div className='relative -z-10 h-56 overflow-hidden lg:h-[480px] lg:w-[480px] lg:min-w-[480px]'>
            <Image
              src={article.image}
              priority={true}
              alt=''
              layout='fill'
              objectFit='cover'
              objectPosition='center'
              className=''
            />
          </div>
          <div className='text-xs text-pwr-textgray'>
            Image {article?.description ?? ''} of {article.image_author} via{' '}
            <a
              href={article.url}
              className='underline'
              target='_blank'
              rel='noreferrer'>
              Unsplash
            </a>
          </div>
        </div>
      </div>

      <div className='container mx-auto mt-8 text-pwr-black lg:mt-16 lg:w-3/5'>
        {article.content}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const unsplash = await fetch(
    'https://api.unsplash.com/photos/random?client_id=FqvDw3sA6HBgIOOF-F5AQTKsRFr5Rb7BoqjHdHm32rw'
  ).then((res) => res.status === 200 && res.json());

  const article = {
    id: faker.datatype.uuid(),
    title: faker.lorem.sentence(Math.round(Math.random() * 15) + 8),
    subtitle: faker.lorem.sentence(faker.random.numeric(2)),
    content: faker.lorem.paragraphs(faker.random.numeric(2)),
    image: unsplash?.urls?.regular || null,
    image_author:
      unsplash?.user?.first_name + ' ' + (unsplash?.user?.last_name || ''),
    description: unsplash?.description || null,
    url: unsplash?.links?.html || null,
    date: faker.date.past().toDateString().slice(4),
    avatar: faker.image.avatar(),
    author: faker.name.findName(),
  };

  return {
    props: {
      article,
    }, // will be passed to the page component as props
  };
}

export default Detail;
