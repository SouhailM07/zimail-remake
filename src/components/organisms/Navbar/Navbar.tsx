"use client";
import Image from "next/image";
import my_media from "@/lib/media";
import { useScroll, useTransform, motion } from "framer-motion";
import { IoLanguage, IoShieldSharp } from "react-icons/io5";

export default function Navbar() {
  const { scrollY } = useScroll();
  const threshold = 400;
  const bgColor = useTransform(
    scrollY,
    [0, threshold, threshold + 1],
    ["transparent", "transparent", "#00000080"]
  );

  const borderSlide = useTransform(
    scrollY,
    [0, threshold, threshold + 1],
    ["transparent", "transparent", "#fa5923"]
  );
  const width = useTransform(
    scrollY,
    [0, threshold, threshold + 1],
    ["70rem", "70rem", "54rem"]
  );
  //
  const menuItems = [
    "Home",
    "Features",
    "Screenshots",
    "Pricing",
    "Testimonials",
  ];

  return (
    <header className="z-[100] w-full fixed top-0 py-4  ">
      <motion.nav
        style={{ width, backgroundColor: bgColor, borderColor: borderSlide }}
        className="flexBetween border-2  rounded-md px-[2rem] max-w-[70rem] mx-auto"
      >
        <Image
          src={my_media.logo_1}
          width={500}
          height={500}
          alt="logo"
          className="size-[4rem]"
        />
        <ul className="space-x-[2.4rem]">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="inline-block text-white hover:text-my-accent  "
            >
              <a href={`#${item.toLowerCase()}`} className="">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button className="text-white flexCenter gap-2 bg-my-primary py-[0.8rem] px-[1.2rem] rounded-md">
          <IoLanguage />
          <span className="text-[0.8rem]">EN</span>
        </button>
      </motion.nav>
    </header>
  );
}
