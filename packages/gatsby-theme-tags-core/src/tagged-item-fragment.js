import { graphql } from 'gatsby';

// https://www.gatsbyjs.com/docs/graphql-reference/#fragments
export const fragment = graphql`
  fragment TaggedItem on Mdx {
    id
    fields {
      collection
      path
    }
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
      datetime: date(formatString: "YYYY-MM-DD")
      description
      tags
    }
  }
`;
