import React, { useContext, useEffect, useState } from "react";
import "./FriendListSection.css";
import { MyContext } from "../../screens/HomePage/HomePage";
// import { socket } from '../../screens/HomePage/HomePage';
function FriendListSection({ tittle, list }) {
  const [members, setMembers] = useState([]);
  const { setCurrentChat } = useContext(MyContext);

  useEffect(() => {
    setMembers(list);
  });

  return (
    <div>
      <span className="headingText">{tittle}</span>
      <div className="friendListStyle">
        {members.map((i, index) => {
          // console.log("thi is last id ,",i);
          return (
            <div
              key={index}
              className="friendCardStyle"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
              }}
              onClick={() => {
                // console.log("clicked on ",i,i.name);
                setCurrentChat({ id: i.userId, name: i.name });
                localStorage.setItem(
                  "currentChat",
                  JSON.stringify({ id: i.userId, name: i.name })
                );
              }}
            >
              {/* {i.split(".")[0]} */}
              {/* {i.name} */}
              <span style={{ color: "#ff9800", fontSize: "20px" }}>
                {i.name}
              </span>

              {tittle != "Groups" ? (
                <span
                  style={{
                    fontSize: "14px",
                    color: "black",
                    letterSpacing: "1px",
                    fontWeight: "normal",
                  }}
                >
                  {i.email}
                </span>
              ) : (
                <div />
              )}
            </div>
          );
        })}
      </div>
      {/* <div style={{width: "100%" ,margin: "20px 0px", height: "1px",backgroundColor: "#BABABA"}}></div> */}
    </div>
  );
}

export default FriendListSection;
