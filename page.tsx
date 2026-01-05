import Hero from "@/components/home/Hero";
import Manifesto from "@/components/home/Manifesto";
import Areas from "@/components/home/Areas";
import FeaturedPosts from "@/components/home/FeaturedPosts";
import Author from "@/components/home/Author";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Manifesto />
      <Areas />
      <FeaturedPosts />
      <Author />
      <FinalCTA />
    </main>
  );
}
