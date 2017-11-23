import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from './../Logo'
import Row from './../Row'
import FooterSection from './../FooterSection'

const Page = styled.div`
  text-align: left;
`

const Header = styled.div`
  text-align: left;
  padding: 15px;
`

const Hero = styled.div`
  height: 208px;
  background-image: url(${require('./../Hero/serverroom_1600_0_84.jpg')});
  background-position-y: 50%;
  background-position-x: 50%;
  position: relative;
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

export default props => <Page {...props}>
  <Header>
    <Link to="/">
      <Logo />
    </Link>
  </Header>
  <Hero />
  <Row>
    <h1>Privacy Policy</h1>
    <ol>
        <li>
            <h3>We respect your privacy</h3>

            <p>1.1. Bitgenics Pty Ltd (“Bitgenics” or “we”) respects your right to privacy and is committed to safeguarding the privacy of our customers and website visitors. We adhere to the Australian Privacy Principles contained in the Privacy Act 1988 (Cth). This policy sets out how we collect and treat your personal information.</p>

            <p>1.2. "Personal information" is information we hold which is identifiable as being about you.</p>
        </li>

        <li>
            <h3>Collection of personal information</h3>

            <p>2.1. Bitgenics will, from time to time, receive and store personal information you enter onto our website, provided to us directly or given to us in other forms.</p><p>

            </p><p>2.2. You may provide basic information such as your name, phone number, address and email address to enable us to send information, provide updates and process your product or service order. We may collect additional information at other times, including but not limited to, when you provide feedback, when you provide information about your personal or business affairs, change your content or email preference, respond to surveys and/or promotions, provide financial or credit card information, or communicate with our customer support.</p>

            <p>2.3. Additionally, we may also collect any other information you provide while interacting with us.</p>
        </li>
        <li>
            <h3>How we collect your personal information</h3>

            <p>3.1. Bitgenics collects personal information from you in a variety of ways, including when you interact with us electronically or in person, when you access our website and when we provide our services to you. We may receive personal information from third parties. If we do, we will protect it as set out in this Privacy Policy.</p><p>
        </p></li>
        <li>
            <h3>Use of your personal information</h3>

            <p>4.1. Bitgenics may use personal information collected from you to provide you with information, updates and our services. We may also make you aware of new and additional products, services and opportunities available to you. We may use your personal information to improve our products and services and better understand your needs.</p><p>

            </p><p>4.2. Bitgenics may contact you by a variety of measures including, but not limited to telephone, email, sms or mail.</p>
        </li>
        <li>
            <h3>Disclosure of your personal information</h3>

            <p>5.1. We may disclose your personal information to any of our employees, officers, insurers, professional advisers, agents, suppliers or subcontractors insofar as reasonably necessary for the purposes set out in this Policy. Personal information is only supplied to a third party when it is required for the delivery of our services.</p><p>

            </p><p>5.2. We may from time to time need to disclose personal information to comply with a legal requirement, such as a law, regulation, court order, subpoena, warrant, in the course of a legal proceeding or in response to a law enforcement agency request.</p>

            <p>5.3. We may also use your personal information to protect the copyright, trademarks, legal rights, property or safety of Bitgenics, www.bitgenics.io, its customers or third parties.</p>

            <p>5.4. Information that we collect may from time to time be stored, processed in or transferred between parties located in countries outside of Australia. These may include, but are not limited to Australia, USA, Germany.</p>

            <p>5.5. If there is a change of control in our business or a sale or transfer of business assets, we reserve the right to transfer to the extent permissible at law our user databases, together with any personal information and non-personal information contained in those databases. This information may be disclosed to a potential purchaser under an agreement to maintain confidentiality. We would seek to only disclose information in good faith and where required by any of the above circumstances.</p>

            <p>5.6. By providing us with personal information, you consent to the terms of this Privacy Policy and the types of disclosure covered by this Policy. Where we disclose your personal information to third parties, we will request that the third party follow this Policy regarding handling your personal information.</p>
        </li>
        <li>
            <h3>Security of your personal information</h3>

            <p>6.1. Bitgenics is committed to ensuring that the information you provide to us is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure information and protect it from misuse, interference, loss and unauthorised access, modification and disclosure.</p><p>

            </p><p>6.2. The transmission and exchange of information is carried out at your own risk. We cannot guarantee the security of any information that you transmit to us, or receive from us. Although we take measures to safeguard against unauthorised disclosures of information, we cannot assure you that personal information that we collect will not be disclosed in a manner that is inconsistent with this Privacy Policy.</p>
        </li>
        <li>
            <h3>Access to your personal information</h3>

            <p>7.1. You may request details of personal information that we hold about you in accordance with the provisions of the Privacy Act 1988 (Cth). A small administrative fee may be payable for the provision of information. If you would like a copy of the information which we hold about you or believe that any information we hold on you is inaccurate, out of date, incomplete, irrelevant or misleading, please email us at <a href="mailto:privacy@bitgenics.io">privacy@bitgenics.io</a></p><p>

            </p><p>7.2. We reserve the right to refuse to provide you with information that we hold about you, in certain circumstances set out in the Privacy Act.</p>
        </li>
        <li>
            <h3>Complaints about privacy</h3>

            <p>8.1. If you have any complaints about our privacy practices, please feel free to send in details of your complaints to: Attn: Legal Counsel Bitgenics, 17/31 Queen Street, Melbourne, VIC 3000, Australia. We take complaints very seriously and will respond shortly after receiving written notice of your complaint.</p><p>
        </p></li>
        <li>
            <h3>Changes to Privacy Policy</h3>

            <p>9.1. Please be aware that we may change this Privacy Policy in the future. We may modify this Policy at any time, in our sole discretion and all modifications will be effective immediately upon our posting of the modifications on our website or notice board. Please check back from time to time to review our Privacy Policy.</p><p>
        </p></li>
        <li>
            <h3>Website</h3>

            <p>10.1. When you come to our website (www.bitgenics.io) we may collect certain information such as browser type, operating system, website visited immediately before coming to our site, etc. This information is used in an aggregated manner to analyse how people use our site, such that we can improve our service.</p><p>

            </p><p>10.2. We may from time to time use cookies on our website. Cookies are very small files which a website uses to identify you when you come back to the site and to store details about your use of the site. Cookies are not malicious programs that access or damage your computer. Most web browsers automatically accept cookies but you can choose to reject cookies by changing your browser settings. However, this may prevent you from taking full advantage of our website.</p>

            <p>10.3. Our website may from time to time use cookies to analyses website traffic and help us provide a better website visitor experience. In addition, cookies may be used to serve relevant ads to website visitors through third party services such as Google Adwords. These ads may appear on this website or other websites you visit.</p>

            <p>10.4. Our site may from time to time have links to other websites not owned or controlled by us. These links are meant for your convenience only. Links to third party websites do not constitute sponsorship or endorsement or approval of these websites. Please be aware that Bitgenics is not responsible for the privacy practises of other such websites. We encourage our users to be aware, when they leave our website, to read the privacy statements of each and every website that collects personal identifiable information.</p>
        </li>
    </ol>
  </Row>
  <FooterSection noSocial />
</Page>