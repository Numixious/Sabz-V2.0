import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Layout from "../../Layout/Layout";
import "./Register.css";
import RegisterImg from "./RegisterImg";
import rtlPlugin from "stylis-plugin-rtl";

import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { useState } from "react";
import axios from "axios";
import toast, { Toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await axios.post(
        "https://greensystemsbackend.iran.liara.run/Register",
        {
          name,
          email,
          password,
        }
      );
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("ساخت حساب کاربری با موفقیت انجام شد");
        navigate("/Profile");
      }
    } catch (error) {
      console.log(error);
    }

    console.log({
      name: data.name,
      email: data.email,
      password: data.password,
    });
  };

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <section>
      <Layout>
        <div className="ProfileFlex">
          <RegisterImg />
          <div className="ProfileBorder">
            <form onSubmit={handleSubmit} className="RegisterFormFlex">
              <label>ایجاد حساب کاربری</label>
              <input
                className="RegisterInputForm"
                type="name"
                placeholder="نام کاربری"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              ></input>
              <input
                className="RegisterInputForm"
                type="email"
                placeholder="ایمیل"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              ></input>
              <input
                className="RegisterInputForm"
                type="password"
                placeholder="گذرواژه"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              ></input>
              <button type="submit">ثبت نام</button>
            </form>
          </div>
        </div>
      </Layout>
    </section>
  );
}

export default Register;
