import styles from "../styles/stats.module.css";
import Link from "next/link";
import Image from "next/image";
import pentagon from "../assets/pentagon.png";
import { useState, useEffect, useRef } from "react";
function Stats() {
  return (
    <section className={`${styles.stats} ${styles.statsbg}`}>
      <div className={styles.text}>
        <h1 className={styles.heading}>
          Why cybersecurity should be your #1 concern:
        </h1>
        {/* <p>
          the stats say you should <Link href={"/contact"}>contact us</Link>{" "}
          before its too late
        </p> */}
      </div>
      <div className={styles.container}>
        <Data
          h={"$13 Mn"}
          p={"average cost of cybercrime against businesses"}
        />
        <Data
          h={"175%"}
          p={"increased risk of cyberattacks businesses in 2023"}
        />
        <Data
          h={"60%"}
          p={"of businesses go under after data breaches and cyber-attacks"}
        />
      </div>
    </section>
  );
}

export default Stats;

function Data({ h, p }) {
  return (
    <div className={styles.data}>
      <h1>{h}</h1>
      <p>{`${p}`}</p>
    </div>
  );
}
