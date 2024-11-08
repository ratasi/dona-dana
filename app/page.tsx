import HeroBlock from "./(routes)/components/HeroBlock/HeroBlock";
import { Navbar } from "./(routes)/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      <HeroBlock />
    </div>
  );
}
