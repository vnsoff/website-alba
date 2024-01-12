//components/Banner.js

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Banner() {
  const images = [
    { src: require('./images/marketing/banner1.jpg'), link: 'https://www.linkedin.com/feed/' },
    { src: require('./images/marketing/banner1.jpg'), link: 'https://www.linkedin.com/feed/' },
    { src: require('./images/marketing/banner1.jpg'), link: 'https://www.linkedin.com/feed/' },
    { src: require('./images/marketing/banner1.jpg'), link: 'https://www.linkedin.com/feed/' },
    { src: require('./images/marketing/banner1.jpg'), link: 'https://www.linkedin.com/feed/' },
  ];

  return (
      <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          transitionTime={500}
          emulateTouch={true}
      >
        {images.map((image, index) => (
            <a key={index} href={image.link} target="_blank" rel="noopener noreferrer">
              <div>
                <img src={image.src} alt={`Banner ${index + 1}`} />
              </div>
            </a>
        ))}
      </Carousel>
  );
}

export default Banner;
