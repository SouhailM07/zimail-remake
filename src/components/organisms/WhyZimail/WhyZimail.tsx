import SectionHeader from "@/components/SectionHeader/SectionHeader";
import my_media from "@/lib/media";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaArrowsRotate } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdStorage } from "react-icons/md";

export default function WhyZimail() {
  const whyList: { title: string; icon: any; subtitle: string }[] = [
    {
      title: "Fully Responsive",
      icon: <IoIosPhonePortrait />,
      subtitle: "Zimail is fully responsive and works on all devices.",
    },
    {
      title: "Realtime synchronization",
      icon: <FaArrowsRotate />,
      subtitle: "Real-time synchronization using MAPI,ActivSync protocols.",
    },
    {
      title: "Flexible secure storage",
      icon: <MdStorage />,
      subtitle:
        "Data sovereignty is assured, stored in our servers which are located in Algeria.",
    },
  ];
  return (
    <section className="max-w-[60rem] mx-auto  ">
      <SectionHeader title="Why Zimail" />
      <article>
        <ul className="grid grid-cols-3 gap-x-[1.4rem]  place-items-center">
          {whyList.map((item, index) => (
            <li
              key={index}
              className={cn(
                " w-full flex h-[12rem] flex-col p-[1rem] rounded-md bg-white overflow-hidden drop-shadow-2xl",
                { "bg-my-primary text-white": index % 2 !== 0 }
              )}
            >
              <div className="space-y-[2.8rem] ">
                <div className="flexBetween gap-x-2">
                  <h1 className="text-[1.2rem]">{item.title}</h1>
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
                  {item.subtitle}
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
