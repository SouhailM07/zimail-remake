"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import my_media from "@/lib/media";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function MyCarousel() {
  const slides: { img: any }[] = [
    { img: my_media.slider_1 },
    { img: my_media.slider_2 },
    { img: my_media.slider_3 },
  ];
  return (
    <Carousel
    // opts={{ loop: true }}
    // plugins={[
    //   Autoplay({
    //     delay: 2000,
    //   }),
    // ]}
    >
      <CarouselContent className=" p-0! m-0!  w-full h-screen ">
        {slides.map((e, i) => (
          <CarouselItem key={i} className="flexCenter w-full h-full p-0! m-0!">
            <Image
              width={1400}
              height={1400}
              className="h-full w-full object-cover"
              src={e.img}
              alt="logo"
            />
            <article className="select-none space-y-[2rem] absolute text-white h-full flex-col w-full bg-my-primary/40 flexCenter text-center">
              <h1 className="text-[2.4rem] font-bold">Zimail</h1>
              <h2>
                A complete mailing system based on zimbra, hosted in Algeria
              </h2>
            </article>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
