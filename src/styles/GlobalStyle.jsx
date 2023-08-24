import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
    }

    :root {
      --primary-color: #222260;
      --primary-color2: rgba(34, 34, 96, .6);
      --primary-color3: rgba(34, 34, 96, .4);
      --color-green: #42AD00;
      --color-grey: #AAA;
      --color-ascent: #F56692;
      --color-delete: #FF0000;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      overflow: hidden;
      font-size: cramp(1rem, 1.5vw, 1.2rem);
      color: rgba(34, 34, 96, .6);
    }

    h1, h2, h3, h4, h5 {
      color: var(--primary-color);
    }

`;
