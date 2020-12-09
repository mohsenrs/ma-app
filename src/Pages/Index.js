import { useState } from "react";
import Navbar from "./../Components/Navbar/Index";
import Sidebar from "./../Components/Sidebar/Index";
import HeroSection from "./../Components/HeroSection/Index";
import InfoSection from "./../Components/InfoSection/Index";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection />
    </>
  );
};

export default Home;
