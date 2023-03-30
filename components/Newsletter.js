import { useState } from "react";
import styles from '../styles/footer.module.css'
const NewsletterForm = () => {
  const [state, setState] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();

    setState(1);
    setErrorMsg("");
    console.log(e.target[0].value);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        body: e.target[0].value,
      });

      const data = await res.json();
      if (data.error !== null) {
        throw data.error;
      }
      setState(2);
    } catch (e) {
      setErrorMsg(e);
      setState(3);
    }
  };

  return (
    <>
      {/* <h1 className={styles.p}>Join Our Newsletter</h1> */}
      <form onSubmit={subscribe} className={styles.form}>
        <input className={styles.input} required placeholder="Email address" type="email" />
        <button className={styles.btn} type="submit">Subscribe</button>
      </form>
    </>
  );
};

export default NewsletterForm;
