import styles from "../styles/Home.module.css";
import ButtonPrimary from "./ButtonPrimary";
import Image from "next/image";

import secure from "../assets/svgs/secure.svg";



export default function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h1 className={styles.heading}>
          Empower Your Business with Cybersecurity
        </h1>
        <p className={styles.subheading}>
          Providing cybersecurity solutions for everyone
        </p>
        <ButtonPrimary text={"Discover What We Do"} link={"services"} />
      </div>
      <div className={`${styles.imageholder}`}>
        <Image
          className={styles.image}
          src={secure}
          fill
          // sizes="(min-width: 767px) 200px,500px"
        />
      </div>
    </div>
  );
}
