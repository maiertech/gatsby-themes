import { useStaticQuery, graphql } from 'gatsby';
import { filterNodes } from '@maiertech/gatsby-helpers';

export const useTags = (filter) => {
  // This static query cannot be restricted to a specific collection of tags.
  // This can be done by applying a filter.
  const data = useStaticQuery(graphql`
    query {
      allTag(sort: { fields: [name, collection], order: [ASC, ASC] }) {
        nodes {
          ...TagFragment
        }
      }
    }
  `);

  return filterNodes(data, filter);
};