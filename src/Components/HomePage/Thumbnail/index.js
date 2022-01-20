// import "./index.css";
import { Link } from "react-router-dom";

function Thumbnail({ title, imageUrl }) {
  return (
    <div>
      <img src={imageUrl} alt="alt" />
      <Link to="/week1">{title}</Link>
    </div>
  );
}

export default Thumbnail;
