import "./main-carousel.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "./images/spa-composition-with-body-care-items-light.png";
import img2 from "./images/attractive-african-woman-enjoying-face-massage-spa-salon.png";

const slides = [
  {
    src: img1,
    title: "Nature Beauty",
    description:
      "Nestled in the heart of serene landscapes Fromsoothing massages and rejuvenating facials to luxurious body treatments, our skilled therapists are dedicated to creating a personalized experience tailored to your unique needs.",
  },
  {
    src: img2,
    title: "Mountain Views",
    description:
      "Rediscover your inner peace and radianceFrom soothing massages and rejuvenating facials to luxurious body treatments, our skilled therapists are dedicated to creating a personalized experience tailored to your unique needs",
  },
];
function MainCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
    >
      {slides.map(({ src, title, description }, index) => (
        <SwiperSlide key={index}>
          <div
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: "100% 100%",
            }}
            className="main"
          >
            <div className="carousel-container">
              <div className="slide-content">
                <div className="slide-text">
                  <h2 className="slide-text-title">{title}</h2>
                  <p className="small-slide-text-title">{description}</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MainCarousel;
