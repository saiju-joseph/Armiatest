import React from 'react';

const FeaturesCard = ({ icon, bgColor, title, description }) => {
   return (
      <div className="feature-card">
         <div className="feature-icon" style={{ backgroundColor: bgColor }}>
            <img src={icon} alt={title} />
         </div>
         <div className="feature-content">
            <h4>{title}</h4>
            <p>{description}</p>
         </div>
      </div>
   );
};

export default FeaturesCard;
