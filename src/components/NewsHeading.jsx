import React from "react";
import PropTypes from "prop-types";
import styles from "./MyComponent.module.css";

const NewsHeading = ({ date, title = "お知らせ" }) => {
  return (
    <div className={styles.newsWrapper}>
      {date && <p className={styles.newsDate}>{date}</p>}
      <h2 className={styles.newsTitle}>{title}</h2>
    </div>
  );
};

NewsHeading.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  button: PropTypes.bool,
};

export default NewsHeading;
