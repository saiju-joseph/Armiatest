import FeaturesCard from './FeaturesCard';
import mblIcon from '../assets/icon-mbl.svg';
import seoIcon from '../assets/icon-seo.svg';
import vrIcon from '../assets/icon-vr.svg';
import webIcon from '../assets/icon-web.svg';

const Features = () => {
   const featuresData = [
      {
         icon: webIcon,
         bgColor: '#EFEAFF',
         title: 'Web Application',
         description: 'Lorem Ipsum is simply'
      },
      {
         icon: seoIcon,
         bgColor: '#ECFFDA',
         title: 'SEO',
         description: 'Lorem Ipsum is simply'
      },
      {
         icon: vrIcon,
         bgColor: '#DAE6FF',
         title: 'AR/VR Solutions',
         description: 'Lorem Ipsum is simply'
      },
      {
         icon: mblIcon,
         bgColor: '#FFE5DA',
         title: 'Mobile Applications',
         description: 'Lorem Ipsum is simply'
      }
   ];
   return (
      <div className="section-features">
         <div className="features-wrapper container py-5">
            {featuresData.map((item, index) => (
               <FeaturesCard key={index} {...item} />
            ))}
         </div>
      </div>
   );
};

export default Features;
