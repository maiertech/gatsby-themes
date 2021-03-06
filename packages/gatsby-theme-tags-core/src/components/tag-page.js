import React from 'react';
import { object } from 'prop-types';

const TagPage = ({ data, location, pageContext }) => (
  <>
    <h1>location</h1>
    <pre>{JSON.stringify(location, null, 2)}</pre>
    <h1>pageContext</h1>
    <pre>{JSON.stringify(pageContext, null, 2)}</pre>
    <h1>data</h1>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </>
);

TagPage.propTypes = {
  data: object.isRequired,
  location: object.isRequired,
  pageContext: object.isRequired,
};

export default TagPage;
