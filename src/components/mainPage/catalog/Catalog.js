"use client";
import { useEffect, useState } from "react";
import styles from "./catalog.module.scss";
import { TanksList } from "@/productsList/TanksList";
import { useResize } from "@/customHooks/use-resize";
import FilterListButtons from "./components/FilterListButtons";
import PageNavigationButtons from "./components/PageNavigationButtons";
import CardsProduct from "./components/CardsProduct";

const Catalog = ({}) => {
  const withWindow = useResize();
  const [filteredTanksList, setFilteredTanksList] = useState(TanksList);

  const [indexPage, setIndexPage] = useState(1);
  const [sizeOnePage, setSizeOnePage] = useState(0);
  const [sizeTanksList, setSizeTanksList] = useState(0);
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    const newList = TanksList.sort((a, b) => a.volume - b.volume);
    setFilteredTanksList(newList);
  }, []);

  const calculatePageNumbers = (sizeList, currentPage) => {
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(sizeList, startPage + 3);
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  };
  useEffect(() => {
    let sizeList = Math.ceil(filteredTanksList.length / sizeOnePage);
    setSizeTanksList(sizeList);
    setPageNumbers(calculatePageNumbers(sizeList, indexPage));
  }, [filteredTanksList, sizeOnePage, indexPage]);

  useEffect(() => {
    var newSizeOnePage = 10;
    if (!withWindow.SCREEN_XXL && withWindow.SCREEN_LG) {
      newSizeOnePage = 8;
    }
    if (!withWindow.SCREEN_LG && withWindow.SCREEN_MD) {
      newSizeOnePage = 9;
    }
    if (!withWindow.SCREEN_MD && withWindow.SCREEN_SSM) {
      newSizeOnePage = 8;
    }
    if (!withWindow.SCREEN_SSM) {
      newSizeOnePage = 6;
    }
    setSizeOnePage(newSizeOnePage);
    setPageNumbers(calculatePageNumbers(sizeTanksList, indexPage));
  }, [withWindow.width, sizeTanksList, indexPage]);

  return (
    <div className={styles.catalog} id="catalog">
      <div className="_cont_limit">
        <div className={styles.catalog_body}>
          <div className={styles.catalog_title}>
            <h2>Наша продукция</h2>
          </div>
          <FilterListButtons
            setIndexPage={setIndexPage}
            setFilteredTanksList={setFilteredTanksList}
            TanksList={TanksList}
          />
          <CardsProduct
            filteredTanksList={filteredTanksList}
            sizeOnePage={sizeOnePage}
            indexPage={indexPage}
          />
          <PageNavigationButtons
            indexPage={indexPage}
            sizeTanksList={sizeTanksList}
            withWindow={withWindow}
            setIndexPage={setIndexPage}
            pageNumbers={pageNumbers}
          />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
