import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../components/vendorProfile.css";
import { MdOutlineMessage } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/user-slice";

function VendorProfile() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers(5));
    console.log(users);
  }, []);
  return (
    <div className="home-vendor">
      <div className="box-vendor">
        <div className="vendor-info mb-3">
          مرحبا <span className="fw-bold">{users.firstName}</span>
        </div>
        <div className="bullets mb-3">
          <div className="message">
            <MdOutlineMessage />
            <div className="abs-message">
              <span>1</span>
            </div>
          </div>
          <div className="notification">
            <IoIosNotifications />
            <div className="abs-notification">
              <span>1</span>
            </div>
          </div>
          <div className="chat">
            <IoChatbubbleEllipsesSharp />
            <div className="abs-chat">
              <span>1</span>
            </div>
          </div>
        </div>
        <div className="information">
          <div className="item">
            <Link to="/vendorprofile/editInfo">تحرير معلومات الحساب</Link>
          </div>
          <div className="item">
            <Link>الطلبات</Link>
          </div>
          <div className="item">
            <Link>اضافة منتج</Link>
          </div>
          <div className="item">
            <Link>قائمة المنتجات</Link>
          </div>
          <div className="item">
            <Link>تقارير المبيعات</Link>
          </div>
          <div className="item">
            <Link to="/account">تسجيل الخروج</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorProfile;
