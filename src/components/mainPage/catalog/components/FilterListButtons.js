"use client";

import { useState } from "react";
import styles from "../catalog.module.scss";
import { TanksList } from "@/productsList/TanksList";

const listButtonFilter = [
  { all: "Все" },
  { tanks: "Баки" },
  { barrels: "Бочки" },
];

const FilterListButtons = ({ setIndexPage, setFilteredTanksList }) => {
  const [methodFilter, setMethodFilter] = useState("all");

  //фильтрация товаров по категориям
  const filterProducts = (method) => {
    setMethodFilter(method);
    if (method === "all") {
      setFilteredTanksList(TanksList);
      setIndexPage(1);
      return;
    }
    const newProductList = TanksList.filter(
      (product) => product.category === method
    );
    setFilteredTanksList(newProductList);
    setIndexPage(1);
  };
  return (
    <div className={styles.filter_menu}>
      {listButtonFilter.map((product, index) => (
        <button
          className={
            methodFilter === Object.keys(product)[0]
              ? styles.active_filter
              : undefined
          }
          onClick={() => filterProducts(Object.keys(product)[0])}
          key={index}
        >
          {Object.values(product)}
        </button>
      ))}
    </div>
  );
};

export default FilterListButtons;
