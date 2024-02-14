import React from "react";
import "../components/vendorLogin.css";
import { Link } from "react-router-dom";

function VendorLogin() {
  return (
    <div className="home-login">
      <div className="box-login">
        <h4 className="mb-5 text-center">تسجيل دخول البائع</h4>
        <form action="">
          <label htmlFor="">رقم الجوال</label>
          <input type="text" />
          <label htmlFor="">كلمة المرور</label>
          <input type="password" />
          <div className="forget-link mb-3">
            <Link>نسيت كلمة المرور؟</Link>
          </div>
          <div className="submit">
            <Link to="/vendorprofile">دخول</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VendorLogin;
