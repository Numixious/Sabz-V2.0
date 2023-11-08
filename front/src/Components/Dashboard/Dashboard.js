import React from "react";
import "./Dashboard.css";
import PropertiesImage from "./DashboardImg";
const Dashboard = () => {
  return (
    <section className="Dashboard">
      <div className="DasboardFlex">
        <h1>
          امکان ساخت گزارشات و داشبوردهای مختلف با استفاده از جدیدترین و راحت
          ترین تکنولوژی های روز
        </h1>
        <div className="DashboardDesc">
          <PropertiesImage />
          <div>
            مقایسه بودجه، تخصیص و عملکرد مالی اسناد سرمایه ای: با توجه به طراحی
            مبتنی بر قرارداد و پروژه، امکان مدیریت و کنترل بهتر مبالغ دریافتی و
            پرداختی در پروژه‌های عمرانی و غیرعمرانی فراهم شده است
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
