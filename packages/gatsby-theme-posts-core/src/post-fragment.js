import { graphql } from 'gatsby';

// https://www.gatsbyjs.com/docs/graphql-reference/#fragments
export const fragment = graphql`
  fragment PostFragment on Post {
    id
    collection
    title
    author
    date(formatString: "MMMM DD, YYYY")
    datetime: date(formatString: "YYYY-MM-DD")
    description
    tags
    images {
      src {
        childImageSharp {
          gatsbyImageData
          original {
            src
          }
        }
      }
      title
      alt
    }
    body
    path
    canonicalUrl
  }
`;
