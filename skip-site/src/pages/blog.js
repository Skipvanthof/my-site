import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog 1: Static site generators.</h1>
    <p>Welcome to my blog</p>


    <p>
      I have tried out static site generators (SSG?) before, the first one I tried was <a href="https://jekyllrb.com/">Jekyll</a>. This was about a year ago and I became interested. A few days ago I read a blog post about different kinds of SSG's and one they mentioned was Gatsby, this SSG uses React and since i'm learning React i thought I would try out this one. 

      It was a bit weird for me to try out automatic deployment to Github, I am using <a href="https://pages.github.com/">gh-pages</a> to host this blog. By running the command "npm run start" all the code from the public folder gets commited (and pushed!) to the 'gh-pages' branch in my repository. I had to make sure i was working on a 'develop' branch before and not in the 'gh-pages' branch, this was my first mistake :p. Once i got the hang of the git process it's actually very easy and fast!
    </p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
