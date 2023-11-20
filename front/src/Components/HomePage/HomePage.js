import Layout from "../../Layout/Layout";
import HomeContent from "../HomeContent/HomeContent";
import ProductIntroduction from "../ProductIntoduction/ProductIntroduction";
import Properties from "../Properties/Properties";
import PropertiesSQL from "../Properties-SQL/PropertiesSQL";
import Dashboard from "../Dashboard/Dashboard";
import Takhsis from "../Takhsis/Takhsis";
import Asnaad from "../Asnaad/Asnaad";
import Komite1 from "../Komite/Komite";
import Permission from "../Permission/Permission";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import Certificate from "../Certificate/Certificate";

// import ContactForm from "../ContactUs/ContactForm";
const HomePage = () => {
  return (
    <main className="">
      <Layout>
        <HomeContent />
        <ProductIntroduction />
        <Properties />
        <PropertiesSQL />
        <Dashboard />
        <Takhsis />
        <Asnaad />
        <Komite1 />
        <Permission />
        <Certificate />
        <ContactUs />
        <Footer />
        {/* <ContactForm /> */}
        <ScrollToTop showUnder={160} color="green" width="40px">
          <span>UP</span>
        </ScrollToTop>
      </Layout>
    </main>
  );
};

export default HomePage;
