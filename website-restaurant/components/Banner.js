import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Banner() {
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
      <div>
        <img src="/images/marketing/banner1.png" alt="Banner 1" />
      </div>
      <div>
        <img src="/images/marketing/banner1.png" alt="Banner 2" />
      </div>
      <div>
        <img src="/images/marketing/banner1.png" alt="Banner 3" />
      </div>
      <div>
        <img src="/images/marketing/banner1.png" alt="Banner 4" />
      </div>
      <div>
        <img src="/images/marketing/banner1.png" alt="Banner 5" />
      </div>
    </Carousel>
  );
}

export default Banner;
