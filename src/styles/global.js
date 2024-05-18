import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    border: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    color: ${({theme}) => theme.COLORS.WHITE};
    background-color: ${({theme}) => theme.COLORS.BLACK};
  }

  a, button {
    text-decoration: none;
    cursor: pointer;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;