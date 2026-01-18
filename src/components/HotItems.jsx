import React, { useState, useEffect, useParams } from "react";

import ItemCard from "./ItemCard";

import styles from "./MyComponent.module.css";

import cheeseImage from "../assets/itemcheese.png";
import milkImage from "../assets/itemmilk.png";
import yoghurtImage from "../assets/itemyoghurt.png";

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
