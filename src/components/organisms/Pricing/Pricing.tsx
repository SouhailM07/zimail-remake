import SectionHeader from "@/components/atoms/SectionHeader/SectionHeader";
import { useTranslations } from "next-intl";
import { IoCheckmarkSharp, IoCloseSharp } from "react-icons/io5";

export default function Pricing() {
  const t = useTranslations("Pricing");
  const cards = [
    t.raw("plans.0"),
    t.raw("plans.1"),
    t.raw("plans.2"),
    t.raw("plans.3"),
  ];
  return (
    <section id="pricing" className="px-[1rem] max-sm:px-[0.4rem]">
      <SectionHeader title={t("title")} subtitle={t("subtitle")} />
      <ul id="pricing_ul" className=" grid max-w-[70rem] gap-[2rem] mx-auto ">
        {/* {t("plans.0.title")} */}
        {cards.map((plan, idx) => (
          <li
            key={idx}
            className={`${
              idx % 2 == 0
                ? "bg-white "
                : "bg-gradient-to-br from-orange-500 to-red-500 text-white"
            }  hover:scale-105 duration-200 rounded-sm flex justify-between flex-col p-6 drop-shadow-2xl`}
          >
            <div>
              <h1 className="text-[1.6rem] font-bold">{plan.title}</h1>
              <p className="text-lg mt-2">{plan.monthly} / MONTH</p>
              <p className="text-sm mb-4">{plan.yearly} / YEAR</p>
              <ul className="space-y-2 mb-4 max-sm:text-[0.8rem] text-[0.88rem] ">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {feature.included ? (
                      <IoCheckmarkSharp className="text-green-300 min-w-[1.2rem] text-[1.2rem]" />
                    ) : (
                      <IoCloseSharp className="text-red-300 min-w-[1.2rem] text-[1.2rem]" />
                    )}
                    <span>{feature.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className={`${idx % 2 == 0 && "border border-my-primary "}
              " self-end bg-white  text-orange-500 px-4 py-2 rounded hover:bg-my-accent hover:text-white`}
            >
              {t("purchase")}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
