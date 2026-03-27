"use client";

import HeroBanner from "@/components/contact/hero/hero";
import ContactCard from "@/components/contact/information/info";
import Skills from "@/components/home/skills/skills";
import Navbar from "@/components/layout/navbar/navbar";

export default function Home() {
  return (
    <>
        <Navbar />
        <Skills/>
    </>
  );
}
