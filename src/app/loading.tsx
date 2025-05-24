import Image from "next/image";
import loadingImg from "/public/preloader.svg";

export default function Loading() {
  return (
    <div className="flexCenter h-screen">
      <Image src={loadingImg} alt="loading img" height={140} width={140} />
    </div>
  );
}
