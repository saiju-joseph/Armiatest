import Clients from '../components/Clients';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Homeservices from '../components/Homeservices';
import Subscription from '../components/Subscription';

const Home = () => {
   return (
      <>
         <Hero />
         <Features />
         <Homeservices />
         <Clients />
         <Subscription />
         <Footer />
      </>
   );
};

export default Home;
