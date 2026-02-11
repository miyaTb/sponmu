import React from "react";
import styles from "./MyComponent.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.pagination}>
      <div className={styles.paginationContainer}>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={styles.paginationSlide}
        >
          ＜
        </button>

        <div className={styles.paginationNumber}>
          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`${styles.pageNumbersButton} ${
                currentPage === page ? styles.activePageNumberButton : ""
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={styles.paginationSlide}
        >
          ＞
        </button>
      </div>
    </div>
  );
};

export default Pagination;
