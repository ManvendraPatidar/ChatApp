import React, { useEffect, useState } from 'react'
import "./HomePage.css"
import ChatScreen from '../ChatScreen'
import SideBarSection from '../SideBarSection/SideBarSection'
import PopUp from '../../component/PopUpComponent/popUp'

import LoginModel from '../../component/LoginModel/loginModel';


export const BASEURL = "http://192.168.100.132:5000";

// export const socket = io(URL);

// socket.on("connect", () => {
//   // console.log("Connectedd !", socket.id); // x8WIv7-mJelg7on_ALbx
// });


// socket.on("sendMessage",(e)=>{
//   // console.log("rec message ",e);
// })
   

export const MyContext = React.createContext({});


function HomePage() {

  const [userData, setUserData] = useState({});
  const [showLoginModel, setShowLoginModel] = useState(true);
   const [showPopUp,setShowPopUp] = useState(false);


  useEffect(() => {
    const user = fetchUserDetails();

    console.log("empty--->",user)
    if(user.userId)
    {
      setUserData(user);
      setShowLoginModel(false)
    }
    else{
      setShowLoginModel(true)
    }
  }, [])


  useEffect(()=>{
    
   console.log("changeeeee edetected ")
   if(!userData){
    setShowLoginModel(true);
   }
    
  },[userData])

  return (
    <MyContext.Provider value={{userData , setUserData ,setShowPopUp}}>

    <div className='parentContainer'>
     
      { 
        showLoginModel ? <LoginModel setShowLoginModel={setShowLoginModel} />:
        // false?
              <div className="container">
                  <SideBarSection />
                  <ChatScreen userData= {{userName :"Monty", userId: "Monty.122",roomId: "U90"}} />
 
              </div>
      }

                  {
                  showPopUp ? <PopUp/> : <div/>
                  }

    </div>
      </MyContext.Provider>
  )
}



function fetchUserDetails() {
  const user = localStorage.getItem("userData");
  if (user) {
    return JSON.parse(user);
  }
  else {
    console.log("returning 0")
    return {};
  }
}

export default HomePage