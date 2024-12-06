import React, { useContext, useEffect, useState } from 'react'
import "./SideBarSection.css"
import "../../component/headerComponent/HeaderComponent.css"
import { MyContext, socket } from '../HomePage/HomePage';
import FriendListSection from '../../component/FriendListSection/FriendListSection';
function SideBarSection() {

  const friendList = [0,1,3,4,5,6];

  const { userData } = useContext(MyContext);
  const [isSearch , setIsSearch ] = useState(false);


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
        <div className= {`headerComponent appName`} style={{fontSize:  18}} >
             <div className='searchDivStyle' style={{backgroundColor : isSearch ? "black" : "transparent"}} > 
                  <div style={{display: 'flex' , alignItems: "center"}}> 
                  <input className='searchStyle' placeholder='Search and Add friend'
                   onClick={()=>{
                    setIsSearch(true);
                   }}
                   >
                  </input>
                  
                 { 
                    isSearch?
                   <img src='https://static-00.iconduck.com/assets.00/circle-cross-icon-1024x1024-8o50movz.png' 
                    style={{height: "30px" , width: "30px" ,marginLeft: "10px", borderRadius: "30px", backgroundColor: "white"}}
                    onClick={()=>{setIsSearch(false)}} 
                  />:<div/>
                 }   

                  </div>
               
                 {

                  isSearch? <div className = 'resultListStyle'>
                    {
                      [1,2,3,1,2,3,1,2].map(()=>{
                      return  <div className='searchResultCArd'>
                        <span style={{fontSize: "18px" , fontWeight : "500" , letterSpacing: "1px" }}>Manvendra</span>
                        <span style={{fontSize: "12px" , fontWeight : "normal" , letterSpacing: "1px" , color: "aqua"}}>Manvendra.apk</span>
                      </div>
                      })
                    }

                  </div> : <div/>

                  }
             </div>
            
        </div>
         <FriendListSection tittle={"Friend List"}/>
            <div style={{width: "100%" ,margin: "20px 0px", height: "1px",backgroundColor: "#BABABA"}}></div>
         <FriendListSection tittle={"Group List"}/>
         {/* <span className='headingText'>Group List</span>         */}
    </div>
       
  )
}

export default SideBarSection


