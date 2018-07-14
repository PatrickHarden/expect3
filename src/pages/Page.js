
import React from 'react'
import { withRouteData, Link } from 'react-static'
import { Container, Row, Col } from 'reactstrap';
import { Helmet } from "react-helmet";
//

import ReactHtmlParser from 'react-html-parser'

export default withRouteData(({ page }) => (
  <section>
    <Helmet>
      <body class={'single-page page-id-' + page.id + ' ' + page.slug} />
      <title>{page.yoast_meta.yoast_wpseo_title}</title>
      <meta name="description" content={`${page.yoast_meta.yoast_wpseo_metadesc}`} />
    </Helmet>


    {ReactHtmlParser(page.content.rendered)}

  </section>




      ))
