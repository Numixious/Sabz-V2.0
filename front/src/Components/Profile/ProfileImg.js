import React from "react";
import Logo from "./Img/LogIn.jpg";
import "./Profile.css";

const PropertiesImage = () => {
  return (
    <div className="SignInPic">
      <img src={Logo} alt="Logo" height={500} width={500} />
    </div>
  );
};

export default PropertiesImage;
