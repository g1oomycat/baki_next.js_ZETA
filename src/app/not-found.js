import Link from "next/link";
import styles from "./notFound.module.scss";

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        <h1>404 | Страница не найдена</h1>
        <Link href={"/"}>Перейти на главную страницу</Link>
      </div>
    </div>
  );
}
