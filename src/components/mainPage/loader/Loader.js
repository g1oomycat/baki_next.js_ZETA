import styles from "./loader.module.scss";
import Image from "next/image";
import logoWithStar from "../../../../public/logoWithStar.svg";
import logoJIP from "../../../../public/logoJIP.svg";
import bg from "../../../../public/bg.webp";
import ButtonScrollToAbout from "./comp/ButtonScrollToAbout";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className="_cont_limit">
        <div className={styles.body}>
          <div className={styles.wrapper_flex}>
            <div className={styles.column}>
              <div className={styles.name_loader}>
                <div className={styles.title_loader}>
                  <h1>Пластиковые ёмкости</h1>
                </div>
                <div className={styles.title_loader}>
                  <h2>Для жидкостей</h2>
                </div>
              </div>
              <div className={styles.subname_loader}>
                <h2>
                  Магазины ZETA рады представить новинку – пластиковые емкости
                  для удобного хранения и транспортировки различных жидкостей.
                  Разнообразие размеров и форм обеспечивает широкий выбор.
                </h2>
              </div>
              <div className={styles.but_logo}>
                <ButtonScrollToAbout />
                <div className={styles.logs}>
                  <span>
                    <Image src={logoWithStar} alt="logoZETA" />
                  </span>
                  <span>
                    <Image src={logoJIP} alt="logoJIP" />
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.column}>
              <div className="bg_blur">
                <Image src={bg} alt="bg_blur" placeholder="blur" />
              </div>
              <div className="mask"></div>

              <video playsInline loop muted autoPlay preload="auto">
                <source src={"./about.mp4"} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
