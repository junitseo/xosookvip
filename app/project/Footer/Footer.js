import React from "react";
import Styles from "../../../styles/Footer.module.css";
import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={Styles["footer"]} id="contact">
      <div className={Styles["footer-container"]}>
        <div className={Styles["footer-container-item"]}>
          <div className={Styles["footer-title"]}>
            <h2>XOSOOKVIP.COM</h2>
          </div>
          <div className={Styles["footer-line"]}>
            <div className={Styles["line"]}></div>
          </div>
          <div className={Styles["footer-container-profile"]}>
            <FaHome/>
            <div className={Styles["footer-container-profile-text"]} >
              <p>Địa chỉ: ----------</p>
            </div>
          </div>
          <div className={Styles["footer-container-profile"]}>
            <FaPhone/>
            <div className={Styles["footer-container-profile-text"]} >
              <p>Hotline: -------</p>
            </div>
          </div>
          <div className={Styles["footer-container-profile"]}>
            <FaMailBulk/>
            <div className={Styles["footer-container-profile-text"]} >
              <p>Email: xosookvip@okvip.com</p>
            </div>
          </div>
        </div>
        <div className={Styles["footer-container-item"]}>
          <div className={Styles["footer-container-text"]}>
            <img src="/logo.png" alt="logo"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
