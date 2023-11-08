import React from "react";
import "./Permission.css";
import PermissionImage from "./PermissionImg";
// import { ReactComponent as ReactLogo } from "./Img/check-solid.svg";
import SVG from "./SVG";
const Permission = () => {
  return (
    <section className="Permission">
      <div className="PermissionFlex">
        <h1>تعیین سطوع دسترسی به کاربران</h1>
        <div className="PermissionDesc">
          تعیین سطوح دسترسی به کاربران در یک سامانه، از اهمیت بسیاری برخوردار
          است و به عنوان یک عنصر بنیادی از امنیت و مدیریت کسب‌وکارها محسوب
          می‌شود. تعیین سطوح دسترسی به معنای بهبود کنترل دسترسی افراد به منابع و
          اطلاعات موجود در سامانه است، به گونه‌ای که هر کاربر فقط به آن بخش‌ها و
          اطلاعاتی دسترسی داشته باشد که برای انجام وظایف مرتبط با حوزه فعالیتش
          لازم است. تعیین سطوح دسترسی به کاربران از جنبه‌های امنیتی، اجتناب از
          دسترسی غیرمجاز به اطلاعات حساس را تضمین می‌کند و از سوءاستفاده‌های
          ناخواسته جلوگیری می‌کند. همچنین، از دیدگاه کاربران، اطمینان بهبود
          یافته درباره حفظ حریم خصوصی و امانت داده‌ها برقرار می‌شود. در سامانه
          سبز تعیین دسترسی کاربران در چندین سطح قابل اجرا می باشد
        </div>
        <div className="PermissionDesc2">
          <PermissionImage />
          <div>
            <ul className="ListOfItems">
              <li>
                <SVG />
                <div>فرم ورود اطلاعات و تغذیه اسناد</div>
              </li>
              <li>
                <SVG />
                <div>آیتم های یک فرم ورود اطلاعات</div>
              </li>
              <li>
                <SVG />
                <div>ایستگاه کاری</div>
              </li>
              <li>
                <SVG />
                <div>قرارداد</div>
              </li>
              <li>
                <SVG />
                <div>زیر پروژه</div>
              </li>
              <li>
                <SVG />
                <div>کد های حقوق و دستمزد</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Permission;
