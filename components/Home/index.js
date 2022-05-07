import Articles from './Articles';
import Headline from './Headline';

const Home = ({ headline, articles }) => {
  return (
    <div className='flex px-5'>
      <section className='lg:w-9/12'>
        <Headline headline={headline} />
        <Articles articles={articles} />
      </section>

      <aside className='hidden border-l border-pwr-lightgray lg:block lg:w-3/12 lg:pt-16 lg:pl-16'>
        <div>Most Popular</div>
        <div></div>
      </aside>
    </div>
  );
};

export default Home;
