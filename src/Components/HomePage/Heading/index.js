import "./index.css";
// import{useState} from 'react';
import { useAuth0 } from "@auth0/auth0-react";

function Heading() {
  // const what = username;
  const { logout, user, isAuthenticated } = useAuth0();

  // const [name,setName]=useState(username)
  return (
    isAuthenticated && (
      <div className="header-homepage-page">
        <div className="header-title-homepage">
          <p>Welcome, {user.name}</p>
        </div>
        <div className="header-logout-homepage">
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
          </button>
        </div>
      </div>
    )
  );
}
export default Heading;
