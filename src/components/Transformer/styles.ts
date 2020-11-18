import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  margin-left: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  flex: 1;

  h1 {
    font-weight: bold;
    font-size: 36px;
  }
`;

export const Transform = styled(motion.div)`
  margin-top: 40px;

  height: 200px;
  width: 200px;

  z-index: 1;
  background: #70e000;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  span {
    font-weight: 500;
    font-size: 32px;
  }
`;
