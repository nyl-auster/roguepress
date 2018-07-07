import React from "react";
import PostListItem from "./PostListItem";

const PostList = ({ edges }) => {
  return (
    <div>
      {edges.map(edge => <PostListItem key={edge.node.id} post={edge.node} />)}
    </div>
  );
};

export default PostList;
