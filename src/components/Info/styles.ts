import styled from "styled-components";

export const Container = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  flex: 1;
  max-width: 550px;
  min-width: 350px;

  h1 {
    font-weight: bold;
    font-size: 48px;
  }

  p {
    font-weight: 500;
    text-align: justify;
    text-indent: 30px;
  }

  button {
    border: solid 2px #fff;
    border-radius: 5px;
    background: transparent;
    color: #fff;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;

    height: 40px;
    min-width: 300px;

    outline: none;

    &:hover span {
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: linear-gradient(90deg, #98de5b, #08e1ae);
    }

    &:hover {
      background: linear-gradient(to right, #000, #000),
        linear-gradient(90deg, #f83600, #f9d423);
      background-clip: padding-box, border-box;
      background-origin: padding-box, border-box;
    }
  }
`;
