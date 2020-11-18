import React from "react";
import { useSpring } from "react-spring";
import { Container, Transform } from "./styles";

const Transformer: React.FC = () => {
  return (
    <Container>
      <h1>Transforme-se</h1>
      <Transform
        whileHover={{
          scale: 1.2,
          rotate: 90,
          backgroundColor: "#3a86ff",
          color: "transparent",
        }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: "100%",
          backgroundColor: "#8338ec",
          color: "transparent",
        }}
      >
        <span>Você</span>
      </Transform>
    </Container>
  );
};

export default Transformer;
