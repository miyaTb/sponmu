import React, { useState, useEffect, useParams } from "react";

import ItemCard from "./ItemCard";

import styles from "./MyComponent.module.css";

import itemcheese from "../assets/itemcheese.png";
import itemmilk from "../assets/itemmilk.png";
import itemyoghurt from "../assets/itemyoghurt.png";

import productBox from "../data/productBox.json";

const HotItems = () => {
  return (
    <div className={styles.hotItemContent}>
      {productBox.slice(0, 3).map((item, index) => (
        <ItemCard
          key={index}
          {...item}
          index={index}
          className={index === 1 ? styles.high : styles.low}
        />
      ))}
    </div>
  );
};

export default HotItems;
