import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import Image from 'next/image';

function Banner() {
  const images = [
    { src: '/images/marketing/banner1.png', link: 'https://www.linkedin.com/feed/' },
    { src: '/images/marketing/banner1.png', link: 'https://www.linkedin.com/feed/' },
    { src: '/images/marketing/banner1.png', link: 'https://www.linkedin.com/feed/' },
    { src: '/images/marketing/banner1.png', link: 'https://www.linkedin.com/feed/' },
    { src: '/images/marketing/banner1.png', link: 'https://www.linkedin.com/feed/' },
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
                <img src={image.src} alt={`Banner ${index + 1}`} width={1920} height={1080} />
              </div>
            </a>
        ))}
      </Carousel>
  );
}

export default Banner;
