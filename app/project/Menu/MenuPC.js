import React, {
  useEffect,
  useState,
} from "react";
import stylesCss from "../../../styles/MenuCSS/Menu.module.css";
import { useRouter } from 'next/router';
import MenuMobile from "project/MenuMobile";
import Link from "next/link";
import Image from 'next/image'

const MenuPC = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setShowMenu(false);
  },[router.asPath])
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className={stylesCss["menu-container"]}>
        <div className={stylesCss["navMenu-container"]}>
          <Link href={"/"} style={{display: "block"}} onClick={() => router.push("/")}>
            <a>
              <Image 
                className={stylesCss.logo}
                src="/logo.png"
                alt="logo"
                width={168}
                height={64}
              />
            </a>
          </Link>

          <div className={stylesCss["menu-toggle"]}>
            <svg
              onClick={toggleMenu}
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="35px"
              width="35px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <desc></desc>
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </div>
        </div>
      </nav >
      {showMenu &&  <MenuMobile />}
    </>
  );
};

export default MenuPC;
