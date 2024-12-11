import React, { useEffect, useState } from "react";
import "./HomePage.css";
import ChatScreen from "../ChatScreen";
import SideBarSection from "../SideBarSection/SideBarSection";
import PopUp from "../../component/PopUpComponent/popUp";

import LoginModel from "../../component/LoginModel/loginModel";
import { io } from "socket.io-client";

export const BASEURL = "http://192.168.100.117:5000";

export const socket = io(BASEURL);

socket.on("connect", () => {
  console.log("Connectedd !", socket.id); // x8WIv7-mJelg7on_ALbx
});

export const MyContext = React.createContext({});

function HomePage() {
  const [userData, setUserData] = useState({});
  const [showLoginModel, setShowLoginModel] = useState(true);
  const [showPopUp, setShowPopUp] = useState(false);
  const [currentChat, setCurrentChat] = useState({});

  useEffect(() => {
    const user = fetchUserDetails();

    if (user.userId) {
      const obj = user;

      setUserData(obj);

      setShowLoginModel(false);
    } else {
      setShowLoginModel(true);
    }

    //checking room
    const currentChat = localStorage.getItem("currentChat");

    const cc = JSON.parse(currentChat);
    // console.log("this is log",currentChat)
    if (cc) {
      setCurrentChat(cc);
    } else {
      console.log("ITS EMPTY");
      setCurrentChat({});
    }
  }, []);

  // console.log("changinggggggg ....... #1");
  useEffect(() => {
    console.log("changeeeee edetected ");

    if (!userData) {
      console.log("After update:", userData);
      setShowLoginModel(true);
    }
  }, [userData]);

  return (
    <MyContext.Provider
      value={{
        userData,
        currentChat,
        setCurrentChat,
        setUserData,
        setShowPopUp,
      }}
    >
      <div className="parentContainer">
        {showLoginModel ? (
          <LoginModel setShowLoginModel={setShowLoginModel} />
        ) : (
          // false?
          <div className="container">
            <SideBarSection />
            <ChatScreen />
          </div>
        )}

        {showPopUp ? <PopUp /> : <div />}
      </div>
    </MyContext.Provider>
  );
}

function fetchUserDetails() {
  const user = localStorage.getItem("userData");
  // console.log("user",JSON.parse(user));

  if (user) {
    return JSON.parse(user);
  } else {
    console.log("returning 0");
    return {};
  }
}

export default HomePage;
