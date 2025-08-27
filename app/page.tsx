import Camp from "@/Components/Camp";
import Feature from "@/Components/Feature";
import GetApp from "@/Components/GetApp";
import Guide from "@/Components/Guide";
import Hero from "@/Components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Camp/>
      <Guide/>
      <Feature/>
      <GetApp/>

    </div>
  );
}
