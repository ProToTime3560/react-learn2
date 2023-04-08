import React, { useState } from "react";
import {
  Button,
  Navbar,
  Container,
  Nav,
  useAccordionButton,
} from "react-bootstrap";
import "./App.css";
import { data, Card } from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detailpage.js";
import Event from "./routes/Eventpage.js";
import About from "./routes/Aboutpage.js";
import axios from "axios";

function App() {
  let [item, setitem] = useState(data);
  let navigate = useNavigate();
  let [addcount, setAddCount] = useState(2);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">프로토Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail/0");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/Event/one");
              }}
            >
              Event
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>

              <Button
                onClick={() => {
                  let newArray = [...item];
                  newArray.sort((a, b) => a.title.localeCompare(b.title));
                  setitem(newArray);
                }}
              >
                상품정렬
              </Button>

              <div className="container">
                <div className="row">
                  {item.map(function (a, i) {
                    return <Card key={i} item={item[i]} i={i}></Card>;
                  })}
                </div>
              </div>
              <button
                onClick={() => {
                  setAddCount(addcount + 1);

                  let url =
                    "https://codingapple1.github.io/shop/data" +
                    addcount +
                    ".json";
                  axios
                    .get(url)
                    .then((결과) => {
                      console.log(결과.data);
                      let newArray = [...item, ...결과.data];
                      setitem(newArray);
                      console.log(item);
                    })
                    .catch(() => {
                      console.log("결과.data");
                      window.alert("상품이 더 없습니다!");
                    });
                }}
              >
                버튼
              </button>
            </>
          }
        />
        <Route path="/detail/:userinputid" element={<Detail item={item} />} />
        <Route path="*" element={<div>404 not found.</div>} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치임</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route
            path="one"
            element={<div>첫 주문시 양배추즙 서비스</div>}
          ></Route>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
