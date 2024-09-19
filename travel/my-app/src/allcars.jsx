
import React from 'react';
import OneCar from './onecar';

function AllCars({ details }) {
  return (
    <>
      {details.map((car, index) => (
        <OneCar key={index} details={car} />
      ))}
    </>
  );
}

export default AllCars;
