import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const conntact = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact Us</h1>
  <p></p>
    
  <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
  <p></p>
    <Link to="/">Go back to the homepage</Link>
  
  document.querySelector("form").addEventListener("submit", handleSubmit);

  const handleSubmit = (e) => {
  e.preventDefault()
  let myForm = document.getElementById('pizzaOrder');
  let formData = new FormData(myForm)
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
    }).then(() => console.log('Form successfully submitted')).catch((error) =>
        alert(error))
  }
  
  </Layout>
)
export default conntact
