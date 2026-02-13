import Clients from '../components/Clients';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Subscription from '../components/Subscription';

const Home = () => {
   return (
      <>
         <Hero />
         <Features />
         <Clients />
         <Subscription />
         <Footer />
      </>
   );
};

export default Home;
