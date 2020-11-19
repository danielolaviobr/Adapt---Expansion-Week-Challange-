import styled from "styled-components";

interface ContainerProps {
  left: number;
  top: number;
}

interface CircleBodyProps {
  color: string;
  scale: number;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;

  z-index: 0;
  overflow-x: visible;
  overflow-y: visible;
`;

export const CircleBody = styled.div<CircleBodyProps>`
  overflow-x: visible;
  overflow-y: visible;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  background-color: ${(props) => props.color};
  transform: scale(${(props) => props.scale});
`;
