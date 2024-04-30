"use client";

import styles from "../catalog.module.scss";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const PageNavigationButtons = ({
  indexPage,
  sizeTanksList,
  withWindow,
  setIndexPage,
  pageNumbers,
}) => {
  //переход на предыдущую и следующую страницу
  const handlePage = (method) =>
    setIndexPage(method === "dicr" ? indexPage + 1 : indexPage - 1);

  return (
    <div className={styles.change_page}>
      {indexPage !== 1 && (
        <button
          className={styles.arrow_botton}
          onClick={() => handlePage("incr")}
        >
          <FaArrowLeftLong />
          {withWindow.SCREEN_SM && "Предыдущая"}
        </button>
      )}

      <div className={styles.list_page}>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setIndexPage(pageNumber)}
            style={{
              border: indexPage === pageNumber && "1px solid black",
            }}
          >
            {pageNumber}
          </button>
        ))}
      </div>

      {indexPage !== sizeTanksList && (
        <button
          className={styles.arrow_botton}
          onClick={() => handlePage("dicr")}
        >
          {withWindow.SCREEN_SM && "Следующая"}
          <FaArrowRightLong />
        </button>
      )}
    </div>
  );
};

export default PageNavigationButtons;
