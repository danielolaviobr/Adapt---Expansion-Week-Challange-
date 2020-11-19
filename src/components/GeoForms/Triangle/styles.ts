import styled from "styled-components";

interface ContainerProps {
  left: number;
  top: number;
  rotate: number;
}

interface TriangleBodyProps {
  color: string;
  scale: number;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  transform: rotateZ(${(props) => props.rotate}deg);

  z-index: 0;
  overflow-x: visible;
`;

export const TriangleBody = styled.div<TriangleBodyProps>`
  overflow-x: visible;
  & {
    position: relative;
    background-color: ${(props) => props.color};
    text-align: left;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    background-color: inherit;
  }
  &,
  &:before,
  &:after {
    width: calc(100px * ${(props) => props.scale});
    height: calc(100px * ${(props) => props.scale});
    border-top-right-radius: 30%;
  }

  & {
    transform: rotate(-60deg) skewX(-30deg) scale(1, 0.866);
  }
  &:before {
    transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707)
      translate(0, -50%);
  }
  &:after {
    transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);
  }
`;
