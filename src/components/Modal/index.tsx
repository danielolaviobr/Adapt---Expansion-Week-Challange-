import { motion } from "framer-motion";
import React from "react";
import { text1, text2 } from "../Info/infoText";

import { Container, ModalBackground } from "./styles";

interface ModalProps {
  handleModalClose(): void;
}

const Modal: React.FC<ModalProps> = ({ handleModalClose }) => {
  const shade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modal = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.15 } },
  };
  return (
    <Container
      onClick={handleModalClose}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={shade}
    >
      <ModalBackground
        onClick={handleModalClose}
        variants={modal}
        transition={{ duration: 0.2 }}
        className="modal-shade"
      >
        <motion.h1>Adaptabilidade</motion.h1>
        <br />
        <motion.p>{text1}</motion.p>
        <br />
        <motion.p>{text2}</motion.p>
        <br />
        <motion.p>{text2}</motion.p>
        <br />
        <motion.p>{text2}</motion.p>
        <br />
        <motion.p>{text2}</motion.p>
        <br />
      </ModalBackground>
    </Container>
  );
};

export default Modal;