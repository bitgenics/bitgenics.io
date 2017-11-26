import React, { Component } from 'react';
import { Route } from 'react-router'
import HomePage from './HomePage'
import StartupPage from './StartupPage'
import BusinessPage from './BusinessPage'
import PrivacyPolicyPage from './PrivacyPolicyPage'
import LegalPage from './LegalPage'
import BlogPage from './BlogPage'
import ArticlePage from './ArticlePage'
import { injectGlobal } from 'styled-components'

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
