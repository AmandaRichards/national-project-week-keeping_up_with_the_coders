import "./index.css";
import { Link } from "react-router-dom";

function Thumbnail({ title, imageUrl }) {
  return (
    <div>
      <img src={imageUrl} alt="alt" className="tile" />
      <br></br>
      <Link to="/contentpage">{title}</Link>
    </div>
  );
}

export default Thumbnail;
