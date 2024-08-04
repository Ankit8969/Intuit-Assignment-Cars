import React, {memo} from "react";
import CarCard from "../common/CarCard";
import NoData from "../common/NoData";

const CarListing = ({ cars, setCompareCars, compareCars, showCompare = true }) => {

  if (cars.length === 0) {
    return <NoData />
  }
  return (
    <React.Fragment>
      {cars.map((card, ind) => (
          <CarCard 
            key={ind}
            details={card}
            compareCars={compareCars}
            setCompareCars={setCompareCars}
            showCompare={showCompare}
          />
        ))}
    </React.Fragment>
  );
};

export default memo(CarListing);
