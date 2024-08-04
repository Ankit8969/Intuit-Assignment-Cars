// src/components/CarDescription.js
import React, { useState, useEffect } from 'react';
import '../styles/CarDescription.css'; // Create and use your own styles here
import { CAR_LIST, ABOUT_CAR_DETAILS } from '../utils/cars_constants';
import { useSearchParams } from 'react-router-dom';
import CarListing from './CarListing';

function filterRecommendedCar(carBrand){
  const recommendedCars = CAR_LIST.filter((item) => 
    item?.brand?.toLowerCase().includes(carBrand)
  );
  return recommendedCars;
}

function getCarDetails(id) {
  let details = null;
  CAR_LIST.forEach((item) =>{
    if (parseInt(item.id) === parseInt(id)) {
      details = item;
    }
  })
  return details;
}

const CarDescription = () => {
  const [searchParams] = useSearchParams();
  const [carDetails, setCarDetails] = useState({});

  const id = searchParams.get('id');
  const details = getCarDetails(id);
  const brandName = details?.brand?.toLowerCase();
  const recommendedCars = filterRecommendedCar(brandName);

  useEffect(() => {
    setCarDetails(details);
  }, [id,brandName, details]); // adding these many 

  return (
    <div className="car-description">
      <img 
        src={carDetails?.image} 
        alt={carDetails?.name} 
        className="car-description-image" 
      />
      <p className="desc"> {ABOUT_CAR_DETAILS} </p>
      <div className="car-description-content">
        <h1 className="car-description-name">{carDetails?.name}</h1>
        <p className="car-description-brand"><strong>Brand:</strong> {carDetails?.brand}</p>
        <p className="car-description-engine"><strong>Engine:</strong> {carDetails?.engine}</p>
        <p className="car-description-price"><strong>Price:</strong> {carDetails?.price}</p>
        <div className="car-description-features">
          <h3>Features:</h3>
          <p><strong>Color:</strong> {carDetails?.features?.Color}</p>
          <p><strong>Seats:</strong> {carDetails?.features?.Seats}</p>
          <p><strong>Fuel Efficiency:</strong> {carDetails?.features?.fuel_efficiency}</p>
        </div>
      </div>
      <section className="similar_cars_section">
        <h2 className="similar_cars_heading">
          Similar cars
        </h2>
        <div className="individual_cars">
          <CarListing
            cars={recommendedCars}
            showCompare={false}
          />
        </div>
      </section>
    </div>
  );
};

export default CarDescription;




