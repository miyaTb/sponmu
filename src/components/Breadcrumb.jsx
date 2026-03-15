import React from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./MyComponent.module.css";
// import breadcrumbSeparatorPng from "../assets/breadcrumbSeparator.png";
import breadcrumbSeparatorPng from "../assets/arrow.png";

const getLabelFromId = (path, id) => {
  const masterData = {
    products: {
      1: "しぼりたて生乳ヨーグルト",
      2: "牧場の朝ミルク",
      3: "しあわせ飲むヨーグルト",
      4: "やさしい塩チーズ",
      5: "まきばのクリームチーズ",
      6: "放牧バター仕立て ヨーグルトスプレッド",
    },
    recipes: {
      1: "フルーツヨーグルトボウル",
      2: "ヨーグルトスムージー",
      3: "クリームチーズディップ",
      4: "チーズトースト",
      5: "ヨーグルトグラノーラパフェ",
      6: "バターヨーグルトトースト",
    },
  };

  return masterData[path]?.[id] || [id];
};

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
        let label = decodeURIComponent(value); // URLエンコードされた場合に備え

        const parentPath = pathnames[index - 1];
        // 数字の場合のみ、逆引き関数を通す
        if (/^\d+$/.test(value)) {
          label = getLabelFromId(parentPath, value);
        }

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
