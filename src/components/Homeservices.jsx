import ServiceCard from './ServiceCard';

import phone from '../assets/mbl-app.png';
import web from '../assets/web.png';
import dev from '../assets/development.png';
import emoji from '../assets/clients/happy-icon.svg';
const Homeservices = () => {
   return (
      <>
         <div className="container py-5">
            <div className="text-center">
               <h1 className="ser-title">
                  Lorem Ipsum is simply dummy text of the printing.{' '}
               </h1>
               <p className="lead ser-subcaption  col-8 mx-auto mt-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
               </p>
            </div>
         </div>
         <div className="container">
            <ServiceCard
               icon={emoji}
               smallTitle="Lorem Ipsum is simply dummy text"
               highlight="Lorem Ipsum"
               title="is simply dummy text of the printing."
               description="KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. "
               image={phone}
            />
            <ServiceCard
               icon={emoji}
               smallTitle="Lorem Ipsum"
               highlight="Lorem Ipsum"
               title="is simply dummy text of the printing."
               description="KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web application builders."
               image={web}
               reverse
            />
            <ServiceCard
               icon={emoji}
               smallTitle="Lorem Ipsum"
               highlight="Lorem Ipsum"
               title="is simply dummy text of the printing."
               description="KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web application builders."
               image={dev}
            />
         </div>
      </>
   );
};

export default Homeservices;
