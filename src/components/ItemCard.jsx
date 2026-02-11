import React from "react";
import styles from "./MyComponent.module.css";

const ItemCard = ({ text, image, description, className }) => {
  const textLines = text.split("\n");

  return (
    <div className={`${styles.itemCard} ${className}`}>
      <div className={styles.itemCardContent}>
        <img
          className={styles.itemCardImage}
          src={image}
          alt={description}
        ></img>
      </div>
      <p className={styles.itemCardText}>
        {textLines.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index !== text.length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default ItemCard;
