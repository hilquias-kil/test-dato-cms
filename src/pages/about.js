import React from 'react'
import Link from 'gatsby-link'
import { HelmetDatoCms } from 'gatsby-source-datocms'

const About = ({ data }) => (
  <article className="sheet">
    <HelmetDatoCms seo={data.datoCmsAboutPage.seoMetaTags} />
    <h1>{data.datoCmsAboutPage.title}</h1>
    <p>{data.datoCmsAboutPage.subtitle}</p>
  </article>
)

export default About

export const query = graphql`
  query AboutQuery {
    datoCmsAboutPage {
      title
      subtitle
      bio
    }
  }
`
