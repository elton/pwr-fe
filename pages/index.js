import { faker } from '@faker-js/faker';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../components/Home';

const Index = ({ headline, articles }) => {
  return (
    <>
      <Header />
      <main className='container mx-auto lg:mt-32'>
        <Home headline={headline} articles={articles} />
      </main>
      <Footer />
    </>
  );
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  const unsplash = await fetch(
    'https://api.unsplash.com/photos/random?client_id=FqvDw3sA6HBgIOOF-F5AQTKsRFr5Rb7BoqjHdHm32rw'
  ).then((res) => res.status === 200 && res.json());

  // console.log(
  //   'unsplash: url:%s, firstname:%s lastname:%s, alt:%s',
  //   unsplash.urls.regular,
  //   unsplash.user.first_name,
  //   unsplash.user.last_name,
  //   unsplash.description
  // );

  const headline = {
    title: faker.lorem.sentence(Math.round(Math.random() * 15) + 8),
    image: unsplash?.urls?.regular || null,
    url: unsplash?.links?.html || null,
    width: 1080,
    height: (unsplash?.height * 1080) / unsplash?.width,
    subtitle: faker.lorem.sentence(faker.random.numeric(2)),
    author:
      unsplash?.user?.first_name + ' ' + (unsplash?.user?.last_name || ''),
    date: faker.date.past().toDateString().slice(4),
    avatar: unsplash?.user?.profile_image?.medium || null,
  };
  // console.log('headline', headline);

  let articles = [];
  for (let i = 0; i < 5; i++) {
    articles.push({
      id: i,
      title: faker.lorem.sentence(Math.round(Math.random() * 15) + 8),
      subtitle: faker.lorem.sentence(faker.random.numeric(2)),
      avatar: faker.image.avatar(),
      author: faker.name.findName(),
      date: faker.date.past().toDateString().slice(4),
    });
  }
  return {
    props: {
      headline,
      articles,
    }, // will be passed to the page component as props
  };
}

export default Index;
