import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Helmet } from "react-helmet";
//

export default () => (
  <div>
    <Helmet>
      <body className="fourohfour" />
    </Helmet>
    <Container>
      <Row>
        <Col xs="12">
          <h1>404 - Oh no! We couldn't find that page :(</h1>
        </Col>
      </Row>
    </Container>
  </div>
)
