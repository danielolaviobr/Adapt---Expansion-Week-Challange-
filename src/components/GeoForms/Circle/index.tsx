import React from "react";
import { Container, CircleBody } from "./styles";

interface TriangleProps {
  left: number;
  top: number;
  color: string;
  scale: number;
}

const Circle: React.FC<TriangleProps> = ({ left, top, color, scale }) => {
  return (
    <Container left={left} top={top}>
      <CircleBody color={color} scale={scale} />
    </Container>
  );
};

export default Circle;
