import React, { useContext, useState } from 'react'
import "./FriendListSection.css"
import "../../component/headerComponent/HeaderComponent.css"
import { MyContext, socket } from '../HomePage/HomePage';
function FriendListSection() {

  const friendList = [0,1,3,4,5,6];

  const { userData } = useContext(MyContext);

  const [members, setMembers] = useState([]);

  socket.on("roomUsers",(e)=>{
    // console.log(" room users ",e);

    const temp = e.filter((i) => {
      return i != userData.userId;
    })

    // console.log("______--->>",e)
    setMembers(temp);
  })
   


  return (


    <div className='friendListSectionStyle'>
        <div className= {`headerComponent appName`} style={{fontSize:  18}} >Friend List
        </div>
          <div className='friendListStyle'>
             {
               members.map((i)=>{
               return <div key= {"uni"+i} className='friendCardStyle'>
                  {i.split(".")[0]}
                </div>
               })
             }
          </div>
    </div>
       
  )
}

export default FriendListSection


