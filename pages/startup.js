import React, { Component } from 'react'
import styled from 'styled-components'
import Row from 'components/Row'
import ScriptLoader from 'components/ScriptLoader'
import FooterSection from 'components/Footer'

const Col = styled.div`
  color: white;
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 15px;
  @media(min-width: 768px){
    width: 50%;
    display: inline-block;
    vertical-align: top;
  }
`

const Section = styled.div`
  background-image: url(/static/serverroom_1600_0_84.jpg);
  background-position-y: 50%;
  background-position-x: 50%;
  color: white;
  padding-top: 56px;
  padding-bottom: 56px;
  position: relative;
  text-align: left;
  &:before {
    content: "";
    position: absolute;
    left: 0; 
    right: 0;
    top: 0; 
    bottom: 0;
    background: rgba(0,0,0,.5);
    z-index: 0;
  }
`

const Title = styled.h2`
  color: white;
  font-size: 30px;
`

const Content = styled.div`
  z-index: 9;
  position: relative;
`

class StartupPage extends Component {
  render = () => {
    return <div {...this.props}>
      <Section>
        <Content>
          <Row>
            <Col>
              <div>
                <Title><b>You're about to sign up for the Startup plan.</b></Title>
                <p style={{fontSize: 17}}>
                  <strong>A solid choice!&nbsp;</strong>
                  This plan is perfect for startups and other small businesses. It 
                  includes 30,000 page views and up to five of your own domains.&nbsp;
                  <br /><br />
                  Price: $99 / month. 
                </p>
              </div>
            </Col>
            <Col>
              <form 
                action="https://payments.bitgenics.io/payment?q=startup" 
                method="POST"
              >
                <ScriptLoader
                  src="https://checkout.stripe.com/checkout.js" 
                  class="stripe-button"
                  data-key="pk_live_eUFV3Z8mMnKhV5FyPWrd6X17" 
                  data-amount="9900" 
                  data-name="Bitgenics" 
                  data-description="Linc Startup Plan" 
                  //data-image="/img/logo.png" 
                  data-locale="auto" 
                  data-zip-code="true"
                  data-color="black"
                />
                
              </form>
              <br />
              <p style={{fontSize: 13, lineHeight: '24px'}}>
                You are entering a paid subscription. The cost for 
                this subscription is $99 per month. Prices are in 
                US Dollars.
                All payments are handled through Stripe. Accepted payment methods: 
                Debit and Credit Cards.
                <br /><br />
                <span>You will be asked for an email address during the payment 
                  process, which should match the LINC user's email address.</span>
              </p>
            </Col>
          </Row>
        </Content>
      </Section>
      <br />
      <FooterSection noSocial />
    </div>
  }
}

export default StartupPage