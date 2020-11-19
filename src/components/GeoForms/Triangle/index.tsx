import React from "react";
import { Container, TriangleBody } from "./styles";

interface TriangleProps {
  left: number;
  top: number;
  rotate: number;
  color: string;
  scale: number;
}

const Triangle: React.FC<TriangleProps> = ({
  left,
  top,
  rotate,
  color,
  scale,
}) => {
  return (
    <Container left={left} top={top} rotate={rotate}>
      <TriangleBody color={color} scale={scale} />
    </Container>
  );
};

export default Triangle;
