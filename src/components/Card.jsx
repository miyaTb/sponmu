import React from "react";
import styles from "./MyComponent.module.css";

const Card = ({ image, title, description }) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={image} alt={title} />
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
