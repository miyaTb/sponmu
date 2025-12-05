import React from "react";
import NewsHeading from "./NewsHeading";
import styles from "./MyComponent.module.css";

const NewsList = () => {
  const news = [
    { date: "2024.01.12", title: "テキストテキストテキストテキスト" },
    { date: "2024.09.13", title: "テキストテキストテキストテキスト" },
    { date: "2024.11.30", title: "テキストテキストテキストテキスト" },
  ];
  return (
    <div>
      <ul className={styles.newsList}>
        {news.map((item) => (
          <li className={styles.newsListItem}>
            <NewsHeading date={item.date} title={item.title}></NewsHeading>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
