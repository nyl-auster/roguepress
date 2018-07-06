import React from "react";
import Header from "../ui/Header";
import Container from "../ui/Container";

const Layout = ({ children }) => (
  <div>
    <Header>
      <Container>
        <h1>ROGUEPRESS DEMO</h1>
        <h2>REACT + WORDPRESS THAT ROCKS</h2>
      </Container>
    </Header>
    <div style={{ paddingBottom: "4rem" }}>
      <Container>
        <div>{children}</div>
      </Container>
    </div>
  </div>
);

export default Layout;
