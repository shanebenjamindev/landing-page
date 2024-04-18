"use client";
import Camp from "@/components/Camp/Camp";
import Feature from "@/components/Feature/Feature";
import Footer from "@/components/Footer/Footer";
import GetApp from "@/components/GetApp/GetApp";
import Guilde from "@/components/Guilde/Guilde";
import Hero from "@/components/Hero/Hero";
import ImageList from "@/components/ImageList/ImageList";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
      <Hero />
      <Camp />
      <Guilde />
      <Feature />
      <GetApp />
      <Footer />
    </>
  );
}
