import { Montserrat } from "next/font/google";
import "./global.scss";

const mont = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--var-mont",
});

export const metadata = {
  title: "Ошибка 404",
  description:
    "Пластиковые емкости ZETA - идеальные баки и бочки для жидкостей. Купите качественные емкости в Алматы и обеспечьте надежное хранение.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru-RU">
      <body className={mont.variable}>
        <div className="main">{children}</div>
      </body>
    </html>
  );
}
