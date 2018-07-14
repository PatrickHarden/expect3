import React from 'react'
import { withRouteData, Link } from 'react-static'
import { Container,
         Row,
         Col,} from 'reactstrap';

import ReactHtmlParser from 'react-html-parser'
import {Helmet} from "react-helmet";
//

function jsonTest(json){
  if(!json){
    return "https://s3.amazonaws.com/expect3/wp-content/uploads/2016/12/27044713/We-Made-a-Blunder-on-Social-Media.-Now-What.jpg"
  } else {
    return json
  }
}

export default withRouteData(({ post }) => (
  <section>
    <Helmet>
      <body className={'single-blog blog-id-'+post.id + ' ' + post.slug} />
    </Helmet>
    <div className="aboutt">
    <h1>{post.title.rendered}</h1>
    </div>
    <div id="features">
    <Container>
      <Row>
        <Col sm="7">
          {ReactHtmlParser(post.content.rendered)}
        </Col>
        <Col sm="5">
        {post.better_featured_image ? <img src={post.better_featured_image.media_details.sizes.medium.source_url} /> : <img src="/images/blog.jpeg" />}
          
        </Col>
      </Row>
    </Container>
    </div>
  </section>
))
