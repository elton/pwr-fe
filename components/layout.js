import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className='container mx-auto lg:mt-32'>{children}</main>
      <Footer />
    </>
  );
}
