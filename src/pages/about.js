import React from 'react';

const About = ({ data }) => (
  <article className="sheet">
    <h1>{data.datoCmsAboutPage.title}</h1>
    <p>{data.datoCmsAboutPage.subtitle}</p>
    <img src={data.datoCmsAboutPage.photo.url} />
    <div dangerouslySetInnerHTML={{ __html: data.datoCmsAboutPage.bio }} />
  </article>
);

export const query = graphql`
  query AboutQuery {
    datoCmsAboutPage {
      title
      subtitle
      photo { url }
      bio
    }
  }
`;

export default About