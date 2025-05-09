import MySheet from "@/components/molecules/MySheet/MySheet";
import { FaBars } from "react-icons/fa6";

export default function NavbarMobile() {
  const menuItems = ["Home", "Features", "Pricing", "Testimonials"];
  return (
    <MySheet
      title="Menu"
      trigger={
        <button aria-label="toggle menu item" className="hidden! max-lg:block! cursor-pointer text-white flexCenter  gap-2 bg-my-primary py-[0.88rem] px-[1.2rem] rounded-md">
          <FaBars />
        </button>
      }
    >
      <ul className="p-[1rem] space-y-[1.6rem] text-center">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={`#${item.toLowerCase()}`} className="">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </MySheet>
  );
}
