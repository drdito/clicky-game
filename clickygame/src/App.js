import React, { Component } from "react";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Grid/Container"; 
import Row from "./components/Grid/Row";
import Col from "./components/Grid/Col";
import ImageContainer from "./components/ImageContainer";

class App extends Component {

//setting initial state for stateful component
  state = {
    score: 0,
    topScore: 0
  }

  render() {
    return (
      <Container fluid = "-fluid">
        <Nav 
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Jumbotron/>
        <Row>
        <ImageContainer/>
        </Row>
      </Container>
    );
  }
}
export default App;
