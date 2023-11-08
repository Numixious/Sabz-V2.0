import * as React from "react";
import "./ContactUs.css";
import ContactusImage from "./ContactUsImg";
// import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";
// import { Fragment } from "react";
// import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import DropDown from "./DropDown";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

const ContactUs = () => {
  return (
    <section className="ContactUs">
      <h1>تماس با ما</h1>
      <div className="ContactUsFlex">
        <div className="ContactUsRight">
          <input
            placeholder="نام و نام خانوادکی"
            className="Name"
            type="name"
          ></input>
          <input placeholder="آدرس ایمیل" className="Name" type="email"></input>
          <input placeholder="آدرس دپارتمان" className="Name"></input>
          <input placeholder="متن شما" className="Name ContactDesc"></input>
          <button className="BtnContactUs">ارسال</button>
          {/* <DropDown /> */}
        </div>

        <div className="ContactUsLeft">
          <ContactusImage />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
