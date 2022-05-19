import { faker } from '@faker-js/faker';
import Head from 'next/head';
import React from 'react';
import { Topics } from '../components/common';
import Articles from '../components/Home/Articles';
import Headline from '../components/Home/Headline';
import Layout, { siteTitle } from '../components/layout';

const Index = ({ headlines, articles, topics }) => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className='flex'>
        <section className='lg:w-9/12'>
          <Headline headlines={headlines} />
          <Articles articles={articles} />
        </section>

        <aside className='hidden space-y-3 border-l border-pwr-lightgray lg:block lg:w-3/12 lg:pl-14'>
          <Topics topics={topics} />
        </aside>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  faker.locale = 'zh_CN';

  const server_url = process.env.NEXT_PUBLIC_PWR_BE_URL;
  const headlines = await fetch(server_url + '/headlines?limit=1').then(
    (res) => res.status === 200 && res.json()
  );

  console.log('headlines: ', headlines.data);

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

  let topics = [];
  for (let i = 0; i < 10; i++) {
    const topic = {
      id: faker.datatype.uuid(),
      name: faker.lorem.word(),
      count: faker.mersenne.rand(1, 100),
    };
    topics.push(topic);
  }
  // console.log('topics: ', topics);
  return {
    props: {
      headlines: headlines.data,
      articles,
      topics,
    }, // will be passed to the page component as props
  };
}

export default Index;
