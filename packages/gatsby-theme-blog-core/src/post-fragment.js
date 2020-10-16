import { graphql } from 'gatsby';

export const fragment = graphql`
  fragment PostFragment on Post {
    collection
    title
    author
    date(formatString: "MMMM DD, YYYY")
    datetime: date(formatString: "YYYY-MM-DD")
    description
    body
    path
  }
`;
