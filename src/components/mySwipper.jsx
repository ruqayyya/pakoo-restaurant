import "../assets/scss/components/_swipper.scss";

import interyer from "../assets/images/Adsiz.png";
import interyer1 from "../assets/images/adsiz1.png";
import interyer2 from "../assets/images/adsiz2.png";
import interyer3 from "../assets/images/adsiz3.png";
import interyer4 from "../assets/images/adsiz4.png";
import interyer5 from "../assets/images/adsiz5.png";
import interyer6 from "../assets/images/adsiz6.png";
import interyer7 from "../assets/images/adsiz7.png";
import interyer8 from "../assets/images/adsiz8.png";
import interyer9 from "../assets/images/adsiz9.png";
import interyer10 from "../assets/images/adsiz10.jpg";
import interyer11 from "../assets/images/large.jpg";

const images = [
  interyer,
  interyer1,
  interyer2,
  interyer3,
  interyer4,
  interyer5,
  interyer6,
  interyer7,
  interyer8,
  interyer9,
  interyer10,
  interyer11,
];

const Carousel = () => {
  return (
    <div className="imageBox">
      <div className="carousel">
        <div className="carousel-inner">
          {images.map((img, index) => (
            <div className="carousel-item" key={index}>
              <img src={img} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
      </div>
          <p className="interior">interior</p>
    </div>
  );
};

export default Carousel;
