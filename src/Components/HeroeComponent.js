import Navbar from "../pages/navbar";
import "./HeroeComponent.css";
import ResponsiveNavbar from "./responsiveNavbar";
export default function HeroeComponent({
  backImg,
  mainText,
  smallText,
  addText,
}) {
  return (
    <div>
      <ResponsiveNavbar />
      <SectionHeader
        backImg={backImg}
        mainText={mainText}
        smallText={smallText}
        addText={addText}
      />
    </div>
  );
}

function SectionHeader({ backImg, mainText, smallText, addText }) {
  return (
    <div style={{ backgroundImage: `url(${backImg})` }} className="main-header">
      {/* <!-- <img src="images/gym-images/classes-top-image.png" alt="" /> --> */}
      <div className="sub-header">
        <h2 class="main-text">{mainText}</h2>
        <p className="small-text">{smallText}</p>
        <p className="small-text">{addText}</p>
        <button className="btn-hover btn-join">Join Now</button>
      </div>
    </div>
  );
}
