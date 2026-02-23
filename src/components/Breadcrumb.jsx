import React from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./MyComponent.module.css";
// import breadcrumbSeparatorPng from "../assets/breadcrumbSeparator.png";
import breadcrumbSeparatorPng from "../assets/arrow.png";

const Breadcrumb = () => {
  const location = useLocation();

  // 現在のパスを / 区切りで分割
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav className={styles.breadcrumb}>
      <Link to="/">Top</Link>
      {pathnames.map((value, index) => {
        const to = "/" + pathnames.slice(0, index + 1).join("/");
        const label = decodeURIComponent(value); // URLエンコードされた場合に備え

        return (
          <span key={to}>
            {/* <span className={styles.breadcrumbSeparator}> &gt; </span> */}
            <img
              src={breadcrumbSeparatorPng}
              alt=">"
              className={styles.breadcrumbSeparator}
            />
            {index === pathnames.length - 1 ? (
              <span>{label}</span> // 最後はリンクにしない
            ) : (
              <Link to={to}>{label}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
