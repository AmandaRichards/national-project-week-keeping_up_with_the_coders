import "./index.css";
import { Link } from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";

function Thumbnail({ title, imageUrl,week ,password}) {
  const { user, isAuthenticated } = useAuth0();
  
  return (
     isAuthenticated && (
    <div className="mainContainer">
      <div className="work">
      <div className="img-container">
        <img src={imageUrl} alt="alt" className="tile" />
      </div>
      <br></br>
      
  
      <div className="link-container">
        {user["https://example.com/roles"][0] === "admin" ? <Link to="/contentpage" className="linkText" state={{ title: {title},week:{week} }}><div>{title}</div></Link>: <Link to="/contentpageuser" className="linkText" state={{ title: {title},week:{week} }}>
            <div>{title}</div>
        </Link>}
      </div>
      </div>
    </div>
     )
  );
}
export default Thumbnail;