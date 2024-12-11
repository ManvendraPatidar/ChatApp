import React, { useContext, useEffect, useState } from 'react'
import "./SideBarSection.css"
import "../../component/headerComponent/HeaderComponent.css"
import { BASEURL, MyContext, socket} from '../HomePage/HomePage';
import FriendListSection from '../../component/FriendListSection/FriendListSection';
import axios from 'axios';
function SideBarSection() {

  // const friendList = [0,1,3,4,5,6];

  const [friendList , setFriendList] = useState([]);
  const [groupList,setGroupList] = useState([]);
  const { userData } = useContext(MyContext);
  const [isSearch , setIsSearch ] = useState(false);
  const [Fkey,setFkey] = useState(0);
  const[GKey,setGkey] = useState(0);
   
  useEffect(()=>{
    fetchFriendList();
    socket.emit("getAllJoinedRooms",{});
  },[Fkey]) 

  useEffect(()=>{
    fetchGroupList();
  },[GKey])
  
   socket.on("allRegUsers",(res)=>{
        //  console.log("Hello respn ***********************************",res.usersList);
        //  setFriendList(res.usersList); 
        console.log(Fkey); 
        setFkey(Fkey+1);
   })
    
   socket.on("roomCreated",(res)=>{
    console.log("ROOM CREAATEDD AND YOU ADDed",res)
    setGkey(GKey+1);
   })  

  // console.log("-------->",socket)

  // socket.emit("getAllJoinedRooms",{userId: "asd-WKFSTGg"});
  // socket.emit("getAllRegUsers");
  // console.log("Hello world !!")
  
  // socket.on("joinedRooms",(rooms)=>{
  //     console.log("all joined rooms ",rooms);
  // })

  

  return (


    <div className='sideBarStyle'>
        <div className= {`headerComponent appName`} style={{fontSize:  18}} >
             
             {/* search feature  */}
             {/* <div className='searchDivStyle' style={{backgroundColor : isSearch ? "black" : "transparent"}} > 
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
             </div> */}
            
        </div>
         <FriendListSection tittle={"Friends"} list={friendList}/>

            <div style={{width: "100%" ,margin: "20px 0px", height: "1px",backgroundColor: "#BABABA"}}></div>
         
         <FriendListSection tittle={"Groups"} list={groupList} />
         {/* <span className='headingText'>Group List</span>         */}
    </div>
       
  )

  function fetchGroupList()
  {
    console.log("CHALUUUUUUUUUUUUUU")
    axios.post(BASEURL+"/getAllJoinedRooms",{
      "userId" : userData.userId
    },).then((res)=>{

    
      if(res.status === 200)
        {
          const tempArray = res.data.rooms;
          console.log("---dataa-->#23",res.data.rooms);
          setGroupList(tempArray);   
          // setFriendList(tempArray);
        } 
   
    }).catch(
      (err)=>{
        console.log("errror -----> ",err);
      }
     )

  }
  
  
 function fetchFriendList()
  {
      axios.get(BASEURL+"/getAllRegUsers").then((res)=>{
   
      if(res.status === 200)
        {
          const tempArray = res.data.users;
          // console.log("---dtaa-->",tempArray);   
          setFriendList(tempArray);
        } 
   
    }).catch(
      (err)=>{
        console.log("errror -----> ",err);
      }
     )
  }

}

export default SideBarSection


