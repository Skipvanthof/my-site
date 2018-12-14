import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog 1</h1>
    <p>Welcome to my blog</p>


    <p>
      This is my first blog post
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
