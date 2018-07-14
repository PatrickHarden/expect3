import React from 'react'
import { withSiteData } from 'react-static'
import { Helmet } from "react-helmet";
import Navigation from '../Nav'


export default withSiteData(class SiteHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const siteTitle = this.props.title
        const siteRoot = this.props.siteRoot
        const desc = this.props.options.metaDescription
        const keywords = this.props.options.metaKeywords

        return (
            <header>
                <Helmet>
                    {keywords ? <meta name="keywords" content={`${keywords}`} /> : <meta name="keywords" content="" />}
                    {desc ? <meta name="description" content={`${desc}`} /> : <meta name="description" content="" /> }
                    <meta name="category" content="Web Development, Search engine optimization, Marketing, Web Design" />
                    <meta name="google-site-verification" content="u_TOaetBaAPs3qiIPjxq9tOBOdAcHJQh6rNAXaJ8elc" />
                    <meta name="robots" content="index, follow" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Expect3 Digital Marketing Agency | The Fastest Websites Around</title>
                    <link rel="canonical" href={siteRoot} />
                    <meta property="og:url" content="https://expect3.com/" />
                    <meta property="og:image" content="https://www.expect3.com/images/ex3-logo2.png" />
                    <meta property="og:description" content="Looking for a fast website? Call us now! We have developed a new website framework that will merge insanely fast speed with the ease of a wordpress content management system." />
                    <meta name="twitter:site" content="@eXpect_3" />
                    <meta property="fb:app_id" content="451471661586446" />
                    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-oi8o31xSQq8S0RpBcb4FaLB8LJi9AT8oIdmS1QldR8Ui7KUQjNAnDlJjp55Ba8FG" crossorigin="anonymous" />
                    <script async src="https://www.google-analytics.com/analytics.js" />
                    <script async src="/assets/js/autotrack.custom.js" />
                </Helmet>
                <Navigation />
            </header>
        )
    }
})