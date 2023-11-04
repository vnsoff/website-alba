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
  <FontAwesomeIcon icon={faLinkedin} style={{ color: "#ffc800", fontSize: "50px" }} />
);

const FacebookIcon = () => (
  <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffc800", fontSize: "50px" }} />
);

const TelegramIcon = () => (
  <FontAwesomeIcon icon={faTelegram} style={{ color: "#ffc800", fontSize: "50px" }} />
);

const TwitterIcon = () => (
  <FontAwesomeIcon icon={faTwitter} style={{ color: "#ffc800", fontSize: "50px" }} />
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
