import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    border: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    color: ${({theme}) => theme.COLORS.WHITE};
    background-color: ${({theme}) => theme.COLORS.BLACK};
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  a, button {
    text-decoration: none;
    cursor: pointer;

    color: ${({theme}) => theme.COLORS.WHITE};
  }

  button:hover, a:hover {
    filter: brightness(0.8);
  }

`;