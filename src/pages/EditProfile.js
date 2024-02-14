import React from "react";
import { Link } from "react-router-dom";
import "../components/editProfile.css";

function EditProfile() {
  return (
    <div className="home-edit">
      <div className="box-edit">
        <h4 className="mb-2 text-center">تعديل المعلومات</h4>
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
          <div className="submit-edit text-center">
            <input type="submit" value={"حفظ"} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
