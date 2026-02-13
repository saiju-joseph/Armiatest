import beneoshop from '../assets/clients/beneoshop.png';
import caspio from '../assets/clients/caspio.png';
import hypergrid from '../assets/clients/HyperGrid.png';
import leotrippi from '../assets/clients/leotrippi.png';

const Clients = () => {
   const logos = [
      { img: beneoshop, alt: 'Beneoshop' },
      { img: caspio, alt: 'Caspio' },
      { img: hypergrid, alt: 'Hypergrid' },
      { img: leotrippi, alt: 'Leotrippi' }
   ];
   return (
      <div className="container">
         <div className="text-center py-5">
            <h4 className="title-clients">You will be in good Company</h4>
            <div className="clents-container">
               {logos.map((logo, index) => (
                  <div className="client-logo" key={index}>
                     <img src={logo.img} alt="{logo.alt}" />
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Clients;
