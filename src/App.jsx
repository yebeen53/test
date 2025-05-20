import React from 'react'
import { useState } from 'react'

const App = () => {
  const style={
      display:"flex",
      gap : "12px",
      padding:"50px"
  }
  const [user,setUser]=useState([
    //초기값을 객체로 넣어줌
    {
      id:new Date().getTime(),
      date:6.30,
      name:"기프랩랩"
    },
    {
      id:new Date().getTime()+1,
      date:6.24,
      name:"언지지"
    },
    {
      id:new Date().getTime()+2,
      date:6.21,
      name:"소연연"
    },
    {
      id:new Date().getTime()+3,
      date:6.29,
      name:"지찬"
    }
  ]
  );
  //const vegetable=["감자","고구마","오이","가지","옥수수"];
  //객체로 이루어진 배열 
 
  return (
    <div style={style}>
      {

        user.map(function(user){
          return (
          <User user={user}/>);//이렇게 써주면 user가 props안으로 들어감
        }

      )
      }
    </div>
  )
}

export default App
//user 컴포넌트 만들기 props를 받아오는데 이 props안에 user객체를 넘겨주도록
const User=({user})=>{
  const squareStyle={
    width:"100px",//가로로
        height:"100px",//세로로
        border: "1px solid green",//가장자리 초록색으로 그려줌
        borderRadius:"10px",//모서리 둥글게
        display:"flex",//가운데로 정렬,alignItems Justifycontent 쓰기 전에 써야
        alignItems:"center",//세로 방향으로 가운데 정렬
        justifyContent:"center",//가로 방향으로 가운데 정렬
  }
  return <div style={squareStyle}>
    {user.date}-{user.name}

  </div>

}