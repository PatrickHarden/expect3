import React from 'react'
import { withSiteData, Link } from 'react-static'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

export default withSiteData(class SiteFooter extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const siteTitle = this.props.title
        const siteCreator = this.props.siteCreator
        const siteCreatorURL = this.props.siteCreatorURL

        return (
            <div>
            <section id="services">
            <div className="container">
              <form action="https://formspree.io/sales@lawyermarketingusa.com" method="POST">
                <Row>
                  <div className="col-lg-6">
                    <h1>Ready to</h1>
                    <h2>get started?</h2>
                    <p>Or even if you have a question, lets talk. Shoot us a message and one of our <strong>Site Speed Experts</strong> will happily answer any questions you may have. </p>
                  </div>
                  <div className="col-lg-6">
                    <Row className="contactGrid">
                    <div className="col-lg-6">
                        <input type="text" placeholder="Full Name" name="name" />
                      </div>
                      <div className="col-lg-6">
                        <input type="email" placeholder="Email" name="email" />
                      </div>
                    </Row>
                    <Row className="messageGrid">
                    <div className="col-lg-12">
                        <textarea name="message" placeholder="How can we help your website?" />
                      </div>
                    </Row>
                    <Row className="submitGrid">
                    <div className="col-lg-4">
                        <input type="submit" className="submitButton" placeholder="Send" name="Send" value="Submit" />
                      </div>
                    </Row>
                  </div>
                </Row>
              </form>
            </div>
          </section>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            &copy; 2018 <a href={siteCreatorURL}>{siteCreator}</a> | <Link to="/terms">Terms &amp; Conditions</Link>
                        </div>
                        <div className="col-sm-6">
                            <div class="sociallinks"><a href="https://www.facebook.com/eXpect3marketing/" target="new"><i class="fab fa-facebook-square"></i></a><a href="https://twitter.com/eXpect_3" target="new"><i class="fab fa-twitter-square"></i></a><a href="https://plus.google.com/+eXpect3MarketingTulsa" target="new"><i class="fab fa-google-plus-square"></i></a><a href="https://www.instagram.com/expect3marketing/" target="new"><i class="fab fa-instagram"></i></a><a href="https://www.linkedin.com/company/expect3-digital-media-agency" target="new"><i class="fab fa-linkedin-square"></i></a><a href="https://www.pinterest.com/expect3media/" target="new"><i class="fab fa-pinterest-square"></i></a><a href="https://vimeo.com/expect3media" target="new"><i class="fab fa-vimeo-square"></i></a></div>
                        </div>
                    </div>
                </div>
            </footer>
            </div>
        )

    }
})