import React from "react";
import "./Certificate.css";
import CertificateImg from "./CertificateImg";
import CertificateImg2 from "./CertificateImg2";

function Certificate() {
  return (
    <section className="Certificate">
      <h1>مجوز های اخذ شده</h1>
      <div className="CertificateFlex">
        <h1>گواهی سلامت و احراز اصالت نرم افزار</h1>
        <div className="CertificateImg">
          <CertificateImg />
        </div>
        <h1 className="CertificateFanni">گواهی تایید فنی نرم افزار </h1>
        <div className="CertificateImg2">
          <CertificateImg2 />
        </div>
      </div>
    </section>
  );
}

export default Certificate;
