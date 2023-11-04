import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle, faCar, faUtensils } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const DeliveryIcon = () => (
    <FontAwesomeIcon icon={faMotorcycle}style={{color: "#ffc800", fontSize: "100px" }} />
  );
  
  const DriveThruIcon = () => (
    <FontAwesomeIcon icon={faCar} style={{color: "#ffc800", fontSize: "100px" }} />
  );
  
  const ReservationIcon = () => (
    <FontAwesomeIcon icon={faUtensils} style={{color: "#ffc800", fontSize: "100px" }} />
  );

  export { DeliveryIcon, DriveThruIcon,ReservationIcon };
  