
import React from 'react'
import { withRouteData, Link } from 'react-static'
import { Container,
         Row,
         Col,
         Card,
         CardImg,
         CardText,
         CardBody,
         CardTitle,
         CardSubtitle } from 'reactstrap';

import ReactHtmlParser from 'react-html-parser'
import {Helmet} from "react-helmet";
//

export default withRouteData(({ posts }) => (

  <section>
    <Helmet>
      <body className="blog" />
    </Helmet>
    <div class="aboutt">
    <h1>Blogs</h1>
    </div>
    <div id="features">
    <Container>
      <Row>
        <Col xs="12">
          <h1 id="blogH1">News &amp; Updates</h1>
        </Col>
      </Row>
      <Row>
        <div className="card-columns">
            {posts.map(post => (
              <Card key={post.id} className={"card-" + post.id}>
                <Link to={`/blogs/${post.slug}/`}>
                {post.better_featured_image ? <CardImg top width="100%" src={post.better_featured_image.media_details.sizes.medium.source_url} /> : <img src="/images/blog.jpeg" />}
                </Link>
                  <CardBody>
                    <Link to={`/blogs/${post.slug}/`}>
                      <CardTitle>{post.title.rendered}</CardTitle>
                    </Link>
                    <CardText>{ReactHtmlParser(post.excerpt.rendered)}</CardText>
                    <CardText><small>{post.date.substring(0, post.date.length - 9)}</small></CardText>
                  </CardBody>
              </Card>
            ))}
        </div>
      </Row>
    </Container>
    </div>
  </section>
))
