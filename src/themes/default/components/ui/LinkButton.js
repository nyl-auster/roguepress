import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ children, ...rest }) => {
  return (
    <div>
      <Link {...rest} prefetch>
        <a> {children}</a>
      </Link>
    </div>
  );
};

export default LinkButton;
