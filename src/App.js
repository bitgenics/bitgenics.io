import React, { Component } from 'react'
import { Route } from 'react-router'
import { injectGlobal } from 'styled-components'
import Loadable from 'react-loadable'

const HomePage = Loadable({
  loader: () => import('./HomePage'),
  loading() {
    return <div>Loading... </div>
  },
})

const StartupPage = Loadable({
  loader: () => import('./StartupPage'),
  loading() {
    return <div>Loading... </div>
  },
})

const BusinessPage = Loadable({
  loader: () => import('./BusinessPage'),
  loading() {
    return <div>Loading... </div>
  },
})

const PrivacyPolicyPage = Loadable({
  loader: () => import('./PrivacyPolicyPage'),
  loading() {
    return <div>Loading... </div>
  },
})

const LegalPage = Loadable({
  loader: () => import('./LegalPage'),
  loading() {
    return <div>Loading... </div>
  },
})

const BlogPage = Loadable({
  loader: () => import('./BlogPage'),
  loading() {
    return <div>Loading... </div>
  },
})

const ArticlePage = Loadable({
  loader: () => import('./ArticlePage'),
  loading() {
    return <div>Loading... </div>
  },
})

injectGlobal`
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
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={HomePage} />
        <Route path="/startup" component={StartupPage} />
        <Route path="/business" component={BusinessPage} />
        <Route path="/privacy" component={PrivacyPolicyPage} />
        <Route path="/legal" component={LegalPage} />
        <Route path="/blog" exact component={BlogPage} />
        <Route path="/blog/article" component={ArticlePage} />
      </div>
    );
  }
}

export default App;
