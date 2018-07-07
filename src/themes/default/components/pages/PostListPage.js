import React from "react";
import PostList from "../ui/PostList";
import Layout from "../layouts/Layout";
import { graphql } from "react-apollo";
import { compose } from "recompose";
import gql from "graphql-tag";

const PostListPage = props => {
  if (props.data.loading) return <div>Loading ...</div>;
  return (
    <Layout>
      <h2>derniers contenus : </h2>
      {props.data.posts && <PostList edges={props.data.posts.edges} />}
    </Layout>
  );
};

const query = gql`
  query posts {
    posts {
      edges {
        node {
          id
          excerpt(format: RENDERED)
          title
          slug
        }
      }
    }
  }
`;

export default compose(graphql(query))(PostListPage);
