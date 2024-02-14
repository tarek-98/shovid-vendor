import React from "react";
import { Link } from "react-router-dom";
import "../components/vendorSignup.css";

function VendorSignup() {
  return (
    <div className="home-signup">
      <div className="box-signup">
        <h4 className="mb-2 text-center">انشاء حساب البائع</h4>
        <form action="">
          <label htmlFor=""> الاسم الاول</label>
          <input type="text" />
          <label htmlFor="">اسم العائلة</label>
          <input type="text" />
          <label htmlFor="">رقم الجوال</label>
          <input type="text" />
          <label htmlFor="">كلمة المرور</label>
          <input type="password" />
          <label htmlFor="">تأكيد كلمة المرور</label>
          <input type="password" />
          <div className="terms-link mb-3">
            <input type="checkbox" id="agree-check" className="ms-2" />
            <label htmlFor="agree-check">
              لقد قرأت و وافقت علي{" "}
              <Link to="/terms" className="text-decoration-none fw-bold">
                الشروط و الاحكام
              </Link>
            </label>
          </div>
          <div className="submit">
            <Link to="/otpVer">متابعة</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VendorSignup;
