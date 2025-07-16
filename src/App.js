import "./App.css";
import "./carousel.css";
import "./card.css";
import "./back-ground-img.css";
import "./buttons.css";
import "./home-mediaqueries.css";
import "./texts.css";

import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./pages/services.js";
import Navbar from "./pages/navbar.js";
import Dashboard from "./pages/dashboard.js";
import Booking from "./pages/booking.js";
import Nopage from "./pages/nopage.js";
import { cardDetails } from "./data.js";

import pattern1 from "./images/pattern1.svg";
import pattern2 from "./images/pattern2.svg";
import GymPage from "./pages/gym.js";
import MainCarousel from "./carousel.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainApp />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/booking" element={<Booking />}></Route>
          <Route path="*" element={<Nopage />}></Route>
          <Route path="/gym" element={<GymPage />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <MainApp />; */}
    </>
  );
}

function MainApp() {
  return (
    <div className="App">
      <Navbar />
      <MainCarousel />
      <WhatWeDoSection />
      <CardSection />
      <SectionThree />
      <ExpertSection />
      <Footer />
    </div>
  );
}

// function CarouselBox() {
//   return (
//     <div className="carousel-box">
//       {/* <div className="slide carousel-1">
//       <div className="texts">
//         <span className="big-text">
//           Rediscover your inner <br />
//           peace and radiance
//         </span>
//         <span className="small-text">
//           From soothing massages and rejuvenating facials to luxurious body
//           treatments, our skilled therapists are dedicated to creating a
//           personalized experience tailored to your unique needs.
//         </span>
//       </div>
//     </div> */}

//       <div className="slide carousel-2">
//         <div className="texts">
//           <span className="big-text">
//             Nestled in the heart of <br />
//             serene landscapes <br />
//           </span>
//           <span className="small-text">
//             <span className="clr-white">From</span> soothing massages and
//             rejuvenating facials to luxurious body treatments, our skilled
//             therapists are dedicated to creating a personalized experience
//             tailored to your unique needs.
//           </span>
//         </div>
//       </div>

//       <div className="btn-box">
//         <button className="slider__btn slider__btn--left">&larr;</button>
//         <button className="slider__btn slider__btn--right">&rarr;</button>
//       </div>

//       <button className="btn btn-learn-more">Learn More &rarr;</button>
//     </div>
//   );
// }

function WhatWeDoSection() {
  return (
    // {What we do section}
    <section className="what-we-do-section">
      <div className="box--1">
        <h3 className="top-text">
          <span className="top-text-1">
            Our spa is a sanctuary where <br />
            relaxation meets rejuvenation.
          </span>
          <br />
          <br />
          <span className="box--1-text-1">
            Unwind with our exquisite range of spa services designed to pamper
            you from head to toe. From soothing massages and rejuvenating
            facials to luxurious body treatments, our skilled therapists are
            dedicated to creating a personalized experience tailored to your
            unique needs.
          </span>
        </h3>
      </div>

      {/* { Image Section } */}
      <section className="img-section--1">
        <div className="box--2">
          <div className="box--2-mini"></div>
          <h3>Immerse yourself in the luxury of our spa</h3>
        </div>

        <div className="box--3">
          <div className="box--3-mini"></div>
          <div className="box--3-text-box">
            <h3 className="box--3-text">
              <span>
                Here you can unwind and escape the stresses of daily life.
              </span>
              Unwind with our exquisite range of spa services designed to pamper
              you from head to toe. From soothing massages and rejuvenating
              facials to luxurious body treatments, our skilled therapists are
              dedicated to creating a personalized experience tailored to your
              unique needs.
            </h3>
            <button className="btn btn-learn-more">Learn More &rarr;</button>
          </div>
        </div>
      </section>

      {/* {Our Services Box} */}
      <section className="our-services-box">
        <div className="txt-img-container">
          <div className="materials-img"></div>

          <div className="services-txt-box">
            <p className="title">Our Services</p>

            <h3 className="box--3-text">
              We believe that true beauty comes from within <br />
              Unwind with our exquisite range of spa services designed to pamper
              you from head to toe. From soothing massages and rejuvenating
              facials to luxurious body treatments, our skilled therapists are
              dedicated to creating a personalized experience tailored to your
              unique needs.
              <button className="btn btn-show-details">Show Details</button>
            </h3>
          </div>
        </div>
      </section>
    </section>
  );
}

function CardSection() {
  const numCard = cardDetails.length;

  return (
    <section className="massage-box">
      {<p className="massage-box-text-1">Exquisite range of spa experiences</p>}
      <div className="card-section">
        {numCard > 0 ? (
          <div className="card-sections">
            {cardDetails.map(card => (
              <Card cardObj={card} key={card.name} />
            ))}
          </div>
        ) : (
          <p>Error</p>
        )}
      </div>
    </section>
  );
}

function Card({ cardObj }) {
  return (
    <div className="card">
      <div className="cards">
        <div className="card-front">
          <div className="logo">
            <img src={cardObj.imageName} alt={cardObj.name} />
          </div>
          <h2 className="big-text">{cardObj.name}</h2>
          <p>{cardObj.information}</p>
        </div>
        <div className="card-back">
          <p>
            Only <br />
            <span className="big-text">{cardObj.price}</span>
          </p>
          <button className="btn-book-now">Book Now</button>
        </div>
      </div>
    </div>
  );
}

function SectionThree() {
  return (
    <section className="section-3">
      {/* <img src={"./images/pattern2.svg"} alt="" /> */}
      <img className="pattern1" src={pattern1} alt=" pattern 1" />
      <img className="pattern2" src={pattern2} alt="pattern 2" />

      <div className="section-3-box-1">
        <div className="section-3-img--box">
          <div className="section-3-img image-1"></div>
          <div className="image-2 curved-edges"></div>
        </div>
        <div className="section-3--text-box">
          <h4 className="section-3--text">
            <span className="big-text">Elevate your well-being </span>
            with our membership Unwind with our exquisite range of spa services
            designed to pamper you from head to toe. From soothing massages and
            rejuvenating facials to luxurious body treatments, our skilled
            therapists are dedicated to creating a personalized experience
            tailored to your unique needs.
            <button className="btn btn-learn-more">Learn More</button>
          </h4>
        </div>
      </div>
      <div className="section-3-box-2">
        <p className="figure">
          10 <br />
          <span className="text">Years Of Experience</span>
        </p>

        <p className="figure">
          04 <br />
          <span className="text">Spa Facilities</span>
        </p>

        <p className="figure">
          1000+ <br />
          <span className="text">Happy Clients</span>
        </p>
        <p className="figure">
          50+ <br />
          <span className="text">Wellness Products</span>
        </p>
      </div>

      <div className="section-3-box-3">
        <div className="image-3"></div>

        <div className="section-3-box-3-text">
          <h3 className="section-3--main-text">
            Immerse yourself in luxurious spa Unwind with our exquisite range of
            spa services designed to pamper you from head to toe. From soothing
            massages and rejuvenating facials to luxurious body treatments, our
            skilled therapists are dedicated to creating a personalized
            experience tailored to your unique needs.
          </h3>
          <button className="btn btn-learn-more">Learn More</button>
        </div>
      </div>
    </section>
  );
}
function ExpertSection() {
  return (
    <section className="section-4-box">
      <h2 className="top-text-1">The magic from our skilled experts</h2>
      <div className="images-box">
        <div className="section-4 image--1"></div>
        <div className="section-4 image--2"></div>
        <div className="section-4 image--3"></div>
        <div className="section-4 image--4"></div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-mini-box">
        <div className="box-1">
          <p>
            <span> EndowedBeauty spa </span> <br />
            <br />
            F-endowedbeauty aesthetic, Spa and Gym <br />
            We offer a 360-degree approach to wellness with a touch of luxury.
          </p>
        </div>

        <div className="box box-2">
          <ul>
            <li className="footer-top-txt">Therapies</li>
            <li>
              <a href="">Treatments</a>
            </li>
            <li>
              <a href="">Sauna rooms</a>
            </li>
            <li>
              <a href="">Packages</a>
            </li>
          </ul>
        </div>
        <div className="box box-3">
          <ul>
            <li className="footer-top-txt">About</li>
            <li>
              <a href="">Our Spa</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="box box-4">
          <ul>
            <li className="footer-top-txt">Experience</li>
            <li>
              <a href="">Membership</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Treatments</a>
            </li>
          </ul>
        </div>
      </div>
      {/* {<!-- Social Media Icons -->} */}
      <p className="icons">
        {/* {  <!-- Facebook -->} */}
        <a href="www.facebook.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 64 64"
          >
            <path d="M32,6C17.642,6,6,17.642,6,32c0,13.035,9.603,23.799,22.113,25.679V38.89H21.68v-6.834h6.433v-4.548	c0-7.529,3.668-10.833,9.926-10.833c2.996,0,4.583,0.223,5.332,0.323v5.965h-4.268c-2.656,0-3.584,2.52-3.584,5.358v3.735h7.785	l-1.055,6.834h-6.73v18.843C48.209,56.013,58,45.163,58,32C58,17.642,46.359,6,32,6z"></path>
          </svg>
        </a>

        {/* {<!-- Instagram -->} */}

        <a href="www.instagram.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 50 50"
          >
            <path d="M 16 3 C 8.8545455 3 3 8.8545455 3 16 L 3 34 C 3 41.145455 8.8545455 47 16 47 L 34 47 C 41.145455 47 47 41.145455 47 34 L 47 16 C 47 8.8545455 41.145455 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.054545 5 45 9.9454545 45 16 L 45 34 C 45 40.054545 40.054545 45 34 45 L 16 45 C 9.9454545 45 5 40.054545 5 34 L 5 16 C 5 9.9454545 9.9454545 5 16 5 z M 37 11 C 35.9 11 35 11.9 35 13 C 35 14.1 35.9 15 37 15 C 38.1 15 39 14.1 39 13 C 39 11.9 38.1 11 37 11 z M 25 14 C 18.954545 14 14 18.954545 14 25 C 14 31.045455 18.954545 36 25 36 C 31.045455 36 36 31.045455 36 25 C 36 18.954545 31.045455 14 25 14 z M 25 16 C 29.954545 16 34 20.045455 34 25 C 34 29.954545 29.954545 34 25 34 C 20.045455 34 16 29.954545 16 25 C 16 20.045455 20.045455 16 25 16 z"></path>
          </svg>
        </a>

        {/* { <!-- X Twitter -->} */}
        <a href="x.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 50 50"
          >
            <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
          </svg>
        </a>

        {/* {<!-- Tiktok -->} */}
        <a href="tiktok.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 50 50"
          >
            <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
          </svg>
        </a>
      </p>
    </footer>
  );
}

export default App;
