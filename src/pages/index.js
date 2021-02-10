import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to my new site.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/information/">Information</Link> <br />
    <Link to="/contactus/">Contact Us</Link> <br />
    <Link to="/about/">About Us</Link> <br /> 
    <Link to="/team/">Our Team</Link> <br /> 
   </Layout>
)

export default IndexPage
