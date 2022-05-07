import { faker } from '@faker-js/faker';
import React from 'react';
import Home from '../components/Home';

const Index = ({ headline, articles }) => {
  return <Home headline={headline} articles={articles} />;
};

export async function getStaticProps() {
  const unsplash = await fetch(
    'https://api.unsplash.com/photos/random?client_id=FqvDw3sA6HBgIOOF-F5AQTKsRFr5Rb7BoqjHdHm32rw'
  ).then((res) => res.status === 200 && res.json());

  const headline = {
    title: faker.lorem.sentence(Math.round(Math.random() * 15) + 8),
    image: unsplash?.urls?.regular || null,
    url: unsplash?.links?.html || null,
    width: 1080,
    height: (unsplash?.height * 1080) / unsplash?.width,
    subtitle: faker.lorem.sentence(faker.random.numeric(2)),
    author:
      unsplash?.user?.first_name + ' ' + (unsplash?.user?.last_name || ''),
    date: faker.date.past().toDateString().slice(4, -4),
    avatar: unsplash?.user?.profile_image?.medium || null,
  };

  let articles = [];
  for (let i = 0; i < 5; i++) {
    articles.push({
      id: i,
      title: faker.lorem.sentence(Math.round(Math.random() * 15) + 8),
      subtitle: faker.lorem.sentence(faker.random.numeric(2)),
      avatar: faker.image.avatar(),
      author: faker.name.findName(),
      date: faker.date.past().toDateString().slice(4, -4),
      image: faker.image.image(128, 128),
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
