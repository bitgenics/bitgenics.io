import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: BK-Circular;
    src: url(/static/fonts/lineto-circular-book.woff2) format("woff2");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: BK-Circular;
    src: url(/static/fonts/lineto-circular-bold.woff2) format("woff2");
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: BK-Circular;
    src: url(/static/fonts/lineto-circular-black.woff2) format("woff2");
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  :root {
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }

  /* Resets for relevant elements */
  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  figure,
  p,
  pre {
      margin: 0;
  }
`;
