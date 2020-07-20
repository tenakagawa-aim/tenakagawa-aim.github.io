import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/layout"

const BlogTemplate = ({ data }) => {
  const {
    markdownRemark: {
      html,
      frontmatter: {
        title,
        date
      }
    }
  } = data
  return (
    <Layout>
      <h1>{`${title} Page`}</h1>
      <div>date : {date}</div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default BlogTemplate

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        title
      }
    }
}`
