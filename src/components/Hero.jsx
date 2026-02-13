import heroBanner from '../assets/hero-banner.png';

const Hero = () => {
   return (
      <div className="hero-banner py-5">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6">
                  <div className="herocaption">
                     <h1 className="hero-title">
                        Experienced{' '}
                        <span className="themecolor">mobile and web </span>
                        applications and website builders measuring.
                     </h1>
                     <p className="hero-text py-4">
                        KODEX TECHNOLOGY (PVT) LTD is a team of experienced
                        mobile and web applications and website builders
                        measuring dozens of completed projects. We build and
                        develop mobile applications for several top platforms,
                        including Android & IOS.
                     </p>
                     <div className="hero-button">
                        <button className="btn btn-theme me-3" type="submit">
                           Contact us
                        </button>
                        <button className="btn btn-theme-outline" type="submit">
                           view more
                        </button>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="hero-banne-section">
                     <img
                        src={heroBanner}
                        alt="Hero Banner"
                        className="img-fluid"
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
