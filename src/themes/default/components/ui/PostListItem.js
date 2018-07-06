import React from "react";
const PostListItem = ({ post }) => (
  <div style={{ marginBottom: "2rem" }}>
    <style>
      {/* hack to hide default more-link button from wordpress*/}
      {".more-link{display:none}"}
    </style>
    <h2 dangerouslySetInnerHTML={{ __html: post.title }} />
    <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
    <LinkButton to={`/post/${post.slug}`}>Read more</LinkButton>
  </div>
);

export default PostListItem;
