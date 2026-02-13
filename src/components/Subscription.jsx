import star from '../assets/star.png';
import piechart from '../assets/paichart.png';

const Subscription = () => {
   return (
      <div>
         <div className="subscription-block py-5 position-relative ">
            <div className="star">
               <img src={star} alt="Star" className="img-fluid" />
            </div>
            <div className="container py-5">
               <div className="row py-5">
                  <div className="col-lg-6 mx-auto position-relative">
                     <div className="pie-chart d-flex justify-content-end">
                        <img
                           src={piechart}
                           alt="Subscription"
                           className="img-fluid"
                        />
                     </div>
                     <h1 className="subscription-title text-center px-5">
                        Lorem Ipsum is simply dummy <br />
                        text of the printing.
                     </h1>
                     <form>
                        <div className="subscription-field mt-5">
                           <div className="row">
                              <div className="col-9">
                                 <input
                                    type="text"
                                    className="form-control shadow-sm"
                                    placeholder="Enter your email"
                                 />
                              </div>
                              <div className="col-3">
                                 <button class="btn btn-theme" type="submit">
                                    SUBSCRIBE
                                 </button>
                              </div>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Subscription;
