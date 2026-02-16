const ServiceCard = ({
   icon,
   smallTitle,
   highlight,
   title,
   description,
   image,
   reverse = false
}) => {
   return (
      <div className={`ser-card-block pb-5 ${reverse ? 'reverse' : ''}`}>
         <div className="desc-block gridtext">
            <div className="ser-card-text">
               <div className="card-badge">
                  <img src={icon} alt="" />
               </div>
               <div className="badge-desc">
                  <p className="mb-0">Lorem Ipsum is simply dummy text</p>
                  <small>{smallTitle}</small>
               </div>
            </div>
            <div className="py-5">
               <h2>
                  <span>{highlight}</span> {title}
               </h2>
               <p className="desc pt-5">{description}</p>
            </div>
         </div>
         <div className="ser-card-image gridimage">
            <img src={image} alt="" />
         </div>
      </div>
   );
};

export default ServiceCard;
