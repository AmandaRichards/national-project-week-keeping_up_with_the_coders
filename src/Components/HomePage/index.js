import "./index.css";
import React from "react";
import dummydata from "./DummyData/DummyData";
import Heading from "./Heading";
import Thumbnail from "./Thumbnail";
import Footer from "./Footer";

export default function HomePage({ username, password }) {
  console.log(username);
  return (
    <div>
      <Heading username={username} />
      <div className="thumbnail">
        {dummydata.map(function (props) {
          return (
            <Thumbnail
              username={username}
              password={password}
              title={props.title}
              imageUrl={props.imageUrl}
              week={props.week}
            />
          );
        })}
      </div>{" "}
      <Footer />
    </div>
  );
}
