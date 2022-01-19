import { Link } from "react-router-dom";

function Thumbnail({ title, imageUrl, link }) {
  return (
    <div>
      <img src={imageUrl} alt="alt" />
      <Link to={link}>{title}</Link>
    </div>
  );
}

export default Thumbnail;
