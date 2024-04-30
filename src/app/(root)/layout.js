import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import url from "url";

export const metadata = {
  title: "Пластиковые емкости ZETA",
  description:
    "Пластиковые емкости ZETA - идеальные баки и бочки для жидкостей. Купите качественные емкости в Алматы и обеспечьте надежное хранение.",
  openGraph: {
    title: `Пластиковые емкости ZETA`,
    description: `Пластиковые емкости ZETA - идеальные баки и бочки для жидкостей. Купите качественные емкости в Алматы и обеспечьте надежное хранение.`,
    siteName: "Пластиковые емкости ZETA",
    images: [
      {
        url: url.resolve(process.env.NEXT_PUBLIC_BASE_URL, `/og_image.jpeg`), // Must be an absolute URL
        width: 600,
        height: 800,
        alt: `Ассортимент баков`,
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
};
export default function Layot({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
