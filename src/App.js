import React, { useState } from 'react';
import { Button, Navbar, Container, Nav, useAccordionButton } from 'react-bootstrap';
import './App.css';
import { data, Card } from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detailpage.js'
import Event from './routes/Eventpage.js'
import About from './routes/Aboutpage.js'

function App() {

  let [item, setitem] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">프로토Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail/0') }}>Detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('/Event/one') }}>Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>

               <Button onClick={() => {
                  let newArray = [...item];
                  newArray.sort((a, b) =>
                  a.title.localeCompare(b.title));
                  setitem(newArray);
                }}>상품정렬</Button>

            <div className="container">
              <div className="row">
                {
                  item.map(function (a, i) {
                    return (
                      <Card item={item[i]}></Card>
                    )
                  })
                }
              </div>
            </div>
          </>
        } />
        <Route path="/detail/:userinputid" element={<Detail item={item} />} />
        <Route path="*" element={<div>404 not found.</div>} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치임</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>

      </Routes>

    </div>
  );
}



export default App;