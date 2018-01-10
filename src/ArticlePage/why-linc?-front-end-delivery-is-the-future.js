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
    <h1>Why Linc? Front-end Delivery is the future</h1>

    <SmallAuthor
      profileImage={require('./../BlogPage/nitish-meena-99219.jpg')}
    >
      by Erwin van der Koog 6th Dec 2017
    </SmallAuthor>
  </Row>
  <Content>
    <Row>
      <Paragraph>
        Just like the <a href="/why-bitgenics-the-increasing-need-for-speed-in-an-increasingly-complex-world">“Why of Bitgenics”</a> I wanted to take a moment to explain the Why behind Linc, our Front-end Delivery Platform and start again from <a href="https://jamesclear.com/first-principles">First Principles</a>. And our additional First Principles for Linc are:
      </Paragraph>
    </Row>
    <Hero src={require('./nitish-meena-99219.jpg')} />
    <Row>
      <InnerContent>

        <Paragraph>
        <ul>
          <li>Speed of light isn’t fast enough</li>
          <li>The Web is here to stay</li>
          <li>The higher up the stack the more value is there to be had</li>
        </ul>
        So let’s break these down:
        </Paragraph>

        <Paragraph>
        <h2>Speed of Light isn’t fast enough</h2>
        This may sound like hyperbole; Nothing is faster than the speed of light right? But Grace Hopper has been pointing out since forever that light travels only about 11.8 inches or 30 cm in a nano-second.
        </Paragraph>

        <iframe width="700" height="525" src="https://www.youtube.com/embed/JEpsKnWZrJ8" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>

        <Paragraph>
        This is something us Australian residents know all too well. Melbourne — Singapore is 6000 km or 20 million light-nanoseconds. To put this another way: The theoretical minimum latency from Melbourne to Singapore is 40 milliseconds. And if you realize that with TCP and the likes of TLS you need multiple round trips and things get expensive quickly.
        </Paragraph>

        <Paragraph>
        And this has been the heart of our struggles in finding the right balance between responsiveness and manageability that has been playing out over the past few decades. We started with mainframes and dumb terminals because we couldn’t build local computers.
        </Paragraph>

        <Paragraph>
        Then we moved on to client/server which was great for responsiveness, but terrible for manageability. Then we build web applications, which is amazing for manageability, but not for responsiveness. Which leads us to the next phase, which I think might be our last big outing in this area, Progressive Web Apps. PWAs have the benefit of being great for manageability (we manage our code centrally, and our code runs in a relatively stable environment), but also for responsiveness (The code runs locally).
        </Paragraph>

        <Paragraph>
        PWAs are still very much in their infancy, but there is a tremendous amount of momentum behind them. Microsoft recently announced they are going to support PWAs in the next version of the Windows Store.
        </Paragraph>

        <Paragraph>
        Summary: Progressive Web Apps are the future.
        </Paragraph>

        <Paragraph>
        <h2>The Web is here to stay, but continuously evolving.</h2>
        The internet we know today is probably the biggest achievement in the history of computer programming. And the interesting thing is just how backward compatible everything is. The core (TCP, HTTP, HTML, SMTP, etc.) is decades old. And any change happens very incrementally. So while we are steaming ahead into the future with the likes of Progressive Web Apps, we need to be aware of the rest of the internet. HTML is still very much the lingua franca of the internet, and it isn’t just used by browsers, but also by a massive amount of crawlers for various purposes; Search Engines, Social, Meta-data, etc..
        </Paragraph>

        <Paragraph>
        And while we need to be backward compatible we also need to look to the future. The web is continuously evolving into better and better user experiences, and you have to keep investing to keep up. And the new bar is the seamless user experiences delivered by PWAs.
        </Paragraph>

        <Paragraph>
        And while we need to be backward compatible we also need to look to the future. The web is continuously evolving into better and better user experiences, and you have to keep investing to keep up. And the new bar is the seamless user experiences delivered by PWAs.
        </Paragraph>

        <Paragraph>
        Summary: Server-Side Rendering is the way to go for speed, SEO, and social sharing.
        </Paragraph>

        <Paragraph>
        <h2>The higher up the stack, the more value there is</h2>
        The most valuable code you can write is what sets you apart from your competitors. Anything else is a distraction that you should minimise. And if you are writing a PWA you have a few options:
        <ul>
          <li>Statically host all your files</li>
          <li>Host it yourself</li>
          <li>Use an external service like next.js or Linc</li>
        </ul>
        </Paragraph>

        <Paragraph>
        Statically hosting your code on a service like S3 is easy, but not ideal for your user experience. It takes a while to download the JavaScript and only then can backend calls by made and the page rendered. And you also do not get any Server-Side Rendering out of the box, although you could use a service like prerender.io to do that for crawlers.
        </Paragraph>

        <Paragraph>
        Hosting it yourself is incredibly expensive. Not only do you have to run your infrastructure, you likely have to build your own middleware. Not just expensive from an initial investment point of view, but even more importantly from an Total Cost of Ownership perspective.
        </Paragraph>

        <Paragraph>
        Which leaves using an external service like Next.js or Linc. These hosted solutions allow you to focus on the things that matter by building on top of it. One of the ideas that influenced my thinking on this subject a lot is the concept of Stacking. Stacking means you can reliably build on top of something.
        </Paragraph>

        <Paragraph>
        In short: Stackable allows you to add value to other developers because they can focus on the code that differentiates them from their competitors.
        </Paragraph>

        <Paragraph>
        <h2>Linc’s Design Goals</h2>
        If we combine all of the First Principles and consequences we looked at for Bitgenics and Linc we can start to see Linc’s design goals:
        </Paragraph>

        <Paragraph>
        <h2>Amazing Customer Experiences with PWAs</h2>
        We will take your Progressive Web Application and make it as reliable & performant as possible. And with Server-Side Rendering it will play nice with the myriad of crawlers out there.
        </Paragraph>

        <Paragraph>
        <h2>Minimise Time to Deploy</h2>
        We will never be content with the time it takes to go from commit or command to being available in production as long as that time is more than 10–20 seconds. When you get something down 10–20 seconds it means you can easily wait for it and it won’t interrupt your flow. Pushing to production can now be a seamless step in code, test, deploy flow.
        </Paragraph>

        <Paragraph>
        <h2>Testing in Production</h2>
        Testing in production is not just a feature of Linc, but an explicit design goal. We will always be looking to give you more feedback on the different versions you have running at any time.
        </Paragraph>

        <Paragraph>
        <h2>Be Stackable on Multiple Levels</h2>
        Some of the most frustrating experiences in my careers were having built something on top of a particular framework only to later realise it meant we couldn’t do a bunch of things we now wanted. Linc will expose multiple levels of customization. We have configuration files, functions you can override, plugins and at the bottom profiles, where you can build your entire stack from scratch (or more likely, take one of ours and adapt it). That also allows us to support many different stacks, such as React, Angular, Vue etc.
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
