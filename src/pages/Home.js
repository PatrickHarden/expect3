import React from 'react'
import { withSiteData, Link } from 'react-static'
import { Helmet } from "react-helmet";


//
import { Row, Col, Button } from 'reactstrap';
import Particles from 'react-particles-js'
import { BrowserView, isBrowser } from "react-device-detect";
import CircleGraph from '../sections/Circle'
import CircleGraph2 from '../sections/Circle2'
import CircleBlank from '../sections/CircleBlank'
import CircleBlank2 from '../sections/CircleBlank2'
import LineGraph from '../sections/Graph'
import VisibilitySensor from 'react-visibility-sensor'
import Typed from 'react-typed'


export default withSiteData(() => (
  <article id="home">
    <Helmet>
      <body className="home" />
    </Helmet>
    <div className="home">
      <BrowserView device={isBrowser}>
        <Particles width="100%" height="680px" className="particles" params={{
          particles: {
            line_linked: {
              shadow: {
                enable: true,
                color: "#fff",
                blur: 5,
              }
            },
            number: {
              value: 71,
            },
            move: {
              speed: 3
            }
          },
          interactivity: {
            events: {
              onresize: {
                enable: true,
                density_auto: true
              }
            },
          }
        }}
          style={{
            width: '100%',
            backgroundColor: 'rgba(4, 181, 239, .7)',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
          }} />
      </BrowserView>
      <section id="welcome">
        <div className="container">
          <div className="leftText">
            <h1>the fastest</h1>
            <h2>websites</h2>
            <p>We've all experienced the frustation of waiting for a website to load. We build the world's fastest websites and pair them with the world's most popular content management system, WordPress.</p>
            <Link to="/about"><Button>See for yourself</Button></Link>
          </div>
          <div className="rightText">
            <img src="/images/homeLaptop.gif" />
          </div>
        </div>
      </section>
      <section id="panelTwo">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1>Speed past the</h1>
              <h2>competition</h2>
              <p>Comparing our websites to others is like watching Charlie Brown fall for the football trick... <strong>it's just sad.</strong> In today's instant gratification world, how long do you think a customer will wait for things to load? </p>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-6">
                  <VisibilitySensor>
                    {({ isVisible }) =>
                      <div> {isVisible ? <CircleGraph2 /> : <CircleBlank2 />} </div>}
                  </VisibilitySensor>
                </div>
                <div className="col-md-6">
                  <VisibilitySensor>
                    {({ isVisible }) =>
                      <div> {isVisible ? <CircleGraph /> : <CircleBlank />} </div>}
                  </VisibilitySensor>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="panelThree">
        <div className="container">
          <Row>
            <div className="col-lg-6">
              <img src="/images/editor.svg" />
              <Typed
                strings={['See how easy itt is to rewrrite', 'See how easy it is to rewrite content.']}
                typeSpeed={40}
              />
            </div>
            <div className="col-lg-6">
              <h1>Easy to use </h1>
              <h2>Websites</h2>
              <p>Wordpress is the undisputed king of website content management systems (CMS). Why? Because it makes it ridiculously easy to edit your website. With that said... <strong>we don't use WordPress to display</strong> your website. We merely use it for what it is good at; managing the content on your website. </p>
            </div>
          </Row>
        </div>
      </section>
      <section id="panelFour">
        <div className="container">
          <Row>
            <div className="col-lg-6">
              <h1>Grow your</h1>
              <h2>Business</h2>
              <p>The world has been inundated with "Search Engine Optimization" for decades. At a certain point, without results, all that term is, is a sales gimmick. <strong>Our websites are built to grow business.</strong> Are you ready for a growth spurt?</p>
              <div className="row legend">
                <div className="col-sm-4">
                  <Row>
                    <Col xs="4">
                      <div id="green">
                      </div>
                    </Col>
                    <Col xs="8">
                      <p>Visitors</p>
                    </Col>
                  </Row>
                </div>
                <div className="col-sm-4">
                  <Row>
                    <Col xs="4">
                      <div id="blue">
                      </div>
                    </Col>
                    <Col xs="8">
                      <p>Time on site</p>
                    </Col>
                  </Row>
                </div>
                <div className="col-sm-4">
                  <Row>
                    <Col xs="4">
                      <div id="purple">
                      </div>
                    </Col>
                    <Col xs="8">
                      <p>SEO Rankings</p>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <VisibilitySensor>
                {({ isVisible }) =>

                  <div> {isVisible ? <LineGraph /> : <div id="noLines"><LineGraph /></div>} </div>}
              </VisibilitySensor>
            </div>
          </Row>
        </div>
      </section>
    </div>
  </article>
))
