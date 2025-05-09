"use client";
import Image from "next/image";
import my_media from "@/lib/media";
import { useScroll, useTransform, motion } from "framer-motion";
import { IoLanguage } from "react-icons/io5";
import MyPopover from "@/components/atoms/MyPopover/MyPopover";
import NavbarMobile from "../NavbarMobile/NavbarMobile";

export default function Navbar() {
  const { scrollY } = useScroll();
  const threshold = 260;
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
  const menuItems = ["Home", "Features", "Pricing", "Testimonials"];

  return (
    <header className="z-[10] w-full fixed top-0 py-4 px-[0.4rem] md:px-[1rem]  ">
      <motion.nav
        style={{
          maxWidth: width,
          backgroundColor: bgColor,
          borderColor: borderSlide,
        }}
        className="flexBetween border-2  rounded-md  px-[1rem] md:px-[2rem]  mx-auto"
      >
        <Image
          src={my_media.logo_1}
          width={500}
          height={500}
          alt="logo"
          className="size-[4rem]"
        />
        <ul role="list" className="space-x-[2.4rem] max-lg:hidden">
          {menuItems.map((item, index) => (
            <li
              role="listitem"
              key={index}
              className="inline-block text-white hover:text-my-accent  "
            >
              <a
                aria-label={"link to" + item}
                href={`#${item.toLowerCase()}`}
                className=""
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="flexCenter gap-x-[1rem]">
          <MyPopover
            trigger={
              <button className="cursor-pointer drop-shadow-2xl text-white flexCenter  gap-2 bg-my-primary py-[0.8rem] px-[1.2rem] rounded-md">
                <IoLanguage />
                <span className="text-[0.8rem]">EN</span>
              </button>
            }
          >
            <ul className="w-[5rem] space-y-2 text-center">
              <li className="text-my-text hover:text-my-accent cursor-pointer">
                <a href="#fr">FR</a>
              </li>
              <li className="text-my-text hover:text-my-accent cursor-pointer">
                <a href="#ar">AR</a>
              </li>
            </ul>
          </MyPopover>
          <NavbarMobile />
        </div>
      </motion.nav>
    </header>
  );
}
