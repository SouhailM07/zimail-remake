"use client";
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

export default function MyCarousel() {
  const t = useTranslations("Hero");
  const slides: { img: any; phrase: string }[] = [
    { img: my_media.slider_1, phrase: t("slide_phrase_1") },
    { img: my_media.slider_2, phrase: t("slide_phrase_2") },
    // { img: my_media.slider_3 },
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
    <>
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        id="home"
        className="overflow-hidden "
      >
        <CarouselContent role="list" className=" p-0! m-0!  w-full h-screen ">
          {slides.map((e, i) => (
            <CarouselItem
              role="listitem"
              key={i}
              className="flexCenter w-full h-full p-0! m-0!"
            >
              <Image
                width={1400}
                height={1400}
                className="h-full w-full object-cover"
                src={e.img}
                alt="logo"
              />
              <article className="select-none px-4 space-y-[2rem] absolute text-white h-full flex-col w-full flexCenter text-center">
                <h1 className="text-[2.4rem] font-bold">Zimail</h1>
                <h2>{e.phrase}</h2>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <ul className="translate-y-[-4rem] flexCenter gap-[1rem] z-[10] relative py-2 text-center text-sm text-muted-foreground">
          {Array(count)
            .fill("")
            .map((_, i) => (
              <li
                key={i}
                onClick={() => {
                  api?.scrollTo(i);
                }}
                className={cn("bg-white w-[1.4rem] h-[0.4rem] rounded-md", {
                  "bg-black": current - 1 === i,
                })}
              ></li>
            ))}
          {/* Slide {current} of {count} */}
        </ul>
      </Carousel>
    </>
  );
}
