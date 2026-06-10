import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body{
    font-family: 'DM Sans', 'Syne', sans-serif;
    background:${({ theme }) => theme.colors.background};
    color:${({ theme }) => theme.colors.text};
    -webkit-font-smoothing:antialiased;
  }
  h1 {
    font-family: 'Syne', sans-serif;
  }

  button,input{
    font-family:inherit;
  }

  a{
    text-decoration:none;
    color:inherit;
  }
`;
