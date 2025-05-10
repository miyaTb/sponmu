import React from "react";
import styles from "./MyComponent.module.css";

const Button = ({ link, variant }) => {
  return (
    <div className={`${styles.button} ${styles[variant]}`}>
      <a href={link}>MORE</a>
    </div>
  );
};

export default Button;
