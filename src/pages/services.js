import { Link } from "react-router-dom";

import "../services.css";
import "../services-media-query.css";
import "../back-ground-img.css";
import Navbar from "./navbar";
import { Footer } from "../App";
import "../texts.css";
import serviceImage1 from "../images/man-barbershop-salon-doing-haircut-beard-trim.png";
import serviceImage2 from "../images/beautiful-women-doing-facial-treatment-home.png";
import serviceImage3 from "../images/portrait-beautiful-african-woman-with-towel-head-smiling-resting-spa-salon.png";
import serviceImage4 from "../images/beautiful-women-doing-facial-treatment-home.png";
import serviceImage5 from "../images/woman-training-weightlifting-gym.png";
import serviceImage6 from "../images/woman-cleansing-face.webp";
import serviceImage7 from "../images/handsome-black-man-is-engaged-gym.png";
import serviceImage8 from "../images/man-woman-doing-beauty-treatment-home.png";

function Services() {
  return (
    <>
      <Navbar />
      <ServiceHeader />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </>
  );
}

function ServiceHeader() {
  return (
    <section id="section-one">
      <div className="img-box"></div>
    </section>
  );
}

function SectionTwo() {
  return (
    <section id="service-cards-box">
      <div className="service-cards">
        <div className="service-card service-card--1 zoom-mode">
          <img src={serviceImage1} alt="service photos" />
        </div>
        <div className="card-text-box">
          <p className="card-top-text">Rejuvenation Ritual</p>
          <p className="small-text">
            Exquisite range of spa services designed to pamper you from head to
            toe.
          </p>
          <Link to="/hairstyle">
            <button className="btn-read-more">Read More &rarr;</button>
          </Link>
        </div>
      </div>
      {/* <div className="service-cards">
        <div className="service-card service-card--2 zoom-mode">
          <img src={serviceImage2} alt="service photos" />
        </div>
        <div className="card-text-box">
          <p className="card-top-text">Serene Scalp Renewal</p>
          <p className="small-text">
            Exquisite range of spa services designed to pamper you from head to
            toe.
          </p>

          <button className="btn-read-more">Read More &rarr;</button>
        </div>
      </div> */}
      {/* <div className="service-cards">
        <div className="service-card service-card--3 zoom-mode">
          <img src={serviceImage3} alt="service photos" />
        </div>
        <div className="card-text-box">
          <p className="card-top-text">Himalayan Salt Stone Detox</p>
          <p className="small-text">
            Exquisite range of spa services designed to pamper you from head to
            toe.
          </p>

          <button className="btn-read-more">Read More &rarr;</button>
        </div>
      </div> */}
      {/* <div className="service-cards">
        <div className="service-card service-card--4 zoom-mode">
          <img src={serviceImage4} alt="service photos" />
        </div>
        <div className="card-text-box">
          <p className="card-top-text">Aromatherapy Escape</p>
          <p className="small-text">
            Exquisite range of spa services designed to pamper you from head to
            toe.
          </p>

          <button className="btn-read-more">Read More &rarr;</button>
        </div>
      </div> */}
      <div className="service-cards">
        <div className="service-card service-card--5 zoom-mode">
          <img src={serviceImage5} alt="service photos" />
        </div>
        <div className="card-text-box">
          <p className="card-top-text">Wellness Consultation</p>
          <p className="small-text">
            Exquisite range of spa services designed to pamper you from head to
            toe.
          </p>

          <Link to="/gym">
            <button className="btn-read-more">Read More &rarr;</button>
          </Link>
        </div>
      </div>
      {/* <div className="service-cards">
        <div className="service-card service-card--6 zoom-mode">
          <img src={serviceImage6} alt="service photos" />
        </div>
        <div className="card-text-box">
          <p className="card-top-text">Harmony Reflexology</p>
          <p className="small-text">
            Exquisite range of spa services designed to pamper you from head to
            toe.
          </p>

          <button className="btn-read-more">Read More &rarr;</button>
        </div>
      </div> */}
      {/* <div className="service-cards">
        <div className="service-card service-card--7 zoom-mode">
          <img src={serviceImage7} alt="service photos" />
        </div>
        <div className="card-text-box">
          <p className="card-top-text">Radiant Rose Facial</p>
          <p className="small-text">
            Exquisite range of spa services designed to pamper you from head to
            toe.
          </p>

          <button className="btn-read-more">Read More &rarr;</button>
        </div>
      </div> */}
      {/* <div className="service-cards">
        <div className="service-card service-card--8 zoom-mode">
          <img src={serviceImage8} alt="service photos" />
        </div>
        <div className="card-text-box">
          <p className="card-top-text">Tranquil Bliss Massage</p>
          <p className="small-text">
            Exquisite range of spa services designed to pamper you from head to
            toe.
          </p>

          <button className="btn-read-more">Read More &rarr;</button>
        </div>
      </div> */}
    </section>
  );
}

function SectionThree() {
  <section className="section-2">
    <div className="testimonial-main-box">
      <div className="part-1">
        <p>
          Look What our <br />
          customers say
        </p>
        <button className="btn">Learn More</button>
      </div>
      <div className="part-2">
        <blockquote>
          A slice of paradise in the heart of the city. I've been a member for
          over a year, and it's the best investment I've made. The attention to
          detail and the friendly staff make every visit memorable. The
          therapists are incredibly skilled, and the ambiance is pure serenity.
          Can't wait for my next visit!
        </blockquote>

        <div className="customers-info">
          <div className="customer-img"></div>
          <p>Name</p>
        </div>
      </div>
    </div>

    <div className="appointment-box">
      <h3>
        Book your session today and let our amazing spa be your sanctuary for a
        balanced life.
      </h3>
      <p>
        Unwind with our exquisite range of spa services designed to pamper you
        from head to toe. From soothing massages and rejuvenating facials to
        luxurious body treatments, our skilled therapists are dedicated to
        creating a personalized experience tailored to your unique needs.
      </p>
      <button className="btn-book-appointment">
        Book An Appointment &rarr;
      </button>
    </div>
  </section>;
}

export default Services;
