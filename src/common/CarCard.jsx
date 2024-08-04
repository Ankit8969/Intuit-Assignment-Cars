// src/components/CarCard.js
import React, { useEffect } from 'react';
import '../styles/CarCard.css'; // Assuming you will add some styles for the card
import { useNavigate } from 'react-router-dom';

const CarCard = ({ details, setCompareCars, compareCars, showCompare }) => {
  const navigate = useNavigate(); // navigation hook
  let isPresent = false;

  compareCars?.forEach((car) => {
    if (car?.id == details?.id)
        isPresent = true;
  })

  const handleRedirect = (id) => {
    navigate(`/description?id=${id}`); // Perform navigation
    return ;
  } 

  const handleAddCompare = (e, detail) => {
    e.stopPropagation();
    if (compareCars.length > 1) {
      alert("You can't compare more than two cars at once.")
      return ;
    }
    setCompareCars([...compareCars, detail]);
    // You can now use the id parameter as needed
  }

  const handleRemoveCompare = (e, detail) => {
    e.stopPropagation();
    const filterSelectedCar = compareCars.filter((car) => car?.id != detail?.id);
    setCompareCars(filterSelectedCar);
  }

  return (
      <div className="car-card" onClick={()=>handleRedirect(details?.id)}>
          <img loading="lazy" src={details?.image} alt={details.name} className="car-card-image" />
          <div className="car-card-content">
              <h3 className="car-card-name">{details?.name}</h3>
              <div className="card_details">
                <p className="car-card-brand">{details?.brand}</p>
                <p className="car-card-engine">{details?.engine}</p>
                <p className="car-card-price">{details?.price}</p>
                <p className="car-card-color">{details?.features?.Color}</p>
              </div>
              {showCompare && (
                  <div className="buttons">
                    {
                      !isPresent ? (
                        <button 
                          className="compare_button" 
                          onClick={(event) => handleAddCompare(event, details)}
                        >
                          Select to compare
                        </button>
                      ):(
                        <button 
                          className="compare_button compare_button_remove" 
                          onClick={(event)=>handleRemoveCompare(event, details)}
                        >
                          Remove to compare
                        </button>
                      )
                    }
                  </div>)}
          </div>
      </div>
  );
};

export default CarCard;
