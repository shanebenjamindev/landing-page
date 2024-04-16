import Camp from "@/components/Camp/Camp";
import Feature from "@/components/Feature/Feature";
import GetApp from "@/components/GetApp/GetApp";
import Guilde from "@/components/Guilde/Guilde";
import Hero from "@/components/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guilde />
      <Feature />
      <GetApp />
    </>
  );
}
