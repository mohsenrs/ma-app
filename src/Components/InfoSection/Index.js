import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";

const InfoSection = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>topline</TopLine>
                <Heading>heading</Heading>
                <Subtitle>subtitle</Subtitle>
                <BtnWrap>
                  <Button variant="info" to="home">
                    Button
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
