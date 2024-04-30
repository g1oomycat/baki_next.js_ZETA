import url from "url";
import { notFound } from "next/navigation";

import { TanksList } from "@/productsList/TanksList";
import { addSpacesToPrice } from "@/functions/addSpacesToPrice";
import { GoInfo } from "react-icons/go";
import { MdOutlinePropaneTank } from "react-icons/md";
import { IoBasketOutline } from "react-icons/io5";
import {
  getIdFromCHPU,
  getNameFromCHPU,
  transliterateToLatin,
} from "@/functions/URLchpu";
import styles from "./product.module.scss";

//metategs
export function generateMetadata({ params: { nameANDid } }) {
  const product = findPorduct(
    getIdFromCHPU(nameANDid),
    getNameFromCHPU(nameANDid)
  );
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return {
    title: `${product.name} ${product.volume} литров`,
    discription: `Купить ${product.name} ${product.volume} литров в городе Алматы в магазинах ZETA`,
    openGraph: {
      title: `${product.name} ${product.volume} литров`,
      description: `Купить ${product.name} ${product.volume} литров в городе Алматы в магазинах ZETA`,
      siteName: "Пластиковые емкости ZETA",
      images: [
        {
          url: url.resolve(baseUrl, `/foto_cards/${product.img}`), // Must be an absolute URL
          width: 600,
          height: 800,
          alt: `${product.name} ${product.volume} литров`,
        },
      ],
      locale: "ru_RU",
      type: "website",
    },
  };
}

//поиск товара по id
const findPorduct = (id, name) => {
  const findedProduct = TanksList.find(
    (product) => Number(product.id) === Number(id)
  );

  //если нет товара, то 404
  if (!findedProduct) {
    notFound();
  }
  if (
    name !==
    `${transliterateToLatin(
      `${findedProduct.name}-${findedProduct.volume}-литров`
    )}`
  ) {
    notFound();
  }
  return findedProduct;
};

//сама разметка
export default function idProduct({ params: { nameANDid } }) {
  const product = findPorduct(
    getIdFromCHPU(nameANDid),
    getNameFromCHPU(nameANDid)
  );
  return (
    <div className={styles.product}>
      <div className="_cont_limit">
        <div className={styles.body}>
          <div className={styles.product_info}>
            <div className={styles.column_img}>
              <div className={styles.item_img}>
                <img
                  src={`/foto_cards/${product.img}`}
                  alt={product.name}
                  placeholder="blur"
                />
              </div>
            </div>
            <div className={styles.column_info}>
              <div className={styles.name}>
                <h1>{product.name}</h1>
              </div>

              <div className={styles.buy}>
                <div className={styles.price}>
                  <h2>{addSpacesToPrice(product.price)} ₸</h2>
                </div>
                <a href={product.url_zetakz} className={styles.sylka_buy}>
                  <button className={styles.button_buy}>
                    <IoBasketOutline /> купить
                  </button>
                </a>
              </div>

              <div className={`${styles.characteristics} ${styles.border_row}`}>
                <div className={styles.main_title}>
                  <GoInfo /> <span>Характеристики</span>
                </div>
                <div className={styles.characteristics_flex}>
                  <div className={styles.column}>
                    <span>
                      <span className={styles.title}>Размеры: </span>
                      {product.size} см.
                    </span>
                    <span>
                      <span className={styles.title}>Объем: </span>
                      {product.volume} литров
                    </span>
                    <span>
                      <span className={styles.title}>Количество слоев: </span>
                      {product.layer}
                    </span>
                  </div>
                  <div className={styles.column}>
                    <span>
                      <span className={styles.title}>Материал: </span>пластик
                    </span>
                    <span>
                      <span className={styles.title}>Цвет: </span>
                      {product.color}
                    </span>
                    <span>
                      <span className={styles.title}>
                        Страна производства:{" "}
                      </span>
                      Узбекистан
                    </span>
                  </div>
                </div>
                <span style={{ paddingTop: "1em" }}>
                  Для консультации по товару, пожалуйста, свяжитесь по
                  указанному номеру
                  <a href="tel:+77017100806"> +7 (701) 710-08-06</a>
                </span>
              </div>
              <div className={`${styles.discription} ${styles.border_row}`}>
                <div className={styles.main_title}>
                  <MdOutlinePropaneTank />
                  <span>Описание</span>
                </div>
                <span>{product.discription}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
