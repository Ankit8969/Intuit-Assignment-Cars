// src/components/CarCard.js
import React from 'react';
import '../styles/CarCard.css'; // Assuming you will add some styles for the card
import { useNavigate } from 'react-router-dom';
import { REMOVE_TO_COMPARE, SELECT_TO_COMPARE } from '../utils/cars_constants';

function isUserSelected(details, compareCars) {
  let isSelected = false;
  compareCars?.forEach((car) => {
    if (parseInt(car?.id) === parseInt(details?.id))
      isSelected = true;
  })
  return isSelected;
}

const CarCard = ({ details, setCompareCars, compareCars, showCompare }) => {
  const navigate = useNavigate(); // navigation hook
  const isSelected = isUserSelected(details, compareCars);

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
  }

  const handleRemoveCompare = (e, detail) => {
    e.stopPropagation();
    const filterSelectedCar = compareCars.filter((car) => parseInt(car?.id) !== parseInt(detail?.id));
    setCompareCars(filterSelectedCar);
  }

  return (
      <div className="car-card" onClick={()=>handleRedirect(details?.id)}>
          <img 
            className="car-card-image" 
            loading="lazy" 
            aria-label={details?.name} 
            src={details?.image} 
            alt={details.name} 
          />
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
                      !isSelected ? (
                        <button 
                          className="compare_button" 
                          onClick={(event) => handleAddCompare(event, details)}
                        >
                          {SELECT_TO_COMPARE}
                        </button>
                      ):(
                        <button 
                          className="compare_button compare_button_remove" 
                          onClick={(event)=>handleRemoveCompare(event, details)}
                        >
                          {REMOVE_TO_COMPARE}
                        </button>
                      )
                    }
                  </div>)}
          </div>
      </div>
  );
};

export default CarCard;
