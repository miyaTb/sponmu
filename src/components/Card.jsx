import React from "react";
import styles from "./MyComponent.module.css";

const Card = ({ image, title, tag, time, kcal }) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={image} alt={title} />
      <div className={styles.cardContent}>
        <div className={styles.cardText}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <h3 className={styles.cardTag}>{"#" + tag}</h3>
        </div>
        <div className={styles.cardDescription}>
          <p className={styles.cardTime}>{time + "分"}</p>
          <p className={styles.cardKcal}>{kcal + "KCal"}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
