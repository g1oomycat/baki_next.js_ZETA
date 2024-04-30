"use client";
import { scrollToElement } from "@/functions/scrollToElement";
import { FaArrowRightLong } from "react-icons/fa6";

const ButtonScrollToAbout = () => {
  return (
    <button onClick={() => scrollToElement("about")}>
      Подробнее о JIP
      <FaArrowRightLong />
    </button>
  );
};

export default ButtonScrollToAbout;
