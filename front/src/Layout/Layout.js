import "./Layout.css";
// import Navigation from "../Components/Navigation/Navigation";
import ResponsiveAppBar from "../Components/Navigation/ResponsiveAppBar";
const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <ResponsiveAppBar />
      {children}
    </div>
  );
};

export default Layout;
