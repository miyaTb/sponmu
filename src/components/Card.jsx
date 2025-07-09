import React from "react";
import styles from "./MyComponent.module.css";

const Card = ({ image, title, time, kcal }) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={image} alt={title} />
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <div className={styles.cardDescription}>
          <p className={styles.cardTime}>{time + "分"}</p>
          <p className={styles.cardKcal}>{kcal + "KCal"}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
