import { NavLink } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="Footer font-face-gm">
      <div className="FooterFlex">
        <div className="FooterItems ContactInfo">
          <div className="ContactUs">تماس با ما</div>

          <div className="Address1">
            آدرس: تهران،بخش مرکزی، تجریش، فرحزاد، خیابان الوند، بن بست الوند یک,
            پلاک1 ، طبقه دوم
          </div>
          <div className="PostalCode">کدپستی: 1981763387 </div>
          <div className="Address">شماره تماس :</div>
          <div>02122093740</div>
          <div>09122454966</div>
        </div>
        <div className="FooterItems Links">
          <NavLink>لینک های مفید</NavLink>
          {/* <div className="LinksProps">صفحه اصلی</div> */}
          <NavLink className="LinksProps" to="/">
            صفحه اصلی
          </NavLink>
          <NavLink className="LinksProps">آموزش</NavLink>
          <NavLink className="LinksProps">درباره ما</NavLink>
          <NavLink className="LinksProps">تماس با ما</NavLink>
        </div>
        <div className="FooterItems Articles">
          <div className="First">
            <div>آخرین مقالات</div>
            {/* <div className="LinksProps">صفحه اصلی</div> */}
            <NavLink className="LinksProps">آموزش نصب نرم افزار</NavLink>

            <NavLink className="LinksProps">
              خطاهای رایج در اجرای برنامه
            </NavLink>
            <NavLink className="LinksProps">دسترسی به پنل ادمین</NavLink>

            {/* <div className="LinksProps">صفحه اصلی</div>
            <div className="LinksProps">آموزش</div>
            <div className="LinksProps">درباره ما</div>
            <div className="LinksProps">تماس با ما</div> */}
            <div className="Second">محل پروانه</div>
          </div>
        </div>
      </div>
      <h1 className="Copyright">
        کلیه حقوق مادی و معنوی این وب سایت متعلق به شرکت داده پرداز سبز فرداد
        است (© ۱۴۰۲)
      </h1>
    </section>
  );
};

export default Footer;
