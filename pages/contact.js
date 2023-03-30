import styles from "../styles/contact.module.css";
import { useState } from "react";
import ButtonPrimary from "@/components/ButtonPrimary";
import {HiLocationMarker} from 'react-icons/hi'
import {TbPhoneCall} from 'react-icons/tb'

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };
  return (
    <section className={styles.section}>
      <div className={styles.contact}>
        <div className={styles.right}>
          <h1 className={styles.heading}>For all your Cybersecurity needs</h1>
          <div className={styles.apple}>
            <HiLocationMarker size={30} color={'#e5eef9'}/>
            <p className={styles.p}>
              S-704, S-Wing, Topaz Park, Wakad
              <br />
              Pune - 411057 ,<br /> India
            </p>
          </div>

          <div className={styles.apple}>
            <TbPhoneCall size={30} color={'#e5eef9'}/>
            <p className={styles.p}>+91 830 820 7176</p>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <h1 className={styles.heading1}>Drop a message</h1>
            <div className={`${styles.name}`}>
              {/* <label htmlFor="name">Name</label> */}
              <input
                className={styles.input}
                type="text"
                id="fname"
                name="fname"
                value={formData.fname}
                placeholder={"First name"}
                onChange={handleChange}
                required
              />
              <input
                className={styles.input}
                type="text"
                id="lname"
                name="lname"
                value={formData.lname}
                placeholder={"Last name"}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              {/* <label htmlFor="email">Email</label> */}
              <input
                className={styles.input}
                type="text"
                id="company"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              {/* <label htmlFor="email">Email</label> */}
              <input
                className={styles.input}
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              {/* <label htmlFor="email">Email</label> */}
              <input
                className={styles.input}
                type="number"
                id="phone"
                name="phone"
                placeholder="Phone No."
                value={formData.phone}
                onChange={handleChange}
                maxLength={10}
                minLength={10}
                required
              />
            </div>
            <div>
              {/* <label htmlFor="message">Message</label> */}
              <textarea
                className={styles.textarea}
                id="message"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <ButtonPrimary text={"Submit"}></ButtonPrimary>
          </form>
          <h2 className={styles.hr1}>
            <span>OR</span>
          </h2>
          <span className={styles.btn1}>
            <ButtonPrimary text={"Schedule a meet"} />
          </span>
        </div>
      </div>
      {/* <h2 className={styles.hr}>
        <span>OR</span>
      </h2>
      <span className={styles.btn}>
        <ButtonPrimary text={"Schedule a meet"} />
      </span> */}
    </section>
  );
}

export default Contact;
