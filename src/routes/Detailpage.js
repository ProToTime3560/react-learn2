import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from 'react-bootstrap'

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;

function Detail(props) {
  let [text, setText] = useState("");
  let [탭, 탭변경] = useState(0)
  let [animattime, setanimat] = useState('')

  useEffect(() => {
    let a = setTimeout(() => {
      setalert(false);
    }, 2000);
    setTimeout(() => {
      setanimat('end')
    }, 10);
    return () => {
      setanimat('')
      clearTimeout(a);
    }; // useeffect실행되기전, un마운트시 1회 실행되는 공간 기존에 있던 요청 제거할떄 사용
  }, []); //< - ,[] 마운트시만 실행 즉 1번만

  useEffect(() => {
    if (isNaN(text) == true) {
      window.alert("그러지마세요");
    }
  }, [text]);
  let [alert, setalert] = useState(true);
  let { userinputid } = useParams();

  if (userinputid <= props.item.length) {
    let originproduct = props.item.find((item) => item.id == userinputid);

    return (
      <div className="container" className={'start ' + animattime }>
        {alert == true ? (
          <div className="alert alert=warning">2초이내 구매시 할인</div>
        ) : null}
        <div className="row">
          <div className="col-md-6">
            <img
              src={process.env.PUBLIC_URL + originproduct.imgUrl}
              className="item-img"
            ></img>
          </div>
          <div className="col-md-6">
            <input
              onChange={(e) => {
                setText(e.target.value);
              }}
            />{" "}
            <button>버튼</button>
            <h4 className="pt-5">{originproduct.title}</h4>
            <p>{originproduct.content}</p>
            <p>{originproduct.price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>

          <Nav variant="tabs" defaultActiveKey="link0">
            <Nav.Item>
              <Nav.Link eventKey="link0" onClick={()=> { 탭변경(0)}}>버튼0</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link1" onClick={()=> { 탭변경(1)}}>버튼1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link2" onClick={()=> { 탭변경(2)}}>버튼2</Nav.Link>
            </Nav.Item>
          </Nav>
 
          <TabContent 탭= {탭}/>

      </div>
    );
  }
  return <div> 404 not found.</div>;
}

function TabContent(props) {
  let [fade, setFade] = useState('')
  useEffect(() => {
    setTimeout(()=> { setFade('end')}, 10)
    return()=> {
      setFade('')
    }
  }, [props.탭])
  return (<div className={'start ' + fade}>
    { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.탭] }
  </div>)
}
export default Detail;
