"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import styles from "./header.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToElement } from "../../functions/scrollToElement";
import Link from "next/link";

export const headertAnimation = {
  initial: { y: "-100%" },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.5,
    },
  },
  exit: {
    y: "-100%",
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.3,
    },
  },
};

const Header = () => {
  const pathname = usePathname();
  //анимации хеадера при скролле
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const isInitialRender = useRef(true);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setVisible(!isScrollingDown || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  // Пропустить первоначальную проверку рендеринга
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          className={styles.header}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={headertAnimation}
        >
          <div className="_cont_limit">
            <div className={styles.heder_body}>
              <div className={styles.logo}>
                <Link href={`/`}>
                  <img src={"/logoWithStar.svg"} alt="logoZeta" />
                </Link>
              </div>
              <div className={styles.menu_list}>
                {/* делается проверка, если страница домашняя то будет плавный скролл до элементов */}
                {pathname === "/" ? (
                  <>
                    <button
                      className={styles.menu_item}
                      onClick={() => scrollToElement("about")}
                    >
                      О нас
                    </button>
                    <button
                      className={styles.menu_item}
                      onClick={() => scrollToElement("catalog")}
                    >
                      Продукция
                    </button>
                  </>
                ) : (
                  <>
                    <Link className={styles.menu_item} href={"/#about"}>
                      О нас
                    </Link>

                    <Link className={styles.menu_item} href={"/#catalog"}>
                      Продукция
                    </Link>
                  </>
                )}

                <a
                  className={styles.menu_item}
                  href="https://www.zeta.kz/our_stores/"
                >
                  Магазины
                </a>
              </div>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;
