import React from "react";
import "./CompanyInfo.css";
import Layout from "../../Layout/Layout";
import CompanyInfoImg from "./CompanyInfoImg";
import { Helmet, HelmetProvider } from "react-helmet-async";

function CompanyInfo() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>اطلاعات شرکت داده پرداز سبز فرداد</title>
        <meta
          name="description"
          content="اطلاعات کامل شرکت داده پرداز سبز فرداد"
        />
        <meta
          name="keywords"
          content="حسابداری، سامانه مدیریت مالی، سامانه، مدیریت قراردادها، مدیریت مالی، قرارداد مالی"
        />
      </Helmet>
      <Layout>
        <section className="CompanyInfo">
          <div className="CompanyInfoFlex">
            <div className="CompanyInfoRight">
              <CompanyInfoImg />
            </div>
            <div className="CompanyInfoLeft">
              <div className="InfoText">اطلاعات پایه</div>
              <div className="InfoBox">
                <div className="InfoBoxHeader">اطلاعات ثبتی</div>
                <div className="FirstRowDetails">
                  <div className="DetailContainer MarginLeftDetails">
                    <div>تاریخ تاسیس:</div>
                    <div>1400/04/01</div>
                  </div>
                  <div className="DetailContainer MarginLeftDetails">
                    <div>وضعیت شرکت:</div>
                    <div>فعال</div>
                  </div>
                  <div className="DetailContainer MarginLeftDetails">
                    <div>نوع شرکت:</div>
                    <div>نامشخص</div>
                  </div>
                  <div className="DetailContainer">
                    <div>آخرین آگهی روزنامه رسمی:</div>
                    <div>1400/04/01</div>
                  </div>
                </div>
                <div className="FirstRowDetails">
                  <div className="DetailContainer MarginLeftDetails">
                    <div>شماره ثبت:</div>
                    <div>579723</div>
                  </div>
                  <div className="DetailContainer MarginLeftDetails">
                    <div>کد اقتصادی:</div>
                    <div>نامشخص</div>
                  </div>
                  <div className="DetailContainer MarginLeftDetails">
                    <div>شناسه ملی:</div>
                    <div>14010113061</div>
                  </div>
                  <div className="DetailContainer MarginLeftDetails">
                    <div>آخرین سرمایه ثبتی</div>
                    <div>نامشخص</div>
                  </div>
                </div>
                <div className="FirstRowDetails">
                  <div className="LastRowDetails MarginLeftDetails">
                    <div className="Address">
                      آدرس شرکت: استان تهران، شهرستان شمیرانات، بخش مرکزي، شهر
                      تجریش، فرحزاد، خیابان الوند، بن بست الوند ،1 پلاك ،1 طبقه
                      همكف
                    </div>
                    <div className="DetailContainer">
                      <div>کد پستی:</div>
                      <div>1981763387</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </HelmetProvider>
  );
}

export default CompanyInfo;
