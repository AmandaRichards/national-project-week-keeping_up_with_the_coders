//import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import "./style.css"
import { useEffect,useState } from 'react'
import { useLocation,Link } from 'react-router-dom'
import {useAuth0} from "@auth0/auth0-react";

const APIURL = process.env.REACT_APP_API_URL;

function Contentpage() {
    //Authzero  logout
    const { logout } = useAuth0();
//end authzero logout
    const location = useLocation();
    const {title} = location.state
    const {week}=location.state
    console.log(title)
    console.log(week)
    //data from homepage
    const header =title.title
    console.log(header)
    //to pass for fetching data
    const weekID=week.week
    console.log(weekID)
    //header 
    const banner=header;
    //getting info from resource form
    const [mapres,setMapRes] = useState([]);

   
    // ///////////////////////////End of Resource post////////
    // ////////////////////////////start of video data////////////////
   
    const [mapvideo,setMapVideo] = useState([]);

   
     // ////////////////////////////end of video data////////////////
      // ////////////////////////////start of link data////////////////
   
    const [maplink,setMapLink] = useState([]);

    
    useEffect(()=>{
         async function fetchData (){
        const id=weekID;
            const response = await fetch(`${APIURL}/resources/${id}`);
            const data = await response.json();
            // console.log(data.payload.responseResources)
            setMapRes(data.payload.responseResources)
        } fetchData()
       
    },[weekID] )

    useEffect(()=>{
        async function fetchVideoData(){
        const id=weekID;
            const response = await fetch(`${APIURL}/videos/${id}`);
            const data = await response.json();
            // console.log(data.payload.responseResources)
            setMapVideo(data.payload.responseVideo)
        } fetchVideoData()
    }, [weekID])


    useEffect(()=>{
        async function fetchLinkData(){
        const id=weekID;
            const response = await fetch(`${APIURL}/links/${id}`);
            const data = await response.json();
            // console.log(data.payload.responseResources)
            setMapLink(data.payload.responseLinks)
        }fetchLinkData()
    }, [weekID])
   
    
    console.log(mapres)
    console.log(mapvideo)
    console.log(maplink)


  return (<>
          {/* /////////////////////////////////////////////////////// */}
    <div className="header-content-page">
        <div className="back-to-home">
          
            <Link to="/homepage" className="linktext"><FontAwesomeIcon icon={faHome} /></Link>
        </div>
        <div className="header-title">
            <p>{banner}</p>
        </div>
        <button className="header-logout" onClick={() => logout({ returnTo: window.location.origin })}>
            <p>Log Out</p>
          </button>
    </div>
       {/* /////////////////////////////////////////////////////// */}
   <div className="container"> 
       {/* /////////////////////////////////////////////////////// */}
       {/* resources */}
       <div className="resources-container">
           
            {/* header subs */}
                <div className="header-subs">
                    <p className="header-subs-text">Resources Link</p>
                </div>
            {/* end of header subs */}
            <div className="resource-container-1">
            {/* container */}
            {mapres.map((input)=>{
                return<>    
                    <div key={input.id} className="main-subs-container">
                    <div className="individual-container">
                        <div className="links-resources-container">
                            <a className="resource-para" href={input.type_of_resource} target="_blank" rel="noopener noreferrer">{input.name_of_resource} </a>
                        </div>
                        
                    </div>
                    </div>
                </>
                })}
            {/* end of container */}
            </div>
            {/* form */}
            <div className="resource-container-2">
 
           {/* end of form */}
            </div>
       </div>
       {/* End of resources */}

       {/* /////////////////////////////////////////////////////// */}
       
        {/* video container */}
        <div className="container-video-1">
        <div className="videos-main-container">
    
                   {/* try out 2 */}
            <div className="video-individual-container">
                {/* map through start */}
                {mapvideo.map((input)=>{
                    return <>
                    <div key={input.id} className="container-video">
                        <div className="video-display">
                            <iframe width="220" height="145" src={input.type_of_resource} title={input.id}>
                            </iframe>
                        </div>
                     
                        </div>
                    </>
                })}

                {/* map through end*/}
            </div>
           </div>
             
        </div>
       {/* /////////////////////////////////////////////////////// */}
       {/* links container */}
       <div className="links-container">
           {/* header subs */}
           <div className="header-subs">
               <p className="header-subs-text">Project Link</p>
           </div>

           {/* end of header subs */}
           <div className="links-container-1">

            {/* /////////////////map start ///////////////// */}
                {maplink.map((input)=>{
                    return <> 
                    {/* container */}
                    <div key={input.id} className="main-subs-container">
                        <div className="individual-container">
                            <div className="links-links-container">
                                <a className="resource-para" href={input.type_of_resource} target="_blank" rel="noopener noreferrer">{input.name_of_resource} </a>
                             </div>
 
                        </div>
                    </div>
                    </>
                 })} 
            {/* /////////////////end map start ///////////////// */}
           </div>
           
           <div className="links-container-2">
        
           </div>
       </div>
       {/* End of list container */}
    </div>

    <div className="footer-content-page">
        
        <div className="footer-title">
            <p>Powered By</p>
        </div>
        <div className="logo">
            <img src="https://d33wubrfki0l68.cloudfront.net/e6fddcbea146f91d2f3c160f7d56a9391a4740b0/4e758/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png" alt="Logo" />
        </div>
    </div>
  </>);
}


export default Contentpage;