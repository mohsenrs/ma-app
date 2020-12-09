import { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import Video from "../../Videos/video.mp4";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Lorem ipsum dolar side</HeroH1>
        <HeroP>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          inventore expedita ratione cum repudiandae reiciendis accusamus illo
          rerum dignissimos sint recusandae aspernatur adipisci distinctio alias
          eum, ad provident blanditiis id.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            variant="success"
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}{" "}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
