import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const InfoPage = () => (
  <Layout>
    <SEO title="Information" />
    <h1>Hi from the information page</h1>
    <p>Welcome to information page</p>
    <p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/4SZl1r2O_bY" frameborder="0" allowfullscreen></iframe>
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default InfoPage

