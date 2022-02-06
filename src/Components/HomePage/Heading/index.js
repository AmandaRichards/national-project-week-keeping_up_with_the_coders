import "./index.css";
// import{useState} from 'react';
import { useAuth0 } from "@auth0/auth0-react";

function Heading({ username }) {
  const what = username;
  const { logout } = useAuth0();
  // const [name,setName]=useState(username)
  return (
    <>
      <div className="header-homepage-page">
        <div className="header-title-homepage">
          <p>Welcome, {what}</p>
        </div>
        <div className="header-logout-homepage">
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
          </button>
        </div>
      </div>
      {/* <h1 className="heading">Welcome, Bootcamper</h1>; */}
    </>
  );
}
export default Heading;
