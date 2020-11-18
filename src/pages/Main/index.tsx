import React, { useCallback, useState } from "react";
import {
  Text,
  Container,
  // Buttons,
  PageBackground,
  PageVideoBackground,
  PageImageBackground,
} from "./styles";

import street from "../../assets/street.png";
import tracks from "../../assets/tracks.png";
import church from "../../assets/church.png";
import Contact from "../../components/Contact";
import Info from "../../components/Info";
import Transformer from "../../components/Transformer";

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
      </PageBackground>
      <PageImageBackground backgroundURL={tracks}>
        <div className="text">
          <h1>Se inscreva em nossa</h1> <h1>newsletter</h1>
        </div>
        <Contact />
      </PageImageBackground>
    </Container>
  );
};

export default Main;
