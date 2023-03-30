import Link from "next/link";
import styles from "../styles/footer.module.css";
import NewsletterForm from "./Newsletter";
import { useEffect } from "react";
import { FaTwitterSquare, } from "react-icons/fa";
import { BsLinkedin,BsTwitter,BsWhatsapp,BsInstagram} from "react-icons/bs";




function Footer() {

  return (
    <section className={styles.footer}>
      <div className={styles.navigation}>
        <ul>
          <h1 className={styles.heading}>Company</h1>
          <li className={styles.p}>
            <Link className={styles.link} href="/about">
              About Us
            </Link>
          </li>
          <li className={styles.p}>
            <Link className={styles.link} href="/services">
              Services
            </Link>
          </li>
          <li className={styles.p}>
            <Link className={styles.link} href="contact">
              Contact Us
            </Link>
          </li>
          <li className={styles.p}>
            <Link className={styles.link} href="/industry">
              Industry
            </Link>
          </li>
        </ul>

        <ul>
          <h1 className={styles.heading}>Resources</h1>
          <li className={styles.p}>list element</li>
          <li className={styles.p}>list element</li>
          <li className={styles.p}>list element</li>
          <li className={styles.p}>list element</li>
          <li className={styles.p}>list element</li>
        </ul>

        <ul>
          <h1 className={styles.heading}>Compliance</h1>
          <li className={styles.p}>list element</li>
          <li className={styles.p}>list element</li>
          <li className={styles.p}>list element</li>
          <li className={styles.p}>list element</li>
          <li className={styles.p}>list element</li>
        </ul>
      </div>
      <div className={styles.right}>
        <div className={styles.newsletterholder}>
          <NewsletterForm/>
        </div>
        <div className={styles.socials}>
          {/* <h1 className={styles.follow}>Follow Us</h1> */}
        <BsLinkedin size={30}/>
        <BsTwitter size={30}/>
        <BsWhatsapp size={30}/>
        <BsInstagram size={30}/>
        </div>
      </div>
      {/* <p>www.cyphinix.com</p> */}
    </section>
  );
}

export default Footer;
