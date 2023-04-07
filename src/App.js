import React, { useState } from 'react';
import { Button, Navbar, Container, Nav, useAccordionButton } from 'react-bootstrap';
import './App.css';
import {data, Card} from './data.js';

function App() {

  let [item] = useState(data)

  return ( 
    <div className="App">
       <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">프로토Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    <div className="main-bg"></div>

    <div className="container">
        <div className="row">
         {
          item.map(function(a, i) {
            return (
              <Card item={item[i]}></Card>
            )
          })
         }
        </div>

    </div>

    </div>
  );
}

export default App;
