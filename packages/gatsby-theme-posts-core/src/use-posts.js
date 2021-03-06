import { useStaticQuery, graphql } from 'gatsby';
import { filterNodes } from '@maiertech/gatsby-helpers';

export const usePosts = (filter) => {
  // This static query cannot be restricted to a specific collection of posts.
  // This can be done by applying a filter.
  const data = useStaticQuery(graphql`
    query {
      allPost(sort: { fields: [date, title], order: [DESC, ASC] }) {
        nodes {
          ...PostFragment
        }
      }
    }
  `);

  return filterNodes(data, filter);
};
