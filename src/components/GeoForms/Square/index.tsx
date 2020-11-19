import React from "react";
import { Container, SquareBody } from "./styles";

interface SquareProps {
  left: number;
  top: number;
  rotate: number;
  color: string;
  scale: number;
}

const Square: React.FC<SquareProps> = ({ left, top, rotate, color, scale }) => {
  return (
    <Container left={left} top={top} rotate={rotate}>
      <SquareBody color={color} scale={scale} />
    </Container>
  );
};

export default Square;
