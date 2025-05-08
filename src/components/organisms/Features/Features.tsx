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
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsCameraVideoFill } from "react-icons/bs";
import { FaCloud, FaLock } from "react-icons/fa";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { LuTabletSmartphone } from "react-icons/lu";

export default function Features() {
  const features_1: { label: string; icon: any }[] = [
    { label: "cross-platform", icon: <LuTabletSmartphone /> },
    { label: "cloud storage", icon: <FaCloud /> },
    { label: "Great Support Team", icon: <FaHeadphonesSimple /> },
  ];
  const features_2: { label: string; icon: any }[] = [
    { label: "Powerful ecosystem", icon: <IoIosPeople /> },
    { label: "Secure communication", icon: <FaLock /> },
    { label: "Videoconferencing (Coming Soon)", icon: <BsCameraVideoFill /> },
  ];
  const slides: { img: any }[] = [
    { img: my_media.feature_slide_1 },
    { img: my_media.feature_slide_2 },
    { img: my_media.feature_slide_3 },
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
      <SectionHeader title="Awesome Features" />
      <article className="grid grid-cols-3 place-items-center">
        <FeaturesList features={features_1} />
        <div className="drop-shadow-2xl  rounded-2xl ">
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
  return (
    <ul className="flex flex-col items-end gap-y-[2rem] justify-self-end">
      {features.map((feature, index) => (
        <li
          key={index}
          className={cn("flexCenter gap-[1.4rem]", {
            "self-start": (index == 1 && !reverseDirection) || reverseDirection,
            "flex-row-reverse": reverseDirection,
            "self-end": index == 1 && reverseDirection,
          })}
        >
          <span className="uppercase text-[0.88rem] font-medium">
            {feature.label}
          </span>
          <div className="flexCenter text-[1.6rem] text-white aspect-square min-w-[3.8rem] bg-my-primary rounded-full">
            {feature.icon}
          </div>
        </li>
      ))}
    </ul>
  );
};
