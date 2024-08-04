// src/components/CarSuggestionList.js
import React from 'react';

const CarSuggestionList = ({ cars, onSelectCar, selectedCars }) => {
    return (
        <div>
            <h3>Suggested Cars</h3>
            <div className="car-suggestion-list">
                {cars.map(car => (
                    <div 
                        key={car.id} 
                        className={`car-item ${selectedCars.some(selected => selected.id === car.id) ? 'selected' : ''}`}
                        onClick={() => onSelectCar(car)}
                    >
                        <img src={car.image} alt={car.name} />
                        <p>{car.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarSuggestionList;
