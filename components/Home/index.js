import { Topics } from '../common';
import Articles from './Articles';
import Headline from './Headline';

const Home = ({ headline, articles, topics }) => {
  return (
    <div className='flex'>
      <section className='lg:w-9/12'>
        <Headline headline={headline} />
        <Articles articles={articles} />
      </section>

      <aside className='hidden space-y-3 border-l border-pwr-lightgray lg:block lg:w-3/12 lg:pt-16 lg:pl-14'>
        <Topics topics={topics} />
      </aside>
    </div>
  );
};

export default Home;
