
import React, { useState, useEffect } from 'react';
import { CAR_LIST } from '../utils/cars_constants';
import COMPARE_ICON from '../utils/compare-icon.png'
import CarListing from './CarListing';
import Popup from '../common/Popup';

// Pure Function
function filteredCarsList(text) {
  const filteredArray = CAR_LIST.filter((item) => 
    item.name.toLowerCase().includes(text) ||
    item.brand.toLowerCase().includes(text) ||
    item.features.Color.toLowerCase().includes(text)
  );
  return filteredArray;
}

const CarComparison = () => {
    const [searchText, setSearchText] = useState('');
    const [carList, setCarList] = useState(CAR_LIST);
    const [compareCars, setCompareCars] = useState([]);
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    useEffect(() => {
      if (searchText.trim().length === 0) {
        setCarList(CAR_LIST);
        return;
      }
      const filteredArray = filteredCarsList(searchText.toLowerCase());
      setCarList([...filteredArray]);
    }, [searchText]);

    return (
        <React.Fragment>
          <section className="cars-section">
            <div className="search_bar">
              <input
                type="text" 
                name="car_search" 
                id="car_search_input_box" 
                aria-label="Search for cars"
                placeholder='Search your cars' 
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
            <div className="individual_cars">
              <CarListing
                cars={carList}
                setCompareCars={setCompareCars}
                compareCars={compareCars}
              />
            </div>
          </section>
          <Popup
            isOpen={isPopUpOpen} 
            setIsPopUpOpen={setIsPopUpOpen} 
            compareCars={compareCars} 
          />
          <div className="compare_icon" onClick={()=>setIsPopUpOpen(true)}>
            <img
              src={COMPARE_ICON} 
              aria-label="PopUp icon"
            />
          </div>
        </React.Fragment>
    );
};

export default CarComparison;
