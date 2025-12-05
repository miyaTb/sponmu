import React from "react";
import styles from "./MyComponent.module.css";

const Button = ({ text = "MORE", link, variant }) => {
  return (
    <div className={`${styles.button} ${styles[variant]}`}>
      <a href={link}>{text}</a>
    </div>
  );
};

export default Button;
