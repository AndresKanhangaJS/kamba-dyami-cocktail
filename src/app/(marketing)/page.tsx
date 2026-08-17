import { HeroSection } from "@/components/sections/HeroSection";
import { SignatureSection } from "@/components/sections/SignatureSection";
import { StorySection } from "@/components/sections/StorySection";
import { FeaturedCocktailSection } from "@/components/sections/FeaturedCocktailSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SignatureSection />
      <StorySection />
      <FeaturedCocktailSection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}
