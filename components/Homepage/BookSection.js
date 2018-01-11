import React from 'react'
import styled from 'styled-components'
import Row from './../Row'
import Button from './../Button'

const BookSection = styled.div`
  padding-top: 52px;
  padding-bottom: 52px;
  background-color: #65457B; 
  color: white;
`

const Title = styled.h2`
  color: lightgray;
  font-size: 33px;
  font-weight: 300;
  line-height: 45px;
  margin-top: 0;
`


const Link = styled.a`
  font-size: 12px;
  margin-top: 13px;
  margin-bottom: 0;
  color: lightgray;
  display: block;
  text-decoration: none;
`

const StyledButton = styled(Button)`
  margin-top: 0;
`

export default props => <BookSection>
  <Row>
    <Title>Let us show you Linc, free of charge.</Title>
    <StyledButton id="gtm-demo-btn" href="https://calendly.com/bitgenics/linc-demo">Book a demo</StyledButton>
    <Link href="https://github.com/bitgenics/linc-cli">
      Or check out our "Getting Started Page" yourself.
    </Link>
  </Row>
</BookSection>
