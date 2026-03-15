import React from "react";
import NewsHeading from "./NewsHeading";
import styles from "./MyComponent.module.css";

import news from "../data/news.json";

const NewsList = () => {
  const sortedNews = [...news].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <div>
      <ul className={styles.newsList}>
        {sortedNews.slice(0, 3).map((item) => (
          <li className={styles.newsListItem}>
            <NewsHeading date={item.date} title={item.title}></NewsHeading>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
