import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        اطلاعات بیشتر
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>تحت وب بودن براساس تکنولوژی Asp.net</h2>
            <p>
              دسترسی آسان و جهانی: یکی از ویژگی‌های متمایز نرم‌افزارهای تحت وب،
              قابلیت دسترسی آسان و بهره‌مندی از آن‌ها به‌صورت جهانی از طریق
              اینترنت یا اینترانت داخلی سازمان است. کاربران می‌توانند بدون نیاز
              به نصب نرم‌افزارها در دستگاه خود، از هر نقطه جغرافیایی به آن‌ها
              دسترسی یابند، که باعث افزایش تسهیل و انعطاف‌پذیری در استفاده از
              نرم‌افزار می‌گردد
            </p>
            <p>
              به‌روزرسانی مرکزی و خودکار: نرم‌افزارهای تحت وب، توانمندی
              به‌روزرسانی مرکزی دارند، به‌گونه‌ای که به‌روزرسانی‌ها و اصلاحات
              نرم‌افزاری به صورت خودکار و بدون دخل و تصرف کاربران، بر روی
              سرورهای مرکزی اعمال می‌شوند. این امر منجر به حفظ امنیت و بهره‌وری
              بهتر از طریق استفاده از آخرین نسخه‌ها می‌گردد
            </p>
            <p>
              همگامی با دستگاه‌های مختلف: نرم‌افزارهای تحت وب به خوبی با اصول
              طراحی ریسپانسیو سازگاری دارند و به طور خودکار تطبیق بهتری با
              اندازه‌ها و قابلیت‌های مختلف دستگاه‌ها ارائه می‌کنند. این ویژگی به
              کاربران اجازه می‌دهد تا بدون دغدغه از نقص و عدم تطابق ظاهری
              نرم‌افزار با دستگاه مورد استفاده خود استفاده کنند.
            </p>
            <p>
              بهره‌وری مالی: بدون شک، انتخاب نرم‌افزارهای تحت وب در برخی موارد
              منجر به بهره‌وری مالی بالاتری می‌گردد. با استفاده از مدل‌های
              اشتراکی و عدم نیاز به خرید و نصب تعداد زیادی لایسنس، هزینه‌های
              اجرای و استفاده از نرم‌افزار تا حد قابل ملاحظه‌ای کاهش می‌یابد.
            </p>
            <p>
              همکاری و اشتراک گذاری آسان: با توجه به ماهیت تحت وب نرم‌افزارها،
              کاربران می‌توانند به راحتی اطلاعات و داده‌ها را با همکاران خود به
              اشتراک بگذارند و به صورت همزمان در پروژه‌ها همکاری کنند
            </p>
            <p>
              نگهداری و پشتیبانی: نگهداری نرم‌افزارهای تحت وب به مراتب آسان‌تر
              از نگهداری نرم‌افزارهای دسکتاپی است. همچنین، پشتیبانی توسط تیم‌های
              فنی و مهندسی آنلاین انجام می‌شود که می‌توانند به سرعت به مشکلات
              کاربران پاسخ دهند
            </p>

            <button className="close-modal" onClick={toggleModal}>
              بستن
            </button>
          </div>
        </div>
      )}
    </>
  );
}
