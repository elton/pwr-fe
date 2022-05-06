import Headline from './Headline';

const Home = ({ headline }) => {
  return (
    <div className='flex lg:px-5'>
      <Headline headline={headline} />
      <aside className='w-3/12 border-l border-pwr-lightgray lg:pt-16 lg:pl-16'>
        <div>Most Popular</div>
        <div></div>
      </aside>
    </div>
  );
};

export default Home;
