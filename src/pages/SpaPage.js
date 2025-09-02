import HeroeComponent from "../Components/HeroeComponent";
import ResponsiveNavbar from "../Components/responsiveNavbar";
import "../Spa.css";
import backImg from "../images/woman-pedicure.png";
export default function SpaPage() {
  return (
    <div className="main-spa">
      <HeroeComponent
        backImg={backImg}
        mainText="Welcome to our Amazing Spa"
        smallText="Join us to achieve your fitness goals with our state-of-the-art
          facilities, expert trainers, and a supportive community."
      />
    </div>
  );
}
