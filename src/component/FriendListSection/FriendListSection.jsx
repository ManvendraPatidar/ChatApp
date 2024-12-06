import React, { useState } from 'react'
import "./FriendListSection.css"
function FriendListSection({tittle}) {

  const [members, setMembers] = useState([1,99,0]);

  return (
  <div>  
    <span className='headingText'>{tittle}</span>
    <div className='friendListStyle'>
       {
         members.map((i)=>{
         return <div key= {"uni"+i} className='friendCardStyle'>
            {/* {i.split(".")[0]} */}
            Manvendra
          </div>
         })
       }
      
    </div>
    {/* <div style={{width: "100%" ,margin: "20px 0px", height: "1px",backgroundColor: "#BABABA"}}></div> */}
    </div>
  )
}

export default FriendListSection