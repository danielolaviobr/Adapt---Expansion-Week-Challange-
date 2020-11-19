import React, { useCallback, useState } from "react";
import {
  Text,
  Container,
  PageBackground,
  PageVideoBackground,
  PageFooterBackground,
} from "./styles";

import Contact from "../../components/Contact";
import Info from "../../components/Info";
import Transformer from "../../components/Transformer";
import Triangle from "../../components/GeoForms/Triangle";
import Circle from "../../components/GeoForms/Circle";
import Square from "../../components/GeoForms/Square";

const Main: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleModalClose = useCallback(async () => {
    setIsModalOpen(false);
  }, []);

  return (
    <Container>
      <PageVideoBackground>
        <video className="videoTag" autoPlay loop muted>
          <source
            src="https://firebasestorage.googleapis.com/v0/b/mestredeobra-be796.appspot.com/o/webVideo.webm?alt=media&token=f833e4cd-2d38-49b0-8586-ac43690763b7"
            type="video/webm"
          />
        </video>
        <Text numberOfChilds={2}>
          <span>Adapt.</span>
          <span>Overcome.</span>
        </Text>
      </PageVideoBackground>
      <PageBackground>
        <Info
          modalState={isModalOpen}
          handleModalOpen={handleModalOpen}
          handleModalClose={handleModalClose}
        />
        <Transformer />
        <Triangle
          left={1000}
          top={600}
          rotate={70}
          color={"#ec20ff"}
          scale={0.5}
        />
        <Circle left={15} top={120} color={"#05f"} scale={1} />
        <Square
          left={800}
          top={320}
          color={"#8338ec"}
          scale={1.2}
          rotate={70}
        />
        <Triangle
          left={250}
          top={820}
          rotate={10}
          color={"#70e000"}
          scale={0.8}
        />
      </PageBackground>
      <PageFooterBackground>
        <div className="text">
          <h1>Se inscreva em nossa</h1> <h1>newsletter</h1>
        </div>
        <Contact />
      </PageFooterBackground>
    </Container>
  );
};

export default Main;
