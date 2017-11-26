import React, { Component } from 'react';
import './fonts.css'
import { Route } from 'react-router'
import HomePage from './HomePage'
import StartupPage from './StartupPage'
import BusinessPage from './BusinessPage'
import PrivacyPolicyPage from './PrivacyPolicyPage'
import LegalPage from './LegalPage'
import BlogPage from './BlogPage'
import ArticlePage from './ArticlePage'

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
