import { useParams } from 'react-router-dom'
function Detail(props) {

  let { userinputid } = useParams();
  if (userinputid <= props.item.length) {
    let originproduct = props.item.find(item => item.id == userinputid);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={process.env.PUBLIC_URL + originproduct.imgUrl} className="item-img"></img>
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{originproduct.title}</h4>
            <p>{originproduct.content}</p>
            <p>{originproduct.price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div> 404 not found.</div>
  )
}



export default Detail;