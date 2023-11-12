import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import ProductIntroduction from "./Components/ProductIntoduction/ProductIntroduction";
import Training from "./Components/Training/Training";
import Register from "./Components/Register/Register";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "./context/userContext";
import Dashboard from "./Components/Dashboard-Profile/Dashboard";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App font-face-gm">
      <BrowserRouter>
        <Toaster position="bottom-right" toastOptions={{ duration: 5000 }} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Training" element={<Training />} />
          <Route path="ProductIntroduction" element={<ProductIntroduction />} />
          <Route path="Register" element={<Register />} />
          <Route path="Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
