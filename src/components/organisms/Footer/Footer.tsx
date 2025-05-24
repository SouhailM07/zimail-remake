import my_media from "@/lib/media";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaFax, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };
  const socialLinks = [
    {
      icon: <FaFacebook className="size-[2rem]" />,
      name: "Facebook",
      url: "https://www.facebook.com/yourpage",
    },
    {
      icon: <FaLinkedin className="size-[2rem]" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yourprofile",
    },
    {
      icon: <FaInstagram className="size-[2rem]" />,
      name: "Instagram",
      url: "https://www.instagram.com/yourprofile",
    },
    {
      icon: <FaTwitter className="size-[2rem]" />,
      name: "Twitter",
      url: "https://twitter.com/yourprofile",
    },
  ];
  const t = useTranslations("Navbar");
  const menuItems = [
    { label: "home", link: "home" },
    { label: "features", link: "features" },
    { label: "pricing", link: "pricing" },
    { label: "testimonials", link: "testimonials" },
  ];

  const contactData = [
    {
      icon: <FaPhone />,
      label: "Fixed:",
      value: "+213 21 999 400",
    },
    {
      icon: <FaEnvelope />,
      value: "contact@adextechnology.dz",
    },
    {
      icon: <FaFax />,
      label: "Fax:",
      value: "+213 23 20 28 77",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Address:",
      value:
        "2nd floor, Technological Park business hotel of Sidi Abdellah, Errahmania, Algiers",
    },
  ];
  return (
    <footer id="footer" className="mt-[4rem] bg-my-primary text-white ">
      <div className="gap-x-[1rem] gap-y-[2rem] max-md:text-center max-md:grid-cols-1 max-md:place-items-center max-lg:grid-cols-2 grid grid-cols-4 px-4 py-8 max-w-[84rem] mx-auto">
        <section>
          <Image
            src={my_media.logo_1}
            className="size-[8rem]"
            height={200}
            width={200}
            alt="logo"
          />
        </section>
        {/*  */}
        <section className="space-y-4">
          <h1 className="text-[1.2rem]">Pages</h1>
          <ul role="list" className="space-y-4 text-[0.8rem] ">
            {menuItems.map((item, index) => (
              <li role="listitem" key={index}>
                <a
                  aria-label={"link to " + item.link}
                  href={`#${item.link}`}
                  className="text-white"
                >
                  {t(item.label)}
                </a>
              </li>
            ))}
          </ul>
        </section>
        {/*  */}
        <section className="space-y-4 w-[14rem]">
          <h1 className="text-[1.2rem]">Contact</h1>
          <ul role="list" className="text-[0.8rem] space-y-2 text-start">
            {contactData.map((item, index) => (
              <li
                role="listitem"
                key={index}
                className="flex items-start gap-2"
              >
                <span className="mt-1 ">{item.icon}</span>
                <span>
                  {item.label && <strong>{item.label} </strong>}
                  {item.value}
                </span>
              </li>
            ))}
          </ul>
        </section>
        <section className="justify-self-stretch space-y-[1.2rem]">
          <h1 className="text-[1.2rem]">Follow Us</h1>
          <ul
            role="list"
            className="  text-white flex gap-[1.4rem] max-md:justify-center"
          >
            {socialLinks.map((link, index) => (
              <a
                role="listitem"
                aria-label={"link to " + link.name}
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-orange-400 transition "
              >
                {link.icon}
              </a>
            ))}
          </ul>
          <div className="space-y-[1rem]">
            <p>Recive latest News</p>
            <form className="text-black rounded bg-white overflow-hidden h-[2.6rem] w-full flex">
              <input
                type="text"
                placeholder="Enter Something"
                className="text-[0.8rem] indent-[0.8rem] outline-none bg-transparent border-none w-full h-full"
              />
              <button className="bg-black text-white h-full aspect-video">
                Send
              </button>
            </form>
          </div>
        </section>
      </div>
      <section className="bg-my-accent text-my-primary text-[0.88rem] h-[4rem] flexCenter">
        <p className="">
          © Copyright <strong> {getYear()} </strong>
          by Adex Technology
        </p>
      </section>
    </footer>
  );
}
