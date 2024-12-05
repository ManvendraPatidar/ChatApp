import "./ChatScreen.css"
import HeaderComponent from '../component/headerComponent/HeaderComponent.jsx';

import ChatDiv from "../component/ChatDivComponent/ChatDiv.jsx";
import InputSection from "../component/InputSection/InputSection.jsx";

function ChatScreen(props){

  const {userData} = props;
   
  // console.log(userData);

  return (

                <div className='chatContainer'> 
                  <HeaderComponent userData={userData}/>
                    <ChatDiv/>
                  <InputSection/>
              </div>
         
  )
}

export default ChatScreen; 