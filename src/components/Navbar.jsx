import { Link } from 'react-router-dom';

const Navbar = () => {
   return (
      <>
         <nav className="navbar navbar-expand-lg navbar-light py-3">
            <div className="container-fluid px-5">
               <Link
                  to="/"
                  className="navbar-brand logo themecolor fw-bold text-uppercase"
               >
                  logo
               </Link>
               <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
               >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <Link
                           to="/"
                           className="nav-link active"
                           aria-current="page"
                        >
                           Home
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to="/about" className="nav-link">
                           About us
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to="/services" className="nav-link">
                           Services
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to="/blog" className="nav-link">
                           Blog
                        </Link>
                     </li>
                  </ul>
                  <form className="d-flex ps-lg-5">
                     <Link
                        className="btn btn-theme"
                        type="submit"
                        to="/contact"
                     >
                        Contact us
                     </Link>
                  </form>
               </div>
            </div>
         </nav>
      </>
   );
};

export default Navbar;
