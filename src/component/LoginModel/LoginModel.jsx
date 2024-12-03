import "./LoginModel.css"

function LoginModel({showModel}) {
  return (
    <div className="loginModel">
          <div className="LoginCard">
              <span className="name" >Chat Messaging App</span>
                <input placeholder="Enter your name " className="inputClass"></input>
                <button className="button"  onClick={onSubmit} >Submit</button>
          </div>
    </div>
  )

 function onSubmit()
 {
   console.log("Hello");
   showModel(false);
 }

}





export default LoginModel