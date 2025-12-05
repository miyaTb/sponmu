import React from "react";
import PropTypes from "prop-types";
import styles from "./MyComponent.module.css";

const SectionTitle = ({ title, subtitle, align = "center" }) => {
  return (
    <div className={styles.sectionTitleWrapper}>
      <div className={`${styles.sectionTitle} ${styles[align]}`}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(["left", "center", "right"]),
};

export default SectionTitle;
