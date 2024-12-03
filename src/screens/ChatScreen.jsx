import "./ChatScreen.css"
import HeaderComponent from '../component/headerComponent/HeaderComponent.jsx';

import ChatDiv from "../component/ChatDivComponent/ChatDiv.jsx";
import InputSection from "../component/InputSection/InputSection.jsx";
import LoginModel from "../component/LoginModel/LoginModel.jsx";
import { useState } from "react";


function ChatScreen(){
  
  const [showModel, setShowModel] = useState(true);
   

  return (
        <div  className='parentContainer'>
              {
                showModel? <LoginModel showModel={setShowModel} /> : <div className='container'> 
                <HeaderComponent/>
                <ChatDiv/>
                <InputSection/>
              </div>
              }
        </div>
         
  )
}

export default ChatScreen;