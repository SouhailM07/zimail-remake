"use client";
import SectionHeader from "@/components/atoms/SectionHeader/SectionHeader";
import my_media from "@/lib/media";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaArrowsRotate } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdStorage } from "react-icons/md";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function WhyZimail() {
  const t = useTranslations("WhyZimail");
  const whyList: { icon: any }[] = [
    {
      icon: <IoIosPhonePortrait />,
    },
    {
      icon: <FaArrowsRotate />,
    },
    {
      icon: <MdStorage />,
    },
  ];
  return (
    <section className="max-w-[60rem] mx-auto  ">
      <SectionHeader title={t("title")} />
      <article>
        <ul
          role="list"
          className="flexCenter w-full flex-wrap  gap-[1.4rem] px-[1rem] max-sm:px-[0.4rem]  place-items-center"
        >
          {whyList.map((item, index) => (
            <li
              role="listitem"
              key={index}
              className={cn(
                "  flex w-full md:w-[18rem] h-[12rem] flex-col p-[1rem] rounded-md bg-white overflow-hidden drop-shadow-2xl",
                { "bg-my-primary text-white": index % 2 !== 0 }
              )}
            >
              <div className="space-y-[2.8rem] ">
                <div className="flexBetween gap-x-2">
                  <h1 className="text-[1.2rem]">{t(`cards.${index}.title`)}</h1>
                  <span
                    className={cn(
                      "bg-my-primary text-white p-[0.8rem] rounded-full text-[1.6rem]",
                      { "bg-white text-black": index % 2 !== 0 }
                    )}
                  >
                    {item.icon}
                  </span>
                </div>
                <p className="z-[2] relative text-[0.8rem] text-my-text">
                  {t(`cards.${index}.subtitle`)}
                </p>
              </div>
              <Image
                src={my_media.logo_3}
                alt="logo"
                height={300}
                width={300}
                className="absolute size-[10rem] self-end translate-y-[2rem] translate-x-[2rem] opacity-20"
              />
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
