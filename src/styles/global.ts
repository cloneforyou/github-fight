import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-thumb {
    transition: 0.2s;
    border-radius: 2.5px;
    background: ${({ theme }) => theme.colors.active};

    &:hover {
      background: ${({ theme }) => theme.colors.activeDark};
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::selection {
      background-color: ${({ theme }) => theme.colors.active};
      color: ${({ theme }) => theme.colors.background};
    }
  }

  html {
    scroll-behavior: smooth;
    font: 62.5% 'Lato', sans-serif;
  }

  html, body {
    font-weight: 400;

    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primaryText};

    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-size: 1.6rem;
  }

  body.using-mouse {
    * {
      outline: none !important;
    }
  }

  #gatsby-focus-wrapper {
    position: relative;

    margin: 0 auto;
    padding: 0 32px;

    max-width: 1234px;
    min-height: 100%;
  }

  button {
    font: 62.5% 'Lato', sans-serif;
    font-weight: 400;

    background: transparent;
    border: none;
  }

  a,
  button {
    color: ${({ theme }) => theme.colors.primaryText};
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }

  li {
    list-style-type: none;
  }
`;
