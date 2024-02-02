import { HeaderNav } from "@/components/organism";
import { AboutSection, HeroSection } from "@/sections";
import React from "react";

export default function Page() {
  return (
    <>
      <HeaderNav />
      <HeroSection />
      <AboutSection />
    </>
  );
}
