// src/components/Popup.js
import React, { useState, memo } from 'react';
import '../styles/Popup.css';

const CarComparison = ({ isOpen, setIsPopUpOpen, compareCars }) => {
  const [showDifferences, setShowDifferences] = useState(false);

  if (!isOpen) return <></>;

  if (!compareCars || compareCars.length !== 2) {
    return (
      <div className="popup-overlay">
        <div className="popup-content popup-content-empty">
          <button className="popup-close" onClick={() => setIsPopUpOpen(false)}>X</button>
          <h2>Compare Cars</h2>
          <div className="compar_car_empty">
            <h2>Please select at-least two cars to see the features difference 😊.</h2>
          </div>
        </div>
      </div>
    );
  }
  const [car1, car2] = compareCars;

  const features = [
    { key: 'brand', label: 'Brand' },
    { key: 'engine', label: 'Engine' },
    { key: 'price', label: 'Price' },
    { key: 'Color', label: 'Color', nested: true },
    { key: 'Seats', label: 'Seats', nested: true },
    { key: 'fuel_efficiency', label: 'Fuel Efficiency', nested: true },
  ];

  const isFeatureSame = (feature) => {
    if (feature.nested) {
      return car1.features[feature.key] === car2.features[feature.key];
    }
    return car1[feature.key] === car2[feature.key];
  };

  const renderTableHeader = () => (
    <tr>
      <th>
        <button 
          className="toggle-diff-button" 
          onClick={() => setShowDifferences(!showDifferences)}
        >
          {showDifferences ? 'Show All' : 'Show Differences Only'}
        </button>
      </th>
      <th>
        <img src={car1.image} alt={car1.name} className="car-image" />
        <p>{car1.name}</p>
      </th>
      <th>
        <img src={car2.image} alt={car2.name} className="car-image" />
        <p>{car2.name}</p>
      </th>
    </tr>
  );

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={() => setIsPopUpOpen(false)}>X</button>
        <h2>Compare Cars</h2>
        <table className="comparison-table">
          <thead>
            {renderTableHeader()}
          </thead>
          <tbody>
            {features.map((feature) => (
              (!showDifferences || !isFeatureSame(feature)) && (
                <tr key={feature.key}>
                  <td>{feature.label}</td>
                  <td>{feature.nested ? car1.features[feature.key] : car1[feature.key]}</td>
                  <td>{feature.nested ? car2.features[feature.key] : car2[feature.key]}</td>
                </tr>
              )
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default memo(CarComparison);
