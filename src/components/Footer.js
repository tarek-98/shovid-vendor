import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faInbox,
  faUser,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <Navbar expand="lg" className="col-lg-4 nav-buttom" fixed="bottom">
      <Container>
        <div className="nav-item">
          <Link to="/" className="nav-item">
            <FontAwesomeIcon icon={faHouse} className="icon active" />
            <span className="item-name active">الرئيسية</span>
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/" className="nav-item">
            <FontAwesomeIcon icon={faMessage} className="icon active" />
            <span className="item-name active">الرسائل</span>
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/categories" className="nav-item">
            <FontAwesomeIcon icon={faInbox} className="icon active" />
            <span className="item-name">الاقسام</span>
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/account" className="nav-item">
            <FontAwesomeIcon icon={faUser} className="icon active" />
            <span className="item-name">حسابي</span>
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default Footer;
