import React from "react";
import { Link } from "react-router-dom";
import "../components/profile.css";

function Profile() {
  return (
    <div className="home-profile">
      <div className="box">
        <div className="log-in">
          <Link to="/login">تسجيل الدخول</Link>
        </div>
        <div className="regestation">
          <Link to="/signup">تسجيل حساب جديد</Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
