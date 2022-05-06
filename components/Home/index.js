import Articles from './Articles';
import Headline from './Headline';

const Home = ({ headline, articles }) => {
  return (
    <div className='flex lg:px-5'>
      <section className='w-9/12'>
        <Headline headline={headline} />
        <Articles articles={articles} />
      </section>

      <aside className='w-3/12 border-l border-pwr-lightgray lg:pt-16 lg:pl-16'>
        <div>Most Popular</div>
        <div></div>
      </aside>
    </div>
  );
};

export default Home;
