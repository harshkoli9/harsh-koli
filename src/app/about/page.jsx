"use client";

import Education from "@/components/aboutme/education/education";
import Experience from "@/components/aboutme/experience/experience";
import Hero from "@/components/aboutme/hero/hero";
import Navbar from "@/components/layout/navbar/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Experience/>
      <Education/>
      

     
    </>
  );
}
