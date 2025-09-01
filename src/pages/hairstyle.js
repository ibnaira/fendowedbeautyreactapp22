import Navbar from "./navbar";
import "../hairstyle.css";
import { Footer } from "../App";
import { Swiper, SwiperSlide } from "swiper/react";
import avatar1 from "../images/avatar1.png";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    img: avatar1,
    name: "Bola",
    description:
      "Love this place! I highly recommend it to anyone looking for a new shop.",
    location: "Ijebu-Ode",
  },
  {
    img: avatar1,
    name: "Ade",
    description: "Awesome haircut. Awesome drinks. Awesome atmosphere.",
    location: "Ijebu-Remo",
  },
  {
    img: avatar1,
    name: "James",
    description:
      "Super friendly and helpful team. The service here is always an A+.",
    location: "Sagamu",
  },
  {
    img: avatar1,
    name: "Abike",
    description: "By far my favorite haircut experience ever.",
    location: "Sabo",
  },
];

export default function Hairstyle() {
  return (
    <div>
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SaloonCarousel />
      <Footer />
    </div>
  );
}

function SectionOne() {
  return (
    <div className="section-1">
      <div className="top-most-img-txt">
        <h2 className="head-txt">Welcome to Fendowed Beauty Cutz</h2>
        <p className="small-txt">
          ...or as we like to call it, the best damn part of your day.
        </p>
        <button>Book Now</button>

        <p className="small-txt">
          *Unless you won the lottery or something. Then we're probably a close
          second.
        </p>
      </div>
    </div>
  );
}

function SectionTwo() {
  return (
    <>
      <div>
        <h2>Do yourself a favor</h2>
        <p>
          Fendowed beauty saloon is the grooming experience every man deserves -
          where traditional barbering and modern spa services meet your favorite
          watering hole. Sit back, relax, get groomed - then enjoy a cocktail,
          coffee, or cold one in our private lounge.
        </p>
        <p>Come here to barb with Us!!!</p>
      </div>
      <div>
        <h2>Come for the grooming. Stay for the booze.</h2>
        <p>
          At Scissors & Scotch, you’ll find friendly, talented people, an
          impressive offering of grooming services and a fully-stocked bar. What
          we like to refer to as: the best damn part of your day.
        </p>
      </div>
      <div>
        <span>Location</span>
        <p>163, Akarigbo,Sabo,Sagamu,Ogunstate</p>
      </div>
      <div>
        <p>Phone Number</p>
      </div>
      <p>
        <p> Monday // 9 to 8</p>
        <p>Tuesday // 9 to 8</p>
        <p> Wednessday // 9 to 8</p>
        <p> Thursday // 9 to 8</p>
        <p> Friday // 9 to 8</p>
        <p> Saturday // 9 to 7</p>
        <p> Saturday //10 to 5</p>
      </p>
    </>
  );
}
function SaloonCarousel() {
  return (
    <div className="slides">
      <div>
        <h2>Our Amiable Customers Review </h2>
        <span>⭐⭐⭐⭐⭐</span>
      </div>
      <div className="slide-box">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={60}
          slidesPerView={1.3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
        >
          {slides.map(({ img, name, description, location }) => (
            <SwiperSlide key={name}>
              <div className="descripton">{description}</div>
              <div className="image-box">
                <img src={img} alt={name} />
                <p>{name}</p>
                <p>{location}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
