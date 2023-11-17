import React from "react";
import Styles from "../../../styles/Footer.module.css";
import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

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
            <FaHome />
            <div className={Styles["footer-container-profile-text"]} >
              <p>Địa chỉ: 43 Ngô Tất Tố, Phường 21, Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam.</p>
            </div>
          </div>
          <div className={Styles["footer-container-profile"]}>
            <FaPhone />
            <div className={Styles["footer-container-profile-text"]} >
              <p>Hotline: 0396237750.</p>
            </div>
          </div>
          <div className={Styles["footer-container-profile"]}>
            <FaMailBulk />
            <div className={Styles["footer-container-profile-text"]} >
              <p>Email: xosookvip.com@gmail.com.</p>
            </div>
          </div>
        </div>
        <div className={Styles["footer-container-item"]}>
          <div className={Styles["footer-container-text"]}>
            <Image
              src="/logo.png"
              alt="logo"
              width={336}
              height={128}
            />
          </div>
        </div>
      </div>
      <div className={Styles["footer-container-info"]}>
        <div className={Styles["goole-search"]}>Xem trên Google Tìm Kiếm | Chỉ đường đến XỔ SỐ OKVIP</div>
        <div className={Styles["company"]}>Copyright © 2023 OKVIP All right Reserved</div>
        <div className={Styles["icon-link"]}>
          <Link href={"https://www.facebook.com/xosookvip/"} rel="nofollow">
            <Image
              src={"/facebook.png"}
              alt="facebook"
              width={40}
              height={40}
            />
          </Link>
          <Link href={"https://www.reddit.com/user/xosookvip/"} rel="nofollow">
            <Image
              src={"/redis.png"}
              alt="redis"
              width={40}
              height={40}
            />
          </Link>

          <Link href={"https://twitter.com/xosookvip"} rel="nofollow">
            <Image
              src={"/twitter.png"}
              alt="twitter"
              width={40}
              height={40}
            />
          </Link>
          <Link href={"https://www.youtube.com/@xosookvip/about"} rel="nofollow">
            <Image
              src={"/youTube.png"}
              alt="youtube"
              width={40}
              height={40}
            />
          </Link>
          
          <Link href={"https://www.linkedin.com/in/xosookvip/"} rel="nofollow">
            <Image
              src={"/linkedIn.png"}
              alt="linkedin"
              width={40}
              height={40}
            />
          </Link>
        </div>
      </div>
      <div className={Styles["footer-container-description"]}>
        <div className={Styles["description"]}>Thông tin: xổ số được cập nhật hàng ngày và hoàn toàn miễn phí trên trang xosookvip.com</div>
      </div>
    </div>
  );
};

export default Footer;
