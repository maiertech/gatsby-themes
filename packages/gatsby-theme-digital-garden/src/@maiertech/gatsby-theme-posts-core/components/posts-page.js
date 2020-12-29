import React from 'react';
import { object } from 'prop-types';
import { SEO } from '@maiertech/gatsby-theme-base';
import {
  Button,
  Container,
  Grid,
  Heading,
  Link,
  PostPreview,
  Themed,
} from '@maiertech/gatsby-theme-theme-ui';

import Layout from '../../../components/layout';

const PostsPage = ({ data, location }) => {
  const posts = data.allPost.posts.map(
    ({ id, title, date, datetime, path }) => ({
      id,
      title: (
        <Heading
          as="h2"
          sx={{
            variant: 'styles.h2',
            mb: 2,
          }}
        >
          {title}
        </Heading>
      ),
      date: { formatted: date, datetime },
      path,
    })
  );
  return (
    <Layout location={location}>
      <SEO title="Posts" description="All posts." path={location.pathname} />
      <Container variant="narrow">
        <Themed.h1>Posts</Themed.h1>
        <Grid gap={4} columns={1}>
          {posts.map(({ id, path, ...post }) => (
            <Link
              key={id}
              href={path}
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                '@media (hover: hover)': {
                  '&:hover': {
                    textDecoration: 'none',
                  },
                },
              }}
            >
              <PostPreview post={{ ...post }} mb={2} />
              <Button as="div" sx={{ fontWeight: 'bold' }}>
                Read →
              </Button>
            </Link>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

PostsPage.propTypes = {
  data: object.isRequired,
  location: object.isRequired,
};

export default PostsPage;
