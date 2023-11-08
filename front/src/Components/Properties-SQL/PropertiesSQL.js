import React from "react";
import { NavLink } from "react-router-dom";
import "./PropertiesSQL.css";
import Image1 from "./PropertiesSQLimg/Image1";
import Image2 from "./PropertiesSQLimg/Image2";
import Image3 from "./PropertiesSQLimg/Image3";
import Image4 from "./PropertiesSQLimg/Image4";
import Image5 from "./PropertiesSQLimg/Image5";
import Image6 from "./PropertiesSQLimg/Image6";

const PropertiesSQL = () => {
  return (
    <section className="SQL font-face-gm">
      <div className="eight">
        <h1>ساخت و مدیریت بانک اطلاعاتی با اس کیو ال سرور 2017 و بالاتر</h1>
      </div>

      <div className="SQLFlex">
        <div className="SQLBoxesFlex">
          <NavLink>
            <div class="... box-content h-32 w-32 border-2 p-6 flex justify-center align-center">
              <h1 className="SQLHeaders">سناریوی تهیه فایل پشتیبان</h1>

              <Image1 />
            </div>
          </NavLink>
        </div>
        <div className="SQLBoxesFlex">
          <NavLink>
            <div class="... box-content h-32 w-32 border-2 p-6 flex justify-center align-center">
              <h1 className="SQLHeaders">تعیین برنامه‌ریزی زمانی بکاپ‌گیری</h1>
              <Image2 />
            </div>
          </NavLink>
        </div>

        <div className="SQLBoxesFlex">
          <NavLink>
            <div class="... box-content h-32 w-32 border-2 p-6 flex justify-center align-center">
              <h1 className="SQLHeaders">تهیه بکاپ‌ها به صورت چندگانه</h1>

              <Image3 />
            </div>
          </NavLink>
        </div>

        <div className="SQLBoxesFlex">
          <NavLink>
            <div class="... box-content h-32 w-32 border-2 p-6 flex justify-center align-center">
              <h1 className="SQLHeaders">ذخیره‌سازی در مکان‌های مختلف</h1>

              <Image4 />
            </div>
          </NavLink>
        </div>

        <div className="SQLBoxesFlex">
          <NavLink>
            <div class="... box-content h-32 w-32 border-2 p-6 flex justify-center align-center">
              <h1 className="SQLHeaders">تست و تأیید بکاپ‌ها</h1>

              <Image5 />
            </div>
          </NavLink>
        </div>
        <div className="SQLBoxesFlex">
          <NavLink>
            <div class="... box-content h-32 w-32 border-2 p-6 flex justify-center align-center">
              <h1 className="SQLHeaders">حفاظت از اطلاعات</h1>

              <Image6 />
            </div>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSQL;
