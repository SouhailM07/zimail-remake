import MySheet from "@/components/molecules/MySheet/MySheet";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";

export default function NavbarMobile() {
  const t = useTranslations("Navbar");
  const menuItems = [
    { label: "home", link: "home" },
    { label: "features", link: "features" },
    { label: "pricing", link: "pricing" },
    { label: "testimonials", link: "testimonials" },
  ];
  return (
    <MySheet
      title="Menu"
      trigger={
        <button
          aria-label="toggle menu item"
          className="hidden! max-lg:block! cursor-pointer text-white flexCenter  gap-2 bg-my-primary py-[0.88rem] px-[1.2rem] rounded-md"
        >
          <FaBars />
        </button>
      }
    >
      <ul className="p-[1rem] space-y-[1.6rem] text-center">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              aria-label={"link to" + item.link}
              href={`#${item.link}`}
              className=""
            >
              {t(item.label)}
            </Link>
          </li>
        ))}
      </ul>
    </MySheet>
  );
}
