import "./index.css";
import { Link } from "react-router-dom";

function Thumbnail({ title, imageUrl,week ,password, username}) {
  return (
    <div className="mainContainer">
      <div className="work">
      <div className="img-container">
        <img src={imageUrl} alt="alt" className="tile" />
      </div>
      <br></br>
      
      {/* <Link to="/contentpage" className="linkText">
        {title}
      </Link> */}
     
      <div className="link-container">
        {/* { if(password === "admin"){
        <Link to="/contentpage" className="linkText" state={{ title: {title},week:{week} }}>
          {title}
        </Link>
        }
        } */}
        {password === "admin" ? <Link to="/contentpage" className="linkText" state={{ title: {title},week:{week} }}><div>{title}</div></Link>: <Link to="/contentpageuser" className="linkText" state={{ title: {title},week:{week} }}>
            <div>{title}</div>
        </Link>}
      </div>
      </div>
    </div>
  );
}
export default Thumbnail;