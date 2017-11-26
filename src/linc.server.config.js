const config = {
/*
  getHTTPHeaders: (req, assets) => {
    return [
      {name: 'Link', value: '<https://fast.wistia.net/embed/iframe/a0j2rlho90?videoFoam=true//bitgenics.wistia.com/medias/a0j2rlho90>;rel=preload;as=document;crossorigin=anonymous'},
      {name: 'Link', value: '<https://fast.wistia.net/assets/external/E-v1.js>;rel=preload;as=script;crossorigin=anonymous'}
      
    ]
  },
*/

  getStaticHead: (req) => {
    return `
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#65457b">
    <!--link rel="manifest" href="%PUBLIC_URL%/manifest.json">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" -->
    <meta name="description" property="og:description" content="Linc is a front-end delivery platform for single page web applications designed to improve search engine indexing and social sharing" >
    
    <meta name="author" content="Bitgenics">
    <meta name="robots" content="index, follow">

    <meta name="twitter:card" content="summary" >
    <meta name="twitter:site" content="@bitgenics" >
    <meta name="twitter:title" content="Bitgenics - Linc a front-end delivery platform for single page web applications" >

    <meta property="og:title" content="Bitgenics - Linc a front-end delivery platform for single page web applications" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.bitgenics.io" />
    <meta property="og:image" content="https://www.bitgenics.io/logo.png" />

    <title>Bitgenics - Linc a front-end delivery platform for single page web applications</title>
    <style>
body {
  margin: 0;
  font-size: 1em;
  line-height: 1.85714286em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #666;
  font-weight: 400;
  font-family: 'Lato','Verdana','Helvetica', sans-serif;
  background-color: #fafafa;
}

h1, h2, h3, h4, h5 {
  font-family: 'Rubik','Helvetica', sans-serif;
  color: #252525;
}

p {
  font-size: 14px;
}
    </style>
    `
  }
};

export default config