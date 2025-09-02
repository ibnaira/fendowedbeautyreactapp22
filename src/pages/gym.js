import "../gym.css";
import "../gym-media-query.css";
import "../carousel.css";
import Navbar from "./navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import backImg from "../images/gym-images/gym-img-2.png";
import HeroeComponent from "../Components/HeroeComponent";
const slideInfo = [
  {
    testimonialHeader: "Best financial decision ever!",
    testimonialText:
      "My confidence has soared, and I feel stronger every day. Her commitment to my success has made all the difference.",
    name: "Aarav Lynn",
    location: "San Francisco, USA",
  },
  {
    testimonialHeader: "The last step to becoming a complete minimalist",
    testimonialText:
      " I feel stronger and more confident, and I appreciate her dedication to helping me achieve my fitness goals.",
    name: "Miyah Miles",
    location: "London, UK",
  },
  {
    testimonialHeader: " Finally free from old-school banks",
    testimonialText:
      " Thanks to her guidance, I've achieved goals I never thought possible. I'm more confident and fit than ever!",
    name: "Francisco Gomez",
    location: "Lisbon, Portugal",
  },
];

function GymPage() {
  return (
    <>
      <HeroeComponent
        backImg={backImg}
        mainText={"Transform your life with Fitness"}
        smallText={
          "Join us to achieve your fitness goals with our state-of-the-art facilities, expert trainers, and a supportive community."
        }
      />
      <GymSectionTwo />
      <GymSectionThree />
      <GymSlider />
      <PriceCards />
      <OurFacilities />
    </>
  );
}

// function GymMainSection() {
//   return (
//     <div className="gym-main-section-1">
//       <Navbar />
//       {/* <!-- <img src="images/gym-images/classes-top-image.png" alt="" /> --> */}
//       <div className="gym-section--1">
//         <h2 class="main-text">Transform your life with Fitness</h2>
//         <p className="gym-small-text">
//           Join us to achieve your fitness goals with our state-of-the-art
//           facilities, expert trainers, and a supportive community.
//         </p>
//         <button className="btn-hover gym-btn-join-now">Join Now</button>
//       </div>
//     </div>
//   );
// }

function GymSectionTwo() {
  return (
    <section className="gym-section--2">
      <div className="gym-part--1">
        <p className="big-text-2">Our Classes</p>
        <a href="classes.html">
          <button className="btn-hover gym-btn-more-class">
            View All Classes
          </button>
        </a>
      </div>

      <div className="gym-part--2-box">
        <div className="gym-part--2">
          <div className="gym-image-1 gym-part--2-img">
            <p className="icon-text">
              Personal Training
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#fff"
              >
                <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
              </svg>
            </p>
          </div>
          <div className="gym-image-2 gym-part--2-img">
            <p className="icon-text">
              Yoga Training
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#fff"
              >
                <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
              </svg>
            </p>
          </div>
          <div className="gym-image-3 gym-part--2-img">
            <p className="icon-text">
              Group Fitness classes
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#fff"
              >
                <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function GymSectionThree() {
  return (
    <section class="gym-section--3">
      <div class="gym-part---1">
        <h2 className="heading--1">
          <strong>What sets us apart?</strong>
        </h2>
        <p className="heading--2">
          We are a community dedicated to helping you achieve your fitness goals
          in a supportive, welcoming environment.
        </p>
        <div class="gym-features-box">
          <div className="gym-features">
            <p className="mark-sign">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#fff"
              >
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>
            </p>
            <p>Innovative facilities</p>
          </div>
          <div className="gym-features">
            <p className="mark-sign">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#fff"
              >
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>
            </p>
            <p>Community focus</p>
          </div>
          <div className="gym-features">
            <p className="mark-sign">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#fff"
              >
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>
            </p>
            <p>Expert team</p>
          </div>
          <div className="gym-features">
            <p className="mark-sign">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#fff"
              >
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>
            </p>
            <p>Diverse offerings</p>
          </div>
        </div>

        <button class="gym-btn-get-to-know-us btn-hover">Get To Know Us</button>
      </div>

      <div class="gym-part---2"></div>
    </section>
  );
}

function GymSlider() {
  return (
    <div class="slider">
      {/* //Swiper */}

      <Swiper
        modules={[Pagination, Autoplay, Keyboard]}
        spaceBetween={60}
        slidesPerView={1.3}
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }} // 👈 Enable keyboard
        autoplay={{ delay: 3000 }}
        loop
      >
        {slideInfo.map(
          ({ testimonialHeader, testimonialText, name, location }) => (
            <SwiperSlide key={name}>
              <div class="slide">
                <div class="testimonial">
                  <div class="testimonial-txt-box">
                    <h5 class="testimonial__header">{testimonialHeader}</h5>
                    <blockquote class="testimonial__text">
                      {testimonialText}
                    </blockquote>
                  </div>
                </div>
                <div className="testimonial-photo">
                  <address class="testimonial__author">
                    <h6 class="testimonial__name">{name}</h6>
                    <p class="testimonial__location">{location}</p>
                  </address>
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>

      {/* <!-- SLIDE --> */}

      <button class="slider__btn slider__btn--left">&larr;</button>
      <button class="slider__btn slider__btn--right">&rarr;</button>
      <div class="dots"></div>
    </div>
  );
}

function PriceCards() {
  return (
    <div class="pricing-cards">
      <div class="pricing-card">
        <p class="duration-plan">One day pass</p>
        <p class="price">$3</p>
        <p class="pricing-card-text">
          We welcome you to explore all that Gymon provides. Join us and
          experience fitness like never before.
        </p>
        <button class="btn-get-started">Get Started</button>
      </div>
      <div class="pricing-card">
        <p class="duration-plan">One day pass</p>
        <p class="price">$3</p>
        <p class="pricing-card-text">
          We welcome you to explore all that Gymon provides. Join us and
          experience fitness like never before.
        </p>
        <button class="btn-get-started">Get Started</button>
      </div>
      <div class="pricing-card">
        <p class="duration-plan">One day pass</p>
        <p class="price">$3</p>
        <p class="pricing-card-text">
          We welcome you to explore all that Gymon provides. Join us and
          experience fitness like never before.
        </p>
        <button class="btn-get-started">Get Started</button>
      </div>
    </div>
  );
}

function OurFacilities() {
  return (
    <div class="our-facilities">
      <p class="icon-text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
          class="mark-sign"
        >
          <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
        </svg>
        1,500 sq ft
      </p>
      <p class="icon-text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
          class="mark-sign"
        >
          <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
        </svg>
        2 Showers
      </p>
      <p class="icon-text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
          class="mark-sign"
        >
          <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
        </svg>
        30% off for family members
      </p>
      <p class="icon-text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
          class="mark-sign"
        >
          <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
        </svg>
        Complimentary personal training
      </p>
      <br />
      <p class="icon-text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
          class="mark-sign"
        >
          <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
        </svg>
        Full refresh bar
      </p>
      <p class="icon-text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
          class="mark-sign"
        >
          <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
        </svg>
        Lockers
      </p>
      <p class="icon-text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
          class="mark-sign"
        >
          <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
        </svg>
        3 Bathrooms
      </p>
      <p class="icon-text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
          class="mark-sign"
        >
          <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
        </svg>
        Non-slip yoga towels
      </p>
    </div>
  );
}
export default GymPage;
