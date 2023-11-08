import React from "react";
import "./Takhsis.css";
import TakhsisImg from "./TakhsisImg";
const Takhsis = () => {
  return (
    <section className="Takhsis font-face-gm">
      <div className="TakhsisFlex">
        <h1>نمودار همپوشانی تخصیص با تعهدات ایجاد شده</h1>
        <div className="TakhsisDesc">
          <TakhsisImg />
          <div>
            نمودار همپوشانی تخصیص با تعهدات ایجاد شده یک ابزار یا یک مفهوم است
            که در مدیریت پروژه‌ها و برنامه‌ریزی استفاده می‌شود. این نمودار برای
            نمایش ترکیب و ارتباط بین تخصیص منابع و تعهدات ایجاد شده در پروژه ها
            به کار می‌رود. نمودار همپوشانی تخصیص با تعهدات ایجاد شده به صورت
            گرافیکی نشان می‌دهد که منابعی که برای پروژه اختصاص داده شده‌اند، با
            کدام تعهدات مرتبط هستند. این نمودار اطلاعاتی ارزشمند را در اختیار
            مدیران پروژه قرار می‌دهد، که به آن‌ها کمک می‌کند برنامه‌ریزی
            مناسب‌تری انجام دهند و از بهره‌وری منابع بهینه‌تری برخوردار شوند. با
            استفاده از نمودار همپوشانی تخصیص با تعهدات ایجاد شده، مدیران
            می‌توانند بهترین تطابق بین تخصیص منابع و تعهدات پروژه را مشخص کنند،
            از تداخلات ممکن بین تعهدات و منابع جلوگیری کنند و از عدم بهره‌وری
            منابع جلوگیری کنند. همچنین، این نمودار به مدیران کمک می‌کند تا نقاط
            قوت و ضعف در تخصیص منابع و مدیریت تعهدات را شناسایی کنند و بهبودهای
            لازم را اعمال کنند. این اطلاعات باعث می‌شود که انتخاب و اولویت‌بندی
            منابع برای پروژه‌ها به صورت بهینه‌تر انجام شود و اجرای پروژه‌ها به
            طور کلی بهبود یابد
          </div>
        </div>
      </div>
    </section>
  );
};

export default Takhsis;
