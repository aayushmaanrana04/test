import styles from "../styles/button.module.css";
import Link from "next/link";
const ButtonPrimary = ({ link, text, fontSize }) => {
  const style = {
    fontSize: `${fontSize}px`,
  }
  if (link) {
    return (
      <Link style={style} href={`/${link}`} className={`${styles.buttonprimary}`}>
        {text}
      </Link>
    );
  }

  return <button style={style} className={styles.buttonprimary}>{text}</button>;
};

export default ButtonPrimary;
