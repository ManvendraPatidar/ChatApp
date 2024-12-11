import "./ChatScreen.css"
import HeaderComponent from '../component/headerComponent/HeaderComponent.jsx';

import ChatDiv from "../component/ChatDivComponent/ChatDiv.jsx";
import InputSection from "../component/InputSection/InputSection.jsx";
import SideBarSection from "./SideBarSection/SideBarSection.jsx";

function ChatScreen(){


  // console.log(userData);

  return (

                <div className='chatContainer'> 
                  <HeaderComponent/>
                    <ChatDiv/>
                  <InputSection/>
              </div>
         
  )
}

export default ChatScreen; 