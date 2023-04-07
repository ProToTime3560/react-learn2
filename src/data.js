let data = [
  {
    id : 0,
    title : "볼렌치",
    content : "각종 기계장비의 볼트를 조이고 풀때 사용함",
    price : 120000,
    imgUrl : '/Ball wrench.jpg'
  },

  {
    id : 1,
    title : "전동 드라이버",
    content : "건축, 자동차 수리, 가구 조립 등의 다양한 작업에 사용",
    price : 110000,
    imgUrl : '/Electric screwdriver.jpg'
  },

  {
    id : 2,
    title : "니퍼",
    content : "작은 물건을 자를 때 사용되는 측면 절단 도구",
    price : 130000,
    imgUrl : '/Nipper.jpg'
  }
] 

function Card(props) {
  return(
    <div className='col-md-4'>
      <img src= {process.env.PUBLIC_URL + props.item.imgUrl} className="item-img"></img>
      <h4>{props.item.title}</h4>
      <p>{props.item.content}</p>
    </div>
  )
}


export {data, Card};