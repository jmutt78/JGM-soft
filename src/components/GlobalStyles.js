import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
  --red: #FF4949;
  --black: #2E2E2E;
  --yellow: #ffc600;
  --white: #fff;
  --grey: #efefef;
  --purple: #1c0947;
  --tan: #fff5dd;
}



body {
  margin: 0;
  background: var(--tan);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: eurostile,sans-serif;
}


.gatsby-image-wrapper img[src*=base64\\,] {
  image-rendering: -moz-crisp-edges;
  image-rendering: pixelated;
}

/* Scrollbar Styles */
body::-webkit-scrollbar {
  width: 13px;
}

html {
  background: var(--tan);
  scrollbar-width: thin;
  scrollbar-color: var(--purple) var(--tan);

}

body::-webkit-scrollbar-track {

}
body::-webkit-scrollbar-thumb {
  background-color: var(--purple) ;
  border-radius: 7px;
  border: 3px solid var(--tan);
}

@media only screen and (max-width: 480px) {
  html {
    font-size: 90%;
  }
  h1 {
    font-size: 30%;
  }
}
`;

export default GlobalStyles;
