import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
//import Content, { HTMLContent } from '../components/Content'

export const DesignerTemplate = ({ title }) => {
    console.log("Name: ", title);
    return <div style={{ backgroundColor: 'red', height: 50, width: 100 }}/>
}

const Designer = ({ data}) => {
    const { markdownRemark: post } = data
    return <Layout>
        <DesignerTemplate title={post.frontmatter.title}/>
    </Layout>
}

DesignerTemplate.propTypes = {
    title: PropTypes.string.isRequired,
  }

export default Designer

Designer.propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.object,
    }),
  }

export const pageQuery = graphql`
  query DesignerByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      
      html 
      frontmatter {
        title
      }
    }
  }
`
