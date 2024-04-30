import About from "@/components/mainPage/about/About";
import Catalog from "@/components/mainPage/catalog/Catalog";
import Loader from "@/components/mainPage/loader/Loader";

export default function Home() {
  return (
    <>
      <Loader />
      <Catalog />
      <About />
    </>
  );
}
