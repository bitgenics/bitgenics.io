import React from 'react'
import styled from 'styled-components'
import Row from './../Row'
import Plan from './Plan'
import Tag from './Tag'

const PricingSection = styled.div`
  padding-top: 70px;
  padding-bottom: 70px;
  background-color: white;
  & p {
    font-size: 12px;
    @media (min-width: 768px){
      
    }
    @media (min-width: 993px){
      font-size: 14px; 
      height: 87px;
    }
  }
`

const StyledTag = styled(Tag)`
  position: absolute;
  top: 10px;
  right: 10px;
`

export default props => <PricingSection id="pricing">
  <Row>
    <Plan
      title="Developer"
      price={0}
      buttonLabel="Get started"
      href="https://github.com/bitgenics/linc-cli"
      id="gtm-plan-dev-btn"
    >
      <p> Our free plan allows you to host your app on our
        &lt;sitename&gt;.linc-app.co domain.
      </p>
    </Plan>
    <Plan
      title="Startup"
      price={9900}
      primary={true}
      to="/startup"
      id="gtm-plan-startup-btn"
    >
      <p>
        This plan is perfect for startups and other small businesses.
        It includes 30,000 page views and up to five of your own domains.
      </p>
      <StyledTag>Value</StyledTag>
    </Plan>
    <Plan
      title="Business"
      price={24900}
      to="/business"
      id="gtm-plan-business-btn"
    >
      <p> This plan includes 100,000 page views and up to 10 domains.
        It also allows for many more advanced optimisation techniques.
      </p>
    </Plan>
  </Row>
</PricingSection>
