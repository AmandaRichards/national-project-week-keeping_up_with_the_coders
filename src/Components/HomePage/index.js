import React from 'react';
import dummydata from './DummyData/DummyData';

import Heading from './Heading';
import Thumbnail from './Thumbnail';

export default function HomePage() {
  return(
    <div>
    <Heading />
    {dummydata.map(function (props){
      return (
        <Thumbnail
        title={props.title}
        url={props.url}
        />
      ) 
    } 
    
    )}</div>

    )
  ;
}