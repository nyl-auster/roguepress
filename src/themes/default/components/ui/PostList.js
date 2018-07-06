import React from "react";
import PostListItem from "./PostListItem";

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.edges.map(edge => (
        <PostListItem key={edge.node.id} post={edge.node} />
      ))}
    </div>
  );
};

export default PostList;
