import React from "react";

import ItemCard from "./ItemCard";

import styles from "./MyComponent.module.css";

import itemcheese from "../assets/itemcheese.png";
import itemmilk from "../assets/itemmilk.png";
import itemyoghurt from "../assets/itemyoghurt.png";

const HotItems = () => {
  const items = [
    { text: "やさしい塩チーズ", image: itemcheese, description: "チーズ" },
    {
      text: "しぼりたて生乳\nヨーグルト",
      image: itemyoghurt,
      description: "ヨーグルト",
    },
    { text: "牧場の朝ミルク", image: itemmilk, description: "牛乳" },
  ];
  return (
    <div className={styles.hotItemContent}>
      {items.map((item, index) => (
        <ItemCard
          key={index}
          {...item}
          className={index === 1 ? styles.high : styles.low}
        />
      ))}
    </div>
  );
};

export default HotItems;
