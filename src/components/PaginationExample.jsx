import React, { useState } from "react";
import Pagination from "./Pagination";
import NewsHeading from "./NewsHeading";
import styles from "./MyComponent.module.css";

import news from "../data/news.json";

const PaginationExample = () => {
  const sortedNews = [...news].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(news.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = sortedNews.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <ul className={styles.newsList}>
        {currentItems.map((item) => (
          <li className={styles.newsListItem}>
            <NewsHeading date={item.date} title={item.title}></NewsHeading>
          </li>
        ))}
      </ul>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => {
          if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
          }
        }}
      />
    </div>
  );
};

export default PaginationExample;
