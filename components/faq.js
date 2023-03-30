import { useState } from "react";
import styles from "../styles/faq.module.css";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    { header: "Item 1", content: "Content for Item 1" },
    { header: "Item 2", content: "Content for Item 2" },
    { header: "Item 3", content: "Content for Item 3" },
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  }

  const handleKeyPress = (event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick(index);
    }
  }

  return (
    <section className={styles.faq}>
      
    <div className={styles.accordion}>
    <h1 className={styles.heading}>FAQs</h1>
      {items.map((item, index) => (
        <div key={index} className={`${styles.accordionItem} ${activeIndex === index ? styles.active : ''}`}>
          <div className={styles.accordionHeader} onClick={() => handleClick(index)} onKeyPress={(event) => handleKeyPress(event, index)} tabIndex={0}>
            {item.header}
            <span className={styles.accordionIcon}>{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && (
            <div className={styles.accordionContent}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
    </section>
  );
}

export default Faq;
