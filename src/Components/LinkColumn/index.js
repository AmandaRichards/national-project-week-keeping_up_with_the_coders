import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import "../contentPage/style.css"
import { useEffect,useState } from 'react'
import { useLocation ,Link} from 'react-router-dom'

import React from 'react';

export const LinkColumn = ({weekID, deleteIndividualRes}) => {
    const [mapres,setMapRes] = useState([]);
    const APIURL = process.env.REACT_APP_API_URL;
     
    useEffect(()=>{
         async function fetchData (){
       const id=weekID;
            const response = await fetch(`${APIURL}/resources/${id}`);
            const data = await response.json();
            // console.log(data.payload.responseResources)
            setMapRes(data.payload.responseResources)
        }
       fetchData();
   
      
    },[])
  return (<div className="resource-container-1">
       {mapres.map((input)=>{
                return<>    
                    <div key={input.id} className="main-subs-container">
                    <div className="individual-container">
                        <div className="links-resources-container">
                            <a className="resource-para" href={input.type_of_resource}>{input.type_of_resource} </a>
                        </div>
                        <button className="icon-cross-container"  onClick={()=>{deleteIndividualRes(input.id)}}>
                                <FontAwesomeIcon icon={faTimesCircle} />
                        </button>
                    </div>
                    </div>
                </>
                })}
  </div>)};

