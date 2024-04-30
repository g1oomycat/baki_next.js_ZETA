import styles from "./footer.module.scss";
import logoWithStar from "../../../public/logoWithStar.svg";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { TbBrandTiktok } from "react-icons/tb";
import { FiYoutube } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { LuStore } from "react-icons/lu";
import { MdOutlineContactPhone } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="_cont_limit">
        <div className={styles.body}>
          <div className={styles.rows}>
            <div className={styles.item}>
              <LuStore />
              <a href="https://www.zeta.kz/our_stores/">Наши магазины</a>
            </div>
            <div className={styles.item}>
              <MdOutlineContactPhone />
              <a href="https://www.zeta.kz/contacts/">Контакты</a>
            </div>
            <div className={styles.item}>
              <IoMailOutline />
              <a href="mailto:onlineshop@zeta.kz">onlineshop@zeta.kz</a>
            </div>
            <div className={styles.item}>
              <a href="https://www.instagram.com/zeta.kz/">
                <FaInstagram />
              </a>
              <a href="https://www.tiktok.com/@zeta_kz">
                <TbBrandTiktok />
              </a>
              <a href="https://www.youtube.com/@zeta_kz">
                <FiYoutube />
              </a>
            </div>
            <div className={styles.item}>
              <BsTelephone />
              <a href="tel:+77017100806">+7 (701) 710-08-06</a>
            </div>
          </div>
          <div className={styles.rows}>
            <div className={styles.item}>
              <a href="https://www.zeta.kz/">
                <Image src={logoWithStar} alt="logo" />
              </a>
            </div>

            <div className={styles.item}>
              <a href="https://t.me/Gloomycatt">developed by NasYrov</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
