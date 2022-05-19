import Footer from '../components/Footer';
import Header from '../components/Header';

export const siteTitle = 'PWR - Power Ink 能量墨水';

export default function Layout({ children }) {
  return (
    <>
      <Header title={siteTitle} />
      <main className='container mx-auto px-8 pt-16 lg:mt-32 lg:px-5'>
        {children}
      </main>
      <Footer />
    </>
  );
}
