import Features from "@/components/organisms/Features/Features";
import Footer from "@/components/organisms/Footer/Footer";
import Hero from "@/components/organisms/Hero/Hero";
import Navbar from "@/components/organisms/Navbar/Navbar";
import Pricing from "@/components/organisms/Pricing/Pricing";
import WhyZimail from "@/components/organisms/WhyZimail/WhyZimail";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <main className="space-y-[10rem]">
        <Hero />
        <WhyZimail />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
