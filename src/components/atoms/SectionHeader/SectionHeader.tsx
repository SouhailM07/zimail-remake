export default function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <article className="text-center mb-[4rem]">
      <h1 className="text-[1.8rem] font-bold">{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
      <hr className="bg-my-primary h-[0.4rem] rounded-md mt-4 w-[6rem] mx-auto" />
    </article>
  );
}
