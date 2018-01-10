import React from 'react'
import styled from 'styled-components'
import Row from './../Row'
import { Link } from 'react-router-dom'

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

const BlogIcon = props =>
  <svg width="15px" height="15px" viewBox="0 0 1024 866"
    style={iconStyles}
  >
  <path fill="#666" stroke="#666" d="M84.933,0H15.067C6.747,0,0,7.061,0,15.771v33.692c0,8.71,6.747,15.771,15.067,15.771h11.528c0,6.205,0,12.41,0,18.617c0,1.027,1.412,1.751,2.143,0.888c5.492-6.502,10.985-13.003,16.478-19.505h39.717c8.32,0,15.067-7.061,15.067-15.771V15.771C100,7.061,93.253,0,84.933,0z"/>
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

{/* TODO add back blog svg and link */}

export default ({noSocial, otherProps}) => <FooterSection {...otherProps}>
  <Row>
    {noSocial ? null : <SocialList>
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
        <StyledLink to="/privacy">Privacy Policy</StyledLink>
      </Item>
      <Item>
        <StyledLink to="/legal">Legal</StyledLink>
      </Item>
    </List>
  </Row>
</FooterSection>
