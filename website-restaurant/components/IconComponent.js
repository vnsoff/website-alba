import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLinkedin, 
  faFacebook, 
  faTelegram, 
  faTwitter 
} from '@fortawesome/free-brands-svg-icons';import { 
  faMotorcycle, 
  faCar, 
  faUtensils, 
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const DeliveryIcon = () => (
  <FontAwesomeIcon icon={faMotorcycle} style={{ color: "#ffc800", fontSize: "100px" }} />
);

const DriveThruIcon = () => (
  <FontAwesomeIcon icon={faCar} style={{ color: "#ffc800", fontSize: "100px" }} />
);

const ReservationIcon = () => (
  <FontAwesomeIcon icon={faUtensils} style={{ color: "#ffc800", fontSize: "100px" }} />
);

const LinkedInIcon = () => (
  <FontAwesomeIcon icon={faLinkedin} style={{ color: "text-titleColor", fontSize: "25px" }} />
);

const FacebookIcon = () => (
  <FontAwesomeIcon icon={faFacebook} style={{ color: "text-titleColor", fontSize: "25px" }} />
);

const TelegramIcon = () => (
  <FontAwesomeIcon icon={faTelegram} style={{ color: "text-titleColor", fontSize: "25px" }} />
);

const TwitterIcon = () => (
  <FontAwesomeIcon icon={faTwitter} style={{ color: "text-titleColor", fontSize: "25px" }} />
);

export {
  DeliveryIcon,
  DriveThruIcon,
  ReservationIcon,
  LinkedInIcon,
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
};
