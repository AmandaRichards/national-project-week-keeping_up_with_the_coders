import "./index.css";
import { useAuth0 } from "@auth0/auth0-react";
import correct from "../Img/correct.png"

export let hello;
function Login({ setUserName, setPassword, username, password }) {
 
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <div className="biggercontainer">
        <div className="poweredby">
          <h1>Powered By</h1>
          <div className="logo">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/e6fddcbea146f91d2f3c160f7d56a9391a4740b0/4e758/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
              alt="Logo"
            />
          </div>
        </div>

        <div className="loginmaincontainer">
          <div className="logincontainer">
            <div className="leftside">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2933/2933190.png"
                alt="computer"
                className="computer"
              ></img>
              <h2>Resource.log()</h2>
            </div>
            <div className="rightside">
             

                <img src={correct} alt="Israelasked me too"></img>
                <button id="submitlogin" onClick={() => loginWithRedirect()}>
                  Log In
                </button>
            

            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}
export default Login;
