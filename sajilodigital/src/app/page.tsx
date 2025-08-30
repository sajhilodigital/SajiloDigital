import CardCarousel from "@/components/CardCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen w-full">
      <section>
        Hello HeroSection
        <CardCarousel />
      </section>
    </main>
  );
}
