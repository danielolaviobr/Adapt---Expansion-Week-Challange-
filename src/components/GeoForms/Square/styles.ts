import styled from "styled-components";

interface ContainerProps {
  left: number;
  top: number;
  rotate: number;
}

interface SquareBodyProps {
  color: string;
  scale: number;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  transform: rotateZ(${(props) => props.rotate}deg);
  overflow: visible;
  z-index: 0;
`;

export const SquareBody = styled.div<SquareBodyProps>`
  height: 100px;
  width: 100px;
  border-radius: 30px;
  background-color: ${(props) => props.color};
  transform: scale(${(props) => props.scale});
`;
