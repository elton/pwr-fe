import { faker } from '@faker-js/faker';
import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home';

const Index = ({ headline }) => {
  return (
    <>
      <Header />
      <main className='container mx-auto lg:mt-32'>
        <Home headline={headline} />
      </main>
    </>
  );
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  const res = await fetch(
    'https://api.unsplash.com/photos/random?client_id=FqvDw3sA6HBgIOOF-F5AQTKsRFr5Rb7BoqjHdHm32rw'
  );
  const unsplash = await res.json();
  console.log(
    'unsplash: url:%s, firstname:%s lastname:%s, alt:%s',
    unsplash.urls.regular,
    unsplash.user.first_name,
    unsplash.user.last_name,
    unsplash.description
  );

  const headline = {
    title: faker.lorem.sentence(Math.round(Math.random() * 15) + 8),
    image: unsplash.urls.regular,
    url: unsplash.links.html,
    width: 1080,
    height: (unsplash.height * 1080) / unsplash.width,
    subtitle: faker.lorem.sentence(faker.random.numeric(2)),
    author: unsplash.user.first_name + ' ' + (unsplash.user.last_name || ''),
    date: faker.date.past().toDateString().slice(4),
    avatar: unsplash.user.profile_image.medium,
  };
  console.log('headline', headline);
  return {
    props: {
      headline,
    }, // will be passed to the page component as props
  };
}

export default Index;
