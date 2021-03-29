import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const JumboTron = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1 className="text-center">Employee Directory</h1>
        <p className="text-center">
          {/* This is a modified jumbotron that occupies the entire horizontal space
          of its parent. */}
        </p>
      </Container>
    </Jumbotron>
  );
};

export default JumboTron;
