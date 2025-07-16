import Navbar from "./navbar";
import "../services.css";
import "../booking.css";
import { Footer } from "../App";

function Booking() {
  return (
    <>
      <Navbar />
      <BookingSectionOne />
      <BookingSectionTwo />
      <BookingLogoBox />
      <Footer />
    </>
  );
}

function BookingSectionOne() {
  return (
    <section id="section-one">
      <div className="img-box"></div>
    </section>
  );
}

function BookingSectionTwo() {
  return (
    <section id="section-two">
      <div className="part--1">
        <p className="part--1-big-text">
          Book your session and let our spa be your sanctuary
        </p>
        <p class="part--1-small-text">
          Unwind with our exquisite range of spa services designed to pamper you
          from head to toe. From soothing massages and rejuvenating facials to
          luxurious body treatments, our skilled therapists are dedicated to
          creating a personalized experience tailored to your unique needs.
        </p>
        <p className="contact-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#8B1A10"
          >
            <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
          </svg>
          +1 212 425 8617
        </p>
        <p className="contact-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#8B1A10"
          >
            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
          </svg>
          information@spa.com
        </p>
      </div>

      <div className="part--2">
        <div className="name-input">
          <span>
            <p className="info-title">First Name</p>
            <input placeholder="First Name" type="text" />
          </span>
          <span>
            <p className="info-title">Last Name</p>

            <input placeholder="Last Name" type="text" />
          </span>
        </div>
        <br />
        <hr />
        <div className="contact-input">
          <span>
            <p className="info-title">Email</p>
            <input placeholder="example@gmail.com" type="email" />
          </span>

          <span>
            <p className="info-title">Tel. Number</p>

            <input placeholder="09000000000" type="text" />
          </span>
        </div>
        <br />
        <hr />
        <div className="description-input">
          <input placeholder="Enter Description" type="text" />
        </div>
        <button className="btn-submit">Submit</button>
      </div>
    </section>
  );
}

function BookingLogoBox() {
  <div class="logo-box">
    <div>
      <img src="images/logo-skinfairy.svg" alt="" />
    </div>
    <div>
      <img src="images/HeavenGate-logo.svg" alt="" />
    </div>
    <div>
      <img src="images/mary-logo.svg" alt="" />
    </div>
    <div>
      <img src="images/blossom-logo.svg" alt="" />
    </div>
    <div>
      <img src="images/blur-logo.svg" alt="" />
    </div>
    <div>
      <img src="images/mary-logo.svg" alt="" />
    </div>
  </div>;
}

export default Booking;
