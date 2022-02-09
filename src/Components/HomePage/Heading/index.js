import "./index.css";
// import{useState} from 'react';
import { useAuth0 } from "@auth0/auth0-react";

function Heading() {
  // const what = username;
  const { logout, user, isAuthenticated } = useAuth0();
  // console.log(user["https://example.com/roles"][0])
  // const [name,setName]=useState(username)
  return (
    isAuthenticated && (
      <div className="header-homepage-page">
        <div className="header-title-homepage">
          <p>Welcome, {user.name}</p>
        </div>
        
          <button className="header-logout-homepage" onClick={() => logout({ returnTo: window.location.origin })}>
            <p>Log Out</p>
          </button>
        
      </div>
    )
  );
}
export default Heading;
