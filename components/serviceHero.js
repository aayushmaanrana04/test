import styles from "../styles/servicesHero.module.css";
import ButtonPrimary from "./ButtonPrimary";
import Image from "next/image";
import monitor from "../assets/svgs/security-bro.svg";

export default function ServiceHero() {
  return (
    <div className={styles.hero}>
      <div>
        <h1 className={styles.heading}>
          Cyber Security solutions for everyone
        </h1>
        <p className={styles.subheading}>
          Personalized solutions for total protection
        </p>
        {/* <ButtonPrimary text={"Discover What We Do"} /> */}
      </div>
      {/* <div className={`${styles.image} ${styles.glow}`}></div> */}
      <div className={`${styles.imageholder}`}>
        <Image
          className={styles.image}
          src={monitor}
          fill
          // sizes="(min-width: 767px) 200px,500px"
        />
      </div>
    </div>
  );
}
