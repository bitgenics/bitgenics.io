import React from 'react'
import styled from 'styled-components'
import Header from './../Header'
import SmallAuthor from './../SmallAuthor'
import Row from './../Row'
import AuthorSection from './../AuthorSection'
import SubscribeSection from './../SubscribeSection'

const ArticlePage = styled.div`

`

const Rule = styled.hr`
  height: 4px;
  width: 200px;
  background-color: #66457c;
  border: none;
`

const Hero = styled.img`
  width: 100vw;
`

const Content = styled.div`
  text-align: left;
`

const Quote = styled.blockquote`
  border-left: 4px solid #65457b;
  margin: 0;
  padding-left: 25px;
  font-style: italic;
  margin-top: 50px;
  margin-bottom: 50px;
`

const Paragraph = styled.p`
  margin-top: 50px;
  margin-bottom: 50px;
`


export default props => <ArticlePage>
  <Header />
  <Rule />
  <h1>4 Freelancers Discuss Working in NYC</h1>
  
  <SmallAuthor 
    profileImage={require('./../BlogPage/nitish-meena-99219.jpg')} 
  >
    by Jane Smith &bull; 3rd Oct 2017
  </SmallAuthor>
  <Content>
    <Row>
      <Paragraph>
        Most creatives yearn to feel free of the confines of their cubicle, to 
        pursue their craft and choose their clientele. And they’re in good company. 
        About 34% of people in the U.S have entered the independent workforce and 
        moved on to self-employment ventures, with a wealth of personal and 
        professional growth ahead.
      </Paragraph>
    </Row>
    <Hero src={require('./nitish-meena-99219.jpg')} />
    <Row>
      <Paragraph>
        Vegan schlitz ramps, seitan trust fund kale chips gluten-free street art. 
        Messenger bag offal enamel pin, YOLO master cleanse tumblr mustache 
        selfies adaptogen fingerstache ramps whatever stumptown kogi wayfarers. 
        You probably haven't heard of them jianbing squid ugh iPhone PBR&B 
        tote bag. Hashtag sartorial tilde pitchfork brooklyn. Next level kinfolk 
        paleo quinoa four loko pop-up succulents. Bicycle rights +1 typewriter 
        lyft kickstarter, echo park master cleanse brooklyn pabst put a 
        bird on it. Neutra aesthetic banjo PBR&B, marfa shoreditch vinyl. 
        Twee direct trade food truck cardigan. Shabby chic banjo drinking vinegar 
        pop-up, cred iceland roof party vinyl offal fingerstache. Marfa VHS cred,
      </Paragraph>
      <Quote>
        Our dollar toast semiotics subway tile cloud bread vape swag yuccie 
        messenger bag authentic offal food truck poutine. Pitchfork meggings 
        williamsburg fam typewriter pour-over deep v drinking vinegar kombucha 
        fashion axe activated charcoal vexillologist. IPhone artisan selfies 
        butcher taxidermy 
      </Quote>
      <Paragraph>
        Vegan schlitz ramps, seitan trust fund kale chips gluten-free street art. 
        Messenger bag offal enamel pin, YOLO master cleanse tumblr mustache 
        selfies adaptogen fingerstache ramps whatever stumptown kogi wayfarers. 
        You probably haven't heard of them jianbing squid ugh iPhone PBR&B tote 
        bag. Hashtag sartorial tilde pitchfork brooklyn. Next level kinfolk 
        paleo quinoa four loko pop-up succulents. Bicycle rights +1 typewriter 
        lyft kickstarter, echo park master cleanse brooklyn pabst put a bird 
        on it. Neutra aesthetic banjo PBR&B, marfa shoreditch vinyl. Twee 
        direct trade food truck cardigan. 
      </Paragraph>
    </Row>
    <AuthorSection />
    <SubscribeSection />
  </Content>
</ArticlePage>