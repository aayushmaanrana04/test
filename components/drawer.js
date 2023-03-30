import styles from "../styles/drawer.module.css"
import Link from "next/link";
// import ButtonPrimary from "./ButtonPrimary";

import { GiHamburgerMenu } from "react-icons/gi";

function Drawer({state}) {
  return (
    <div className={`${styles.drawer}`}>
        <ul>
        <Link className={styles.link} href="/about">
          <li>ABOUT</li>
        </Link>
        <Link className={styles.link} href="/services">
          <li>SERVICES</li>
        </Link>
        <Link className={styles.link} href="/industry">
          <li>INDUSTRY</li>
        </Link>
        <Link className={styles.link} href="/contact">
          <li>CONTACT US</li>
        </Link>
        {/* <ButtonPrimary link={'/contact'} text={'GET STARTED'} fontSize={'40'}/> */}
      </ul>
    </div>
  )
}

export default Drawer