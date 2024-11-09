import { Navbar } from "@/components/Shared/Navbar";

import HeroBlock from "./(routes)/components/HeroBlock/HeroBlock";
import { NeedHelp } from "./(routes)/components/NeedHelp";
import { WhyWeDoThat } from "./(routes)/components/WhyWeDoThat";

export default function Home() {
  return (
    <div>
      <Navbar />

      <HeroBlock />

      <NeedHelp />

      <WhyWeDoThat />
    </div>
  );
}
