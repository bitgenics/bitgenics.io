import React, { Component } from 'react'
import styled from 'styled-components'
import Row from 'components/Row'
import Link from 'next/link'

const Col = styled.div`

  box-sizing: border-box;
  @media(min-width: 768px){
    width: 50%;
    display: inline-block;
    vertical-align: top;
  }
`

const LogoContainer = styled.div`
  display: inline-block;
  text-align: center;
  @media(min-width: 992px){
    min-width: 262px;
  }
`

const ContactSection = styled.div`
  padding-top: 13px;
  padding-bottom: 13px;
`

const EmailInput = styled.input`
  width: 100%;
  padding: 6.5px 13px;
  font-size: 14px;
  border: 1px solid #ABB0B2;
  border-radius: 3px;
  box-sizing: border-box;
`

const Label = styled.label`
  font-size: 12px;
`

const Button = styled.button`
  clear: both;
  background-color: #aaa;
  border: 0 none;
  border-radius: 4px;
  transition: all 0.23s ease-in-out 0s;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-size: 15px;
  font-weight: normal;
  height: 32px;
  line-height: 32px;
  margin: 0 5px 10px 0;
  padding: 0 22px;
  text-align: center;
  text-decoration: none;
  vertical-align: top;
  white-space: nowrap;
  width: auto;
`

const SubHeader = styled.h2`
  font-size: 19.6px;
`

const Logo = styled.img`
  height: 36px;
  vertical-align: middle;
  margin: 10px 15px;
  position: relative;
  float: right;
  @media(min-width: 768px){
    float: left;
  }
`
const List = styled.ul`
  opacity: 0.5;
  font-size: 12px;
  line-height: 26px;
  margin: 0;
  position: relative;
  z-index: 0;
`

const Item = styled.li`
  display: inline-block;
  margin: 0 23px 0 0;
  z-index: 0;
`

const FooterSection = styled.div`
  text-align: left;
  padding-bottom: 26px;
`

const SocialList = styled.ul`
  opacity: 0.5;
  font-size: 12px;
  margin: 0;
  float: right;
  line-height: 15px;
  height: 26px;
  z-index: 9;
  position: relative;
`

const SocialItem = styled.li`
  display: inline-block;
  margin: 0 23px 0 0;
  padding-top: 5px;
  padding-bottom: 5px;
`

const iconStyles = {
  transform: 'rotate(180deg)',
}

const MediumIcon = props =>
  <svg width="15px" height="15px" viewBox="0 0 1024 866"
    style={iconStyles}
  >
    <path d="M1016 726l-324 162c-2 0-2 0-4 0-4 0-10-2-12-4l-198-326 222-362 320 518c2 4 0 10-4 12zM372 672v-350l312-156zM710 154l286-144c14-8 28 0 28 18v636zM336 724l-298 148-20 12c-2 0-4 2-6 2-4 0-6-2-8-4s-4-6-4-12v-682c0-12 8-26 18-30l294-148c4-2 8-4 12-4 10 0 16 8 16 22v690c0 2 0 4-4 6z" />
  </svg>

const TwitterIcon = props =>
  <svg width="15px" height="15px" viewBox="0 0 1024 866"
    style={iconStyles}
  >
    <path d="M920 656c0-8 0-18 0-26 0-278-212-598-598-598-118 0-230 34-322 94 16-2 34-2 50-2 98 0 190 32 262 90-92 0-170 62-198 146 14-4 26-4 40-4 20 0 38 2 56 6-96 20-168 106-168 206 0 2 0 2 0 4 28-16 60-26 94-26-56 36-94 102-94 174 0 38 12 74 30 106 102-128 258-212 432-220-4 16-6 32-6 48 0 116 94 210 210 210 62 0 116-26 154-66 48 10 94 26 134 50-16-48-50-90-92-116 42 6 82 16 120 34-28-42-64-80-104-110z" />
  </svg>


const GithubIcon = props =>
  <svg width="15px" height="15px" viewBox="0 0 1024 866"
    style={iconStyles}
  >
    <path d="M968 604c0 72-24 132-68 178 8 16 30 84-6 176 0 0-56 18-182-68-54 14-110 22-168 22-56 0-112-8-166-22-128 86-182 68-182 68-38-92-14-160-8-176-42-46-68-106-68-178 0-256 156-312 304-330-20-16-38-46-44-88-38-18-134-46-192 56 0 0-36 62-102 68 0 0-66 0-6-40 0 0 44-22 74-98 0 0 40-118 224-78 2-56 2-142 2-158h330c0 22 0 128 0 216 0 62-20 102-44 124 148 16 302 72 302 328zM132 278c-2-2-8-4-12-2s-8 8-6 10c2 4 6 6 12 2 4-2 6-6 6-10zM158 248c-2-2-10 0-14 4s-4 10-2 14c4 2 10 2 14-4 4-4 6-10 2-14zM184 210c-4-2-10 0-14 6s-4 14 0 16c4 2 10 0 14-6s4-12 0-16zM220 174c-4-4-12-4-16 2-6 6-8 12-4 16 4 6 12 4 16-2 6-4 8-12 4-16zM270 152c-2-6-10-8-16-6-8 2-14 8-12 14s10 8 18 6c6-2 12-8 10-14zM310 138c-8 0-14 4-14 10s6 10 14 10c8 0 14-4 14-10s-6-10-14-10zM362 144c-8-2-14 2-16 8 0 4 6 10 14 12s14-2 16-8c0-4-6-10-14-12z" />
  </svg>

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`

export default ({noSocial}) => (
  <div>
    <ContactSection id="signup">
      <Row>
        <Col style={{textAlign: 'left'}}>
          <LogoContainer><Logo alt="Logo" src="/static/full_logo.svg"/></LogoContainer>
          <p style={{display: 'inline-block'}}>Supercharge your workflow</p>
        </Col>
        <Col style={{textAlign: 'left'}}>
          <SubHeader>Subscribe to our mailing list</SubHeader>
          <Label for="mce-EMAIL">Email Address </Label>
          <EmailInput
            type="email"
            value=""
            name="EMAIL"
            id="mce-EMAIL"
            aria-label="Newsletter Signup"
            aria-required="true"
            placeholder="Email Address "
          />
          <Button id="gtm-subscribe-btn-footer">Subscribe</Button>
        </Col>
      </Row>
    </ContactSection>
    <FooterSection>
      <Row>
        {noSocial ? null : <SocialList>
          <SocialItem>
            <a aria-label="Blog" href="https://blog.bitgenics.io/" target="_self">
              <MediumIcon />
            </a>
          </SocialItem>
          <SocialItem>
            <a id="gtm-twitter-footer" aria-label="Twitter" href="https://twitter.com/bitgenics" target="_self">
              <TwitterIcon />
            </a>
          </SocialItem>
          <SocialItem>
            <a id="gtm-github-footer" aria-label="Github" href="https://github.com/bitgenics/" target="_self">
              <GithubIcon />
            </a>
          </SocialItem>
        </SocialList>}
        <List>
          <Item>&copy; {(new Date).getFullYear()} Bitgenics Pty Ltd</Item>
          <Item>
            <Link href="/privacy"><StyledLink>Privacy Policy</StyledLink></Link>
          </Item>
          <Item>
            <Link href="/legal"><StyledLink>Legal</StyledLink></Link>
          </Item>
        </List>
      </Row>
    </FooterSection>
  </div>

)