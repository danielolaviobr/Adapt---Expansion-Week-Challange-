import styled, { css } from "styled-components";

interface TextProps {
  numberOfChilds: 2 | 3;
}

export const Container = styled.div``;

export const PageVideoBackground = styled.div`
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow-x: hidden;

  video {
    position: absolute;

    width: auto;
    height: auto;

    min-width: 100%;
    min-height: 100%;

    max-width: 100vw;
    max-height: 100vh;
    filter: grayscale(100%);

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
  }
`;

export const PageBackground = styled.div`
  overflow: hidden;

  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;

  padding: 0 160px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PageFooterBackground = styled.div`
  overflow-x: hidden;
  width: 100vw;
  height: 60vh;
  background: linear-gradient(135deg, #05f, #09f);
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: grayscale(100%);

  div.text:first-child {
    padding: 8px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    border-radius: 5px;
  }

  h1 {
    font-size: 48px;
    color: #fff;
    font-weight: bold;
    letter-spacing: -2px;
  }

  h1 + h1 {
    padding-left: 10px;

    @keyframes newsletterAnimation {
      0% {
        filter: brightness(0) invert(1);
      }

      50% {
        filter: none;
      }
    }

    color: #000;
  }
`;

export const Text = styled.div<TextProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }

    90% {
      opacity: 1;
    }
  }

  animation: fadeInAnimation 1s ease-in;

  span {
    font-size: 128px;
    font-weight: bold;
    letter-spacing: -10px;
    padding: 0 5px;

    filter: brightness(0) invert(1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: colorCycle 10s ease-in-out infinite;
  }

  @keyframes colorCycle {
    0%,
    55% {
      filter: brightness(0) invert(1);
    }
    11%,
    33% {
      filter: none;
    }
  }

  ${(props) =>
    props.numberOfChilds === 3
      ? css`
          span:nth-child(1) {
            background-image: linear-gradient(90deg, #89f7fe, #66a6ff);
          }
          span:nth-child(2) {
            background-image: linear-gradient(90deg, #2af598, #f9f047);
            animation-delay: 3.33s;
          }
          span:nth-child(3) {
            background-image: linear-gradient(90deg, #f83600, #f9d423);
            animation-delay: 6.66s;
          }
        `
      : css`
          span:nth-child(1) {
            background-image: linear-gradient(135deg, #05f, #09f);
          }
          span:nth-child(2) {
            background-image: linear-gradient(135deg, #2af598, #f9f047);
            animation-delay: 5s;
          }
        `}
`;
