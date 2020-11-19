import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.6);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  overflow-x: visible;
`;

export const ModalBackground = styled(motion.div)`
  height: 576px;
  width: 1024px;

  overflow-x: hidden;
  overflow-y: hidden;
  background: #fff;
  padding: 30px 50px 0px 50px;

  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  overflow: scroll;

  z-index: 11;

  .text {
    height: 78%;
    overflow-x: visible;
    overflow-y: scroll;
    margin-top: 8px;
    margin-bottom: 8px;
    padding: 10px 24px 4px 16px;
  }

  h1 {
    color: #000;
    font-weight: bold;
    font-size: 36px;
    overflow-x: visible;
    z-index: 12;
  }

  p {
    overflow-x: visible;
    color: #000;
    font-weight: 500;
    text-align: justify;
    text-indent: 30px;
    z-index: 12;
    align-self: start;
  }
`;
