import React from 'react'
import styled from 'styled-components'
import Row from './../Row'
import Features from './Features'

const SubTitle = styled.h2`
  font-size: 33px;
  font-weight: 300;
  line-height: 45px;
  color: #252525;
`

const StyledRow = Row.extend`
  text-align: left;
  padding-top: 26px;
  padding-bottom: 26px;
  padding-left: 30px;
  padding-right: 30px;
  @media (min-width: 1200px) { 
    width: 1140px;
  }
  @media(max-width: 990px) {
    max-width: 720px;
  }
`

const LeadText = styled.p`
  font-weight: 400;
  color: grey;
  font-size: 19px;
  line-height: 32px;
`

const StyledFeatures = styled(Features)`
  float: right;
  box-sizing: border-box;
  @media(min-width: 768px){
    width: 50%;
    display: inline-block;
  }
  @media(max-width: 992px){
    
  }
`

const Summary = styled.div`
  padding: 25px 25px 25px 0;
  box-sizing: border-box;
  @media(min-width: 768px){
    width: 50%;
    display: inline-block;
  }
  @media(max-width: 992px){
    padding: 0 15px;
  }
`


export default props => <StyledRow {...props} id="product">
  <Summary>
    <SubTitle>
      <b>LINC</b> is a front-end delivery platform
    </SubTitle>
    <LeadText>
      Technologies like React and Angular allow us to create amazing user 
      experiences, but they come at a cost. Downloading all the Javascript takes 
      a long time, search engines have a hard time indexing your site and there 
      is no preview data for social sites like Facebook, Twitter or Slack.

      <br /><br />We have fixed that.
    </LeadText>
  </Summary>
  <StyledFeatures />
  <div style={{clear: 'both'}} />
</StyledRow>