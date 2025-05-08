import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Tester() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <div className="space-x-[3rem]">
        <Link href="/en">English</Link>
        <Link href="/fr">francais</Link>
      </div>
    </div>
  );
}
