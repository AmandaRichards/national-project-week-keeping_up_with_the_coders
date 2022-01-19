import "./index.css";
import React from "react";
import dummydata from "./DummyData/DummyData";
import Heading from "./Heading";
import Thumbnail from "./Thumbnail";

export default function HomePage() {
  return (
    <div>
      <Heading />
      <div className="thumbnail">
        {dummydata.map(function (props) {
          return (
            <Thumbnail
              title={props.title}
              imageUrl={props.imageUrl}
              link={props.link}
            />
          );
        })}
      </div>{" "}
    </div>
  );
}
