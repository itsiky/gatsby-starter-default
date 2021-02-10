import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Team = () => (
  <Layout>
    <SEO title="Team" />
    <h1>Hi from the Team members page</h1>
    <p>Welcome to Team page</p>
    <p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/-HAi_5IIAYg" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Team

