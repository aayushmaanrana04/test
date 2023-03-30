import React from "react";
import styles from "../styles/servicesection.module.css";
import ButtonPrimary from "./ButtonPrimary";
//
import { BsHddNetworkFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { GoRadioTower } from "react-icons/go";
import { MdSettingsApplications } from "react-icons/md";
import { GrWorkshop } from "react-icons/gr";
import { BiRadar } from "react-icons/bi";
import { MdSecurity } from "react-icons/md";

function ServiceSection() {
  return (
    <section className={`${styles.service} ${styles.servicebg}`}>
      <div className={styles.textcont}>
        <h1 className={styles.heading}>
          Have a look at our wide range of services
        </h1>
        <ButtonPrimary text={"Explore More"} link={'services'}/>
      </div>
      <div className={styles.right}>
        <Card h={"Network Security"} i={<BsHddNetworkFill size={60} />} />
        <Card h={"IoT Security Assessment"} i={<GoRadioTower size={50} />} />
        <Card h={"CyberForensic Services"} i={<BiRadar size={50} />} />
        <Card h={"Email Security"} />
      </div>
    </section>
  );
}

export default ServiceSection;

function Card({ h, p, i }) {
  return (
    <div className={styles.card}>
      {/* <div className={styles.imageholder}>{i}</div> */}
      <div className={styles.textbox}>
        {i}
        <h1>{h}</h1>
        <p>Service description</p>
      </div>
    </div>
  );
}
