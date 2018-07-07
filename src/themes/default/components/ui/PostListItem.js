import React from "react";
import { Link } from "react-router-dom";
const PostListItem = ({ post }) => (
  <div style={{ marginBottom: "2rem" }}>
    <style>
      {/* hack to hide default more-link button from wordpress*/}
      {".more-link{display:none}"}
    </style>
    <h2 dangerouslySetInnerHTML={{ __html: post.title }} />
    <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
    <Link to={`/post/${post.slug}`}>Read more</Link>
  </div>
);

export default PostListItem;
