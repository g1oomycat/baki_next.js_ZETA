import styles from "../catalog.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { transliterateToLatin } from "@/functions/URLchpu";
import { addSpacesToPrice } from "@/functions/addSpacesToPrice";
import Image from "next/image";

const textAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: "10%",
  },
  visible: { opacity: 1, scale: 1, y: "0%", transition: { duration: 0.1 } },
};

const CardsProduct = ({ filteredTanksList, sizeOnePage, indexPage }) => {
  return (
    <div className={styles.cards_menu}>
      {filteredTanksList
        .slice(sizeOnePage * (indexPage - 1), sizeOnePage * indexPage)
        .map((tank) => (
          <CardProduct tank={tank} key={tank.id} />
        ))}
    </div>
  );
};

const CardProduct = ({ tank }) => {
  return (
    <Link
      href={`/product/${transliterateToLatin(
        `${tank.name}-${tank.volume}-литров-${tank.id}`
      )}`}
    >
      {/* <motion.div
      className={styles.card}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: 1 }}
      variants={textAnimation}
    > */}
      <div className={styles.card}>
        <div className={styles.card_img}>
          <Image
            src={`/foto_cards/${tank.img}`}
            alt={tank.name}
            placeholder="blur"
            fill={true}
            blurDataURL={`/foto_cards/${tank.img}`}
          />
        </div>

        <div className={styles.price}>
          <h3>{addSpacesToPrice(tank.price)} ₸</h3>
        </div>
        <div className={styles.name}>
          <h3>{tank.name}</h3>
        </div>
        <div className={styles.volume}>
          <h4>{tank.volume} литров</h4>
        </div>
        <div className={styles.size_layer}>
          <div className={styles.size}>
            <h5>{tank.size} см</h5>
          </div>
          <div className={styles.layer}>
            <h5>
              {tank.layer} {tank.layer === 1 ? "слой" : "слоя"}
            </h5>
          </div>
        </div>

        <Link
          href={`/product/${transliterateToLatin(
            `${tank.name}-${tank.volume}-литров-${tank.id}`
          )}`}
        >
          <button>Подробнее</button>
        </Link>
      </div>
      {/* </motion.div> */}
    </Link>
  );
};
export default CardsProduct;
