import { useContext, useState } from "react"
import "./LoginModel.css"
import { MyContext, socket } from "../../screens/HomePage/HomePage";
import "../headerComponent/HeaderComponent.css";
function LoginModel({ showModel }) {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const { setUserData } = useContext(MyContext);

  return (
    <div className="loginModel" >
     <span className="appName">SIGNAL</span>
      <div className="LoginCard">
        <span className="name" >  {isLogin ? "Log In" : "Sign Up"}</span>
        <input placeholder="Email Address" className="inputClass" value={email} onChange={(n) => { onNameChange(n, "name") }}></input>
        {
          isLogin ?  <div/>:<input placeholder="Enter you Name" className="inputClass" value={name} onChange={(n) => { onNameChange(n, "room") }} /> 

        }
        <button className="button" style={{margin: "10px 0px 20px 0px" ,}} onClick={isLogin? onLogin : onSignUp} >{isLogin?"Start Chat":"Create Account"}</button>
      
        <span className="signupButton" onClick={()=>{setIsLogin(!isLogin)}}>{isLogin?"Create new Account" :"Already have an Account"}</span>
      </div>
    </div>
  )

  function onNameChange(n, id) {
    if (id === "name") {
      // console.log(n.target.value);
      setEmail(n.target.value)
    }
    else if (id === "room") {
    
      setName(n.target.value);
    }
  }


  // function onSubmit() {


  //   // message.trim() != ""
    
  //   socket.emit("joinRoom", { roomId: roomId, userId: name });
    
  //   socket.on("currentUserID", (e) => {
  //     const user = localStorage.getItem("user");

  //     if (user === null) {
  //       const userId = e;
  //       const obj = { roomId: roomId, userName: name, userId: userId };

  //       localStorage.setItem("user", JSON.stringify(obj));
  //       setUserData(obj);
    
  //     }
  //     showModel(true);

  //   })


  // }

  function onLogin()
  {
     console.log("Login with the email ",email);
  }


  function onSignUp(){
    console.log("Sign Up with the email ",email);

    console.log("Sign upwith the name ",name);

  }


}


export default LoginModel