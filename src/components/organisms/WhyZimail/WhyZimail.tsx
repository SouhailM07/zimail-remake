import { IoIosPhonePortrait } from "react-icons/io";

export default function WhyZimail() {
  const whyList: { title: string; icon: any; subtitle: string }[] = [
    {
      title: "Fully Responsive",
      icon: <IoIosPhonePortrait />,
      subtitle: "Zimail is fully responsive and works on all devices.",
    },
    {
      title: "Fully Responsive",
      icon: <IoIosPhonePortrait />,
      subtitle: "Zimail is fully responsive and works on all devices.",
    },
    {
      title: "Fully Responsive",
      icon: <IoIosPhonePortrait />,
      subtitle: "Zimail is fully responsive and works on all devices.",
    },
  ];
  return (
    <section className="space-y-[6rem]">
      <article className="text-center">
        <h1 className="text-[1.8rem] font-bold">Plans & Pricing</h1>
        <h2>Better rates, exceptional people</h2>
      </article>
    </section>
  );
}
