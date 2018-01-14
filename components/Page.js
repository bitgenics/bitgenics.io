import styled, { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import * as bitgenicsTheme from 'theme'
import Header from 'components/Header'
import Footer from 'components/Footer'

export default ({ headTitle, children }) => (
  <ThemeProvider theme={bitgenicsTheme}>
    <div>
      <Head>
        <title>{headTitle}</title>
      </Head>
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </div>
  </ThemeProvider>
)