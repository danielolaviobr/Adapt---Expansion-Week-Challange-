import React from "react";

import { Container } from "./styles";
import { text1, text2 } from "./infoText";
import Modal from "../Modal";
import { AnimatePresence } from "framer-motion";

interface InfoProps {
  handleModalClose(): void;
  handleModalOpen(): void;
  modalState: boolean;
}

const Info: React.FC<InfoProps> = ({
  handleModalOpen,
  handleModalClose,
  modalState,
}) => {
  return (
    <>
      <Container>
        <h1>Adaptabilidade</h1>

        <br />
        <p>{text1}</p>
        <br />
        <p>{text2}</p>
        <br />
        <button onClick={handleModalOpen}>
          <span>Ler mais</span>
        </button>
      </Container>
      <AnimatePresence>
        {modalState && <Modal handleModalClose={handleModalClose} />}
      </AnimatePresence>
    </>
  );
};

export default Info;
