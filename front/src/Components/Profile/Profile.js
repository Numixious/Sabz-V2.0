import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Layout from "../../Layout/Layout";
import "./Profile.css";
import LogInImg from "./ProfileImg";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post(
        "https://greensystemsbackend.iran.liara.run/Profile",
        {
          email,
          password,
        }
      );
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("ورود به حساب کاربری با موفقیت انجام شد");

        setData({});
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <section className="Profile1">
      <Layout>
        <div className="ProfileFlex">
          <LogInImg />
          <div className="ProfileBorder">
            <div className="">
              <form onSubmit={loginUser} className="FormFlex">
                <label>ورود به حساب کاربری</label>
                <input
                  className="InputForm"
                  type="email"
                  placeholder="ایمیل"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                ></input>
                <input
                  className="InputForm"
                  type="password"
                  placeholder="گذرواژه"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                ></input>
                <button type="submit">ورود</button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
}
export default Profile;
