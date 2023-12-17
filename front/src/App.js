import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import ProductIntroduction from "./Components/ProductIntoduction/ProductIntroduction";
import Training from "./Components/Training/Training";
import Register from "./Components/Register/Register";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import Dashboard from "./Components/Dashboard-Profile/Dashboard";
import CompanyInfo from "./Components/CompanyInfo/CompanyInfo";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ProfileLoggedIn from "./Components/ProfileLoggedIn/ProfileLoggedIn";

axios.defaults.baseURL = "https://greensystemsbackend.iran.liara.run:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <HelmetProvider>
      <div className="App font-face-gm">
        <Helmet>
          <title>سامانه یکپارچه مالی و قراردادی داده پرداز سبز فرداد</title>
          <meta
            name="description"
            content="سامانه یکپارچه مالی و قراردادی سبز یک داشبورد مدیریتی است که اطلاعات تخصیص و بودجه، منابع و مصارف و بطور کلی گزارشات مورد نیاز مدیر محترم را ارائه می‌دهد."
          />
          <meta
            name="keywords"
            content="حسابداری، سامانه مدیریت مالی، سامانه، مدیریت قراردادها، مدیریت مالی، قرارداد مالی"
          />
        </Helmet>

        <BrowserRouter>
          <Toaster position="bottom-right" toastOptions={{ duration: 5000 }} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="Training" element={<Training />} />
            <Route
              path="ProductIntroduction"
              element={<ProductIntroduction />}
            />
            <Route path="Register" element={<Register />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="CompanyInfo" element={<CompanyInfo />} />
            <Route path="ProfileLoggedIn" element={<ProfileLoggedIn />} />
          </Routes>
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;
