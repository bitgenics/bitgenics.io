import React from 'react'
import styled from 'styled-components'
import Header from './../Header'
import SmallAuthor from './../SmallAuthor'
import Row from './../Row'
import AuthorSection from './../AuthorSection'
import SubscribeSection from './../SubscribeSection'
import SubscribeBox from './../SubscribeBox'
import LinksBox from './../LinksBox'

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


const InnerContent = styled.div`
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
    margin-top: 50px;
    width: 330px;
    display: inline-block;
    vertical-align: top;
  }
`


export default props => <ArticlePage>
  <Header />
  <Rule />
  <Row>
    <h1>Why Bitgenics? The increasing Need for Speed in an increasingly Complex world</h1>

    <SmallAuthor
      profileImage={require('./../BlogPage/nitish-meena-99219.jpg')}
    >
      by Erwin van der Koog 2nd Nov 2017
    </SmallAuthor>
  </Row>
  <Content>
    <Row>
      <Paragraph>
      So why Bitgenics? Starting a startup is a massive leap of faith. Giving up a well-paying job when you have a toddler to feed (and more importantly to send to daycare/school) is terrifying.
      </Paragraph>
    </Row>
    <Hero src={require('./nitish-meena-99219.jpg')} />
    <Row>
      <InnerContent>

        <Paragraph>
        So why am I so convinced this is an opportunity worth pursuing? First Principles. Quite literary an ancient technique practiced by the likes of Aristotle, its recent popularity is due to <a href="https://jamesclear.com/first-principles">Elon Musk and the story of SpaceX.</a>
        </Paragraph>

        <Paragraph>
        So what are the First Principles underlying Bitgenics?
        <ul>
          <li>Software is eating the world</li>
          <li>The world is becoming more complex</li>
          <li>Probing is the best way of managing complexity</li>
        </ul>
        </Paragraph>

        <Paragraph>
        <h2>Software is eating the world</h2>
        This is an <a href ="https://techcrunch.com/2016/06/07/software-is-eating-the-world-5-years-later/">old quote by Marc Andreessen</a> of Netscape & VC fame to describe the increased importance & impact software has on our world. It was true back then and is even truer now. There is absolutely nothing anymore that does not rely on software one way or another.
        </Paragraph>

        <Paragraph>
        <h2>The world is becoming more complex</h2>
        It is undeniable that the world, and thus business, <a href ="https://hbr.org/2011/08/the-world-really-is-more-compl&cm_sp=Article-_-Links-_-Top%20of%20Page%20Recirculation">is a lot more interconnected</a> than even 10–20 years ago. Combine that with a relentless advance in technology and almost unprecedented rate of social change, and you have the raw ingredients for an increasingly complex environment.
        For an introduction to what precisely complexity is, you can read my primer <a href="./blog/understanding-complexity">‘Understanding Complexity’</a>.
        </Paragraph>

        <Paragraph>
        <h2>Probing is the way to deal with complexity</h2>
        The defining characteristic of complexity is that it is impossible to predict the relationship between cause & effect, but that it is often obvious in hindsight. The only way to deal with complexity is by probing; designing safe to fail experiments intended for learning.
        </Paragraph>

        <Paragraph>
        <h2>Putting all that together</h2>
        With software development becoming more and more critical it becomes imperative for us to get it right. And while we have been on the right track for a while with Agile, DevOps, Continuous Delivery et al., I still believe we can do better. Most of us have been focussed on delivering more, faster and more frequently, but what we should be doing in learning more, faster and more frequently.
        </Paragraph>

        <Paragraph>
        The core metaphor of software ‘building’ is inaccurate, which is why ‘Growing Software’ is the tagline for Bitgenics. We should start small and continuously add & prune as we go along. But it also means we have to get good at:
        </Paragraph>

        <Paragraph>
        <h2>Testing in Production.</h2>
        “Testing in Production” was always used as a euphemism for no testing at all and it certainly is not that. But knowing that your software does what you think it does in a test environment is not even remotely sufficient anymore. Only in production can we learn if it:
        <ul>
          <li>works with the rest of your production infrastructure</li>
          <li>works with real data and real usage patterns</li>
          <li>delivers the outcomes we were hoping for</li>
        </ul>
        Which means we need the following characteristics in our tooling
        <ul>
          <li>No overhead to release anything to the public</li>
          <li>Real-time monitoring and alerting</li>
          <li>Ability to instantly revert changes</li>
        </ul>
        </Paragraph>

        <Paragraph>
        These are the things that Facebook was talking about with their <a href="http://mashable.com/2014/04/30/facebooks-new-mantra-move-fast-with-stability/#P6Gp6UqeYPqV"“Move Fast and Break Things”</a> motto. It was not about delivering fast; it was about learning quickly. They spend millions on their custom solutions. We want to make that an every day reality for everyone.
        </Paragraph>

        <Paragraph>
        Our first product Linc is out now. A Server-Side Rendering platform for modern Javascript websites. No vendor lock-in, write exactly the PWA you want to write, but also have blazingly fast renders and full SEO support and correct social sharing. More information at <a href="https://bitgenics.io">bitgenics.io</a>
        </Paragraph>

      </InnerContent>
      <SideSection>
        <SubscribeBox />
        <LinksBox />
      </SideSection>
    </Row>
    <AuthorSection />
    <SubscribeSection />
  </Content>
</ArticlePage>
