import { motion } from "framer-motion";
import React from "react";
import {
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  text9,
  text10,
} from "../Info/infoText";

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
        <div className="text">
          <br />
          <motion.p>{text1}</motion.p>
          <br />
          <motion.p>{text2}</motion.p>
          <br />
          <motion.p>{text3}</motion.p>
          <br />
          <motion.p>{text4}</motion.p>
          <br />
          <motion.p>{text5}</motion.p>
          <br />
          <motion.p>{text6}</motion.p>
          <br />
          <motion.p>{text7}</motion.p>
          <br />
          <motion.p>{text8}</motion.p>
          <br />
          <motion.p>{text9}</motion.p>
          <br />
          <motion.p>{text10}</motion.p>
          <br />
        </div>
      </ModalBackground>
    </Container>
  );
};

export default Modal;
