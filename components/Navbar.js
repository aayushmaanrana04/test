import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import redlogo from "../assets/redlogo.png";
import bluelogo from "../assets/bluelogo.png";
import { useState, useEffect } from "react";
import ButtonPrimary from "./ButtonPrimary";
import Drawer from "./drawer";

import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const router = useRouter();
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Select an element by its ID and change its text content
    const body = document.querySelector("body");

    if (!isEnabled) document.body.style.overflow = "";
    if (isEnabled) document.body.style.overflow = "";
  }, []);

  function handleCloseDrawer() {
    setIsEnabled(false);
  }

  useEffect(() => {
    const handleRouteChange = () => {
      handleCloseDrawer();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  function handleClick(e) {
    e.preventDefault();
    if (!isEnabled) {
      // document.body.style.overflow = 'hidden';
      setIsEnabled(true);
    } else {
      // document.body.style.overflow = '';
      setIsEnabled(false);
    }
  }

  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/" className={`${styles.logoholder} ${styles.link}`}>
          <Image className={styles.logo} src={bluelogo} />
          <h2>CYPHINIX</h2>
        </Link>
        <ul>
          <Link className={styles.link} href="about">
            <li>ABOUT</li>
          </Link>
          <Link className={styles.link} href="services">
            <li>SERVICES</li>
          </Link>
          <Link className={styles.link} href="industry">
            <li>INDUSTRY</li>
          </Link>
          <ButtonPrimary
            link={"contact"}
            text={"GET A PROPOSAL"}
            fontSize={"16"}
          />
        </ul>
        <button onClick={handleClick} className={styles.drawer_button}><GiHamburgerMenu size={20}/></button>
      </nav>
      {isEnabled && <Drawer state={isEnabled}/>}
    </>
  );
}
