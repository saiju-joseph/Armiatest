import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
   return (
      <div>
         <footer className="footer py-5 mt-5">
            <div className="footer-top-block pb-5">
               <div className="container">
                  <div className="footer-wrapper ">
                     <div className=" footer-column">
                        <div className="footer-logo">
                           <p className="fw-bold f-logo">LOGO</p>
                        </div>
                        <div className="footer-text">
                           <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                           </p>
                        </div>
                     </div>
                     <div className=" footer-column">
                        <h4 className="menu-title">About us</h4>
                        <ul className="list-unstyled">
                           <li>About</li>
                           <li>Portfolio</li>
                           <li>Careers</li>
                           <li>Contact us</li>
                        </ul>
                     </div>
                     <div className=" footer-column">
                        <h4 className="menu-title">Contact Us</h4>
                        <p>
                           Lorem Ipsum is simply dummy text of the printing and
                           typesetting industry.{' '}
                        </p>
                        <p>+908 89097 890</p>
                     </div>
                     <div className=" footer-column d-flex align-items-end">
                        <div className="social-icons d-flex ">
                           <span className="shadow-sm">
                              <FaFacebook />
                           </span>
                           <span className="shadow-sm">
                              <FaInstagram />
                           </span>
                           <span className="shadow-sm">
                              <FaTwitter />
                           </span>
                           <span className="shadow-sm">
                              <FaLinkedin />
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </div>
   );
};

export default Footer;
