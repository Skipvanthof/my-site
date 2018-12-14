import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />

    <h1>Hi people</h1>
    <p>Welcome to my blog.</p>

    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
      <img src="https://source.unsplash.com/random/400x200" alt="" />{" "}
    </div>

    <Link to="/blog/">blog</Link>
  </Layout>
)

export default IndexPage
