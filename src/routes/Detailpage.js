import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;

function Detail(props) {
  let [text, setText] = useState("");

  useEffect(() => {
    let a = setTimeout(() => {
      setalert(false);
    }, 2000);
    return () => {
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
      <div className="container">
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
      </div>
    );
  }
  return <div> 404 not found.</div>;
}

export default Detail;
