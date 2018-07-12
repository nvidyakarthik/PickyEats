import React from "react";
import Container from "../../components/Container";
import "./NoMatch.css";

const NoMatch = () => (
  <Container>
    <div className="middle">
      <h1 className="title">404 Page Not Found</h1>
      <button><a id="takeMeHome" href="/">Take me home</a></button>
    </div>
  </Container>
);

export default NoMatch;
