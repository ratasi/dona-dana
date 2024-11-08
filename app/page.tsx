import HeroBlock from "./(routes)/components/HeroBlock/HeroBlock";
import { Navbar } from "./(routes)/components/Navbar";
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
