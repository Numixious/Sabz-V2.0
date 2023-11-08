// import logo from "../Navigation/img/logonomy-1625234293440.png";
// import Arrow from "./img/arrow-down-solid.svg";
import "./HomeContent.css";
import { NavLink } from "react-router-dom";
import HomeContentImg from "./HomeContentImg";

const HomeContent = () => {
  return (
    <section className="HomeContent font-face-gm">
      <div className="HomeContentFlex">
        {/* <div className="Border11"></div>
        <div className="Rectangle7">1</div> */}
        <div className="HomeContentLogo">
          <HomeContentImg />
        </div>
        <div className="HomeContentText">
          <h1>سامانه یکپارچه مالی و قراردادی</h1>
          <h1>سبز</h1>
          <NavLink to="Profile" className="ProfileHomeContent">
            ورود به حساب کاربری
          </NavLink>
        </div>
      </div>
      {/* <div className="ArrowToIntroText">
        <NavLink className="ProductIntroductionBtn" to="ProductIntroduction">
          <img src={Arrow} alt="Arrow" className="ArrowDown" />
          <div>معرفی محصول</div>
        </NavLink>
      </div> */}
    </section>
  );
};

export default HomeContent;
