import Document, { Head, Main, NextScript } from 'next/document'
import LincInit from 'linc-profile-nextjs/linc-init'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage, nonce }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(Component => props =>
      sheet.collectStyles(<Component {...props} />
    ))
    const styles = sheet.getStyleElement()
    for(const style of styles) {
      style.props.nonce = nonce
    } 
    return { ...page, styles }
  }

  render () {
    return (
      <html lang="en-US">
        <Head>
          <script nonce={this.props.nonce} dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MR5JLVW');`}}>
          </script>
          <script defer src="https://www.googletagmanager.com/gtag/js?id=UA-90175441-1"></script>
          <script nonce={this.props.nonce} dangerouslySetInnerHTML={{__html: `function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","UA-90175441-1");`}}></script>
          <script async src="https://fast.wistia.com/assets/external/E-v1.js"></script>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="theme-color" content="#65457b" />
          <meta name="description" property="og:description" content="Linc is a front-end delivery platform optimised for testing and hosting progressive web applications. Get started for free" />

          <meta name="author" content="Bitgenics" />
          <meta name="robots" content="index, follow" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@bitgenics" />
          <meta name="twitter:title" content="Bitgenics - Linc is a front-end delivery platform optimised for testing and hosting progressive web applications. Get started for free" />

          <meta property="og:title" content="Bitgenics - Linc is a front-end delivery platform optimised for testing and hosting progressive web applications. Get started for free" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.bitgenics.io" />
          <meta property="og:image" content="https://www.bitgenics.io/static/full_logo.svg" />

          <script dangerouslySetInnerHTML={{__html: `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/lv0ic9po';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()`}} />
          <title>Bitgenics - Linc a front-end delivery platform for single page web applications</title>
          <script nonce={this.props.nonce} dangerouslySetInnerHTML={{__html: `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/lv0ic9po';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()`}}>
          </script>
        </Head>
        <body>
          <div className='root'>
            <Main />
          </div>
          <LincInit nonce={this.props.nonce}/>
          <NextScript nonce={this.props.nonce} />
          <script nonce={this.props.nonce} defer dangerouslySetInnerHTML={{__html: `window.Intercom("boot",{app_id:"lv0ic9po"});window.Intercom("update");`}}/>
        </body>
      </html>
    )
  }
}
