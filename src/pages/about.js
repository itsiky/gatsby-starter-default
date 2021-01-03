import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sharkimg from "../components/sharkimg"

export default function About() {
  return (
    <Layout>
     <SEO title="About" />   
     <h1>About Us</h1>  
      <p></p>
     <Sharkimg/>
      <Link to="/">Go back to the homepage</Link> 
    </Layout>
  )
}