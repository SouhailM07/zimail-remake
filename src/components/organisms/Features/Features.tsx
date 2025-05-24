"use client";
import SectionHeader from "@/components/atoms/SectionHeader/SectionHeader";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import my_media from "@/lib/media";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsCameraVideoFill } from "react-icons/bs";
import { FaCloud, FaLock } from "react-icons/fa";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { LuTabletSmartphone } from "react-icons/lu";

export default function Features() {
  const t = useTranslations("Features");
  const features_1: { icon: any }[] = [
    { icon: <LuTabletSmartphone /> },
    { icon: <FaCloud /> },
    { icon: <FaHeadphonesSimple /> },
  ];
  const features_2: { icon: any }[] = [
    { icon: <IoIosPeople /> },
    { icon: <FaLock /> },
    { icon: <BsCameraVideoFill /> },
  ];
  const slides: { img: any }[] = [
    { img: my_media.feature_slide_1 },
    { img: my_media.feature_slide_2 },
    { img: my_media.feature_slide_3 },
    { img: my_media.feature_slide_4 },
    { img: my_media.feature_slide_5 },
    { img: my_media.feature_slide_6 },
  ];
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <section className="max-w-[60rem] mx-auto  ">
      <SectionHeader title="Zimail Features" />
      <article className="grid grid-cols-3 max-lg:grid-cols-1 place-items-center max-md:gap-y-[0.4rem]">
        <FeaturesList features={features_1} />
        <div className="drop-shadow-2xl  rounded-2xl max-lg:row-[1]">
          <Carousel
            // opts={{ loop: true }}
            setApi={setApi}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent className="p-0! m-0! rounded-2xl  w-[16rem] h-[28rem] ">
              {slides.map((e, i) => (
                <CarouselItem
                  key={i}
                  className="flexCenter w-full h-full p-0! m-0! "
                >
                  <Image
                    width={1400}
                    height={1400}
                    className="h-full w-full rounded-2xl  object-fit "
                    src={e.img}
                    alt="logo"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <ul className=" translate-y-[-4rem] flexCenter gap-[1rem] z-[100] relative py-2 text-center text-sm text-muted-foreground">
              {Array(count)
                .fill("")
                .map((_, i) => (
                  <li
                    key={i}
                    onClick={() => {
                      api?.scrollTo(i);
                    }}
                    className={`
                       w-[1.4rem] h-[0.4rem] rounded-md
                      ${
                        current - 1 === i
                          ? "bg-my-primary"
                          : "bg-white border border-my-primary"
                      }
                    )`}
                  ></li>
                ))}
            </ul>
          </Carousel>
        </div>
        <FeaturesList features={features_2} reverseDirection />
      </article>
    </section>
  );
}

const FeaturesList = ({ features, reverseDirection = false }) => {
  const t = useTranslations("Features");
  return (
    <ul
      role="list"
      className="max-md:w-full max-lg:flex-row max-md:flex-col flex flex-col max-md:px-[0.4rem] items-end max-md:gap-y-[0.4rem]  gap-y-[2rem] gap-x-[1rem] max-lg:justify-self-center justify-self-end"
    >
      {features.map((feature, index) => (
        <li
          role="listitem"
          key={index}
          className={cn(
            "flexCenter max-md:rounded-md max-md:drop-shadow-xl bg-white max-lg:h-[10rem] text-center max-md:w-full max-lg:flex-col-reverse max-lg:w-[12rem]  gap-[1.4rem]",
            {
              "self-start":
                (index == 1 && !reverseDirection) || reverseDirection,
              "flex-row-reverse": reverseDirection,
              "self-end": index == 1 && reverseDirection,
            }
          )}
        >
          <span className="uppercase text-[0.88rem] font-medium">
            {reverseDirection?t(`features.${index+3}`):t(`features.${index}`)}
          </span>
          <div className="flexCenter text-[1.6rem] text-white aspect-square min-w-[3.8rem] bg-my-primary rounded-full">
            {feature.icon}
          </div>
        </li>
      ))}
    </ul>
  );
};
