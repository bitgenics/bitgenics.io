import React from 'react'
import styled from 'styled-components'
import Page from 'components/Page'
import Row from 'components/Row'
import FeaturedArticle from 'components/Blog/FeaturedArticle'
import ArticlesSummarySection from 'components/Blog/ArticlesSummarySection'
import SummaryArticle from 'components/Blog/SummaryArticle'
import SubscribeBox from 'components/Blog/SubscribeBox'
import LinksBox from 'components/Blog/LinksBox'
import SubscribeSection from 'components/Blog/SubscribeSection'

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

export default () => (
  <Page headTitle="Blog | Bitgenics">
  	<FeaturedArticle image='/static/placeholder/nitish-meena-99219.jpg' />
  	<ArticlesSummarySection />
    <Row>
      <SummaryArticlesContainer>
        <SummaryArticle 
          author="John Smith"
          profileImage='/static/placeholder/user.png'
          image='/static/placeholder/dustin-lee-19667.jpg'
        >
          Vestibulum finibus odio eget condimentum vulputate. Etiam at molestie enim.
          Nulla pharetra turpis in justo tempor pellentesque. Quis vitae dolor ut...
        </SummaryArticle>
        <SummaryArticle 
          author="John Smith"
          profileImage='/static/placeholder/user.png'
          image='/static/placeholder/olu-eletu-38649.jpg'
        >
          Vestibulum finibus odio eget condimentum vulputate. Etiam at molestie enim.
          Nulla pharetra turpis in justo tempor pellentesque. Quis vitae dolor ut...
        </SummaryArticle>
        <SummaryArticle 
          author="John Smith"
          profileImage='/static/placeholder/user.png'
          image='/static/placeholder/les-anderson-217735.jpg'
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
  </Page>
)