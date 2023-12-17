import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import "./ProfileLoggedIn.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ProfileImg from "./ProfileLoggedInImg";
import { Link } from "react-router-dom";
const ProfileLoggedIn = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  const handleImageUpload = (event) => {
    setProfilePic(URL.createObjectURL(event.target.files[0]));
  };

  const handleSave = () => {
    // Save the changes here, e.g., send them to a server
    console.log(firstName, lastName, profilePic);
  };
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Layout>
      <section className="Container">
        <div className="SecondRow">
          <ProfileImg />
          <div className="ProfileLoggedIn">
            <div className="ProfileLoggedInFlex">
              <div className="ProfileLoggedInRight">
                <input
                  placeholder="نام و نام خانوادگی"
                  className="Inputs"
                ></input>

                <div className="Age InputsTitle BirthDate">تاریخ تولد</div>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="Age Inputs"
                  placeholderText="تاریخ تولد"
                />

                <button className="SubmitButton Age Inputs">ثبت تغییرات</button>
              </div>
            </div>
            <div className="Items">
              <h1>داشبورد</h1>
              <div className="ItemsMenu">
                <Link to="/Profile">پروفایل</Link>
                <Link to="/Training">آموزش</Link>
                <Link to="/">خروج</Link>
              </div>
            </div>
          </div>

          {/* <h1>اطلاعات کاربری</h1> */}
        </div>
      </section>
    </Layout>
  );
};

export default ProfileLoggedIn;
