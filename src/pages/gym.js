import "../gym.css";
import "../gym-media-query.css";
import Navbar from "./navbar";
function GymPage() {
  return (
    <>
      <Navbar />
      <GymMainSection />
      <GymSectionTwo />
      <GymSectionThree />
      <GymSlider />
      <PriceCards />
      <OurFacilities />
    </>
  );
}

function GymMainSection() {
  return (
    <div className="gym-main-section-1">
      {/* <!-- <img src="images/gym-images/classes-top-image.png" alt="" /> --> */}
      <div className="gym-section--1">
        <h2 class="main-text">Transform your life with Fitness</h2>
        <p className="small-text">
          Join us to achieve your fitness goals with our state-of-the-art
          facilities, expert trainers, and a supportive community.
        </p>
        <button className="gym-btn-join-now">Join Now</button>
      </div>
    </div>
  );
}

function GymSectionTwo() {
  return (
    <section className="gym-section--2">
      <div className="gym-part--1">
        <p className="big-text-2">Our Classes</p>
        <a href="classes.html">
          <button className="gym-btn-more-class">View All Classes</button>
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
        <h2>What sets us apart?</h2>
        <p>
          We are a community dedicated to helping you achieve your fitness goals
          in a supportive, welcoming environment.
        </p>
        <div class="gym-features-box">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
            </svg>
            Innovative facilities
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
            </svg>
            Community focus
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
            </svg>
            Expert team
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
            </svg>
            Diverse offerings
          </p>
        </div>

        <button class="gym-btn-get-to-know-us">Get To Know Us</button>
      </div>

      <div class="gym-part---2"></div>
    </section>
  );
}

function GymSlider() {
  return (
    <div class="slider">
      <div class="slide">
        <div class="testimonial">
          <div class="testimonial-txt-box">
            <h5 class="testimonial__header">Best financial decision ever!</h5>
            <blockquote class="testimonial__text">
              My confidence has soared, and I feel stronger every day. Her
              commitment to my success has made all the difference.
            </blockquote>
          </div>
        </div>
        <div class="testimonial-photo">
          <address class="testimonial__author">
            {/* <!-- <img
              src="images/gym-images/gym-img-1.png"
              alt=""
              class="testimonial__photo"
            /> --> */}
            <h6 class="testimonial__name">Aarav Lynn</h6>
            <p class="testimonial__location">San Francisco, USA</p>
          </address>
        </div>
      </div>

      {/* <!-- SLIDE --> */}

      <div class="slide">
        <div class="testimonial">
          <div class="testimonial-txt-box">
            <h5 class="testimonial__header">
              The last step to becoming a complete minimalist
            </h5>
            <blockquote class="testimonial__text">
              I feel stronger and more confident, and I appreciate her
              dedication to helping me achieve my fitness goals.
            </blockquote>
          </div>
        </div>
        <div class="testimonial-photo">
          <address class="testimonial__author">
            <h6 class="testimonial__name">Miyah Miles</h6>
            <p class="testimonial__location">London, UK</p>
          </address>
        </div>
      </div>

      <div class="slide">
        <div class="testimonial">
          <div class="testimonial-txt-box">
            <h5 class="testimonial__header">
              Finally free from old-school banks
            </h5>
            <blockquote class="testimonial__text">
              Thanks to her guidance, I've achieved goals I never thought
              possible. I'm more confident and fit than ever!
            </blockquote>
          </div>
        </div>
        <div className="testimonial-photo">
          <address class="testimonial__author">
            <h6 class="testimonial__name">Francisco Gomes</h6>
            <p class="testimonial__location">Lisbon, Portugal</p>
          </address>
        </div>
      </div>

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
