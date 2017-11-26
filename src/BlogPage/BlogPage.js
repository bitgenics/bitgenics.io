import React from 'react'
import styled from 'styled-components'
import Header from './../Header'
import FeaturedArticle from './../FeaturedArticle'
import ArticlesSummarySection from './../ArticlesSummarySection'
import SummaryArticle from './../SummaryArticle'
import SubscribeSection from './../SubscribeSection'
import Row from './../Row'
import SubscribeBox from './../SubscribeBox'
import LinksBox from './../LinksBox'

const BlogPage = styled.div`

`

const SummaryArticlesContainer = styled.div`
  @media(min-width: 990px){ 
    width: 810px;
    display: inline-block;
    margin-right: 30px;
    vertical-align: top;
  }
`

const SideSection = styled.div`
  display: none;
  @media(min-width: 1170px){ 
    width: 330px;
    display: inline-block;
    vertical-align: top;
  }
`

export default props => <BlogPage {...props}>
  <Header />
  <FeaturedArticle 
    image={require('./nitish-meena-99219.jpg')} 
  />
  <ArticlesSummarySection />
  <Row>
    <SummaryArticlesContainer>
      <SummaryArticle 
        author="John Smith"
        profileImage={require('./user.png')}
        image={require('./dustin-lee-19667.jpg')}
      >
        Vestibulum finibus odio eget condimentum vulputate. Etiam at molestie enim.
        Nulla pharetra turpis in justo tempor pellentesque. Quis vitae dolor ut...
      </SummaryArticle>
      <SummaryArticle 
        author="John Smith"
        profileImage={require('./user.png')}
        image={require('./olu-eletu-38649.jpg')}
      >
        Vestibulum finibus odio eget condimentum vulputate. Etiam at molestie enim.
        Nulla pharetra turpis in justo tempor pellentesque. Quis vitae dolor ut...
      </SummaryArticle>
      <SummaryArticle 
        author="John Smith"
        profileImage={require('./user.png')}
        image={require('./les-anderson-217735.jpg')}
      >
        Vestibulum finibus odio eget condimentum vulputate. Etiam at molestie enim.
        Nulla pharetra turpis in justo tempor pellentesque. Quis vitae dolor ut...
      </SummaryArticle>
    </SummaryArticlesContainer>
    <SideSection>
      <SubscribeBox />
      <LinksBox />
    </SideSection>
  </Row>
  <SubscribeSection />
</BlogPage>