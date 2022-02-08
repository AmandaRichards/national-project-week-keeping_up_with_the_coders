//import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import "./style.css"
import { useEffect,useState } from 'react'
import { useLocation ,Link} from 'react-router-dom'

const APIURL = process.env.REACT_APP_API_URL;

function Content() {
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
    const [weekres,setWeekRes]=useState(weekID);
    const [datares,setDataRes]=useState("");
    const [titleres, setTitleRes]=useState("");
    const [mapres,setMapRes] = useState([]);
    const [dummyRes,setDummyRes] =useState(0);
    const [dummyDeleteRes, setDummyDeleteRes] =useState(0);

    async function resSubmit(e){
        e.preventDefault()

        try{
             await fetch(`${APIURL}/resources`,{
                method: "POST",
                headers:{
                    "Content-type":"application/json",
                    "Accept":"application/json"
                },
                body:JSON.stringify({
                    week: weekres,
                    Type_of_resource: datares,
                    Name_of_resource: titleres,
                }),
            }).then((res)=>{
                res.json();
                console.log(res);
                // window.location.reload(false);
                if(res.status === 200){
                    console.log(res.status)
                    setDataRes("");
                    setWeekRes(weekID);
                    setTitleRes("");
                   
            }}) 
         
        } catch (err) {
            console.log(err);
        }
            // let resJson =await res.json();
            // console.log(resJson)  
           if(dummyRes<10){
               setDummyRes(dummyRes+1)
           }else{
               setDummyRes(0)
           }
           console.log(dummyRes)
    }

     async function deleteIndividualRes(id){

          await fetch(`${APIURL}/resources/${id}`,{
            method:'DELETE'
            })
            .then((response)=>{response.json();
            })
            // .then((data)=> window.location.href=data.redirect)
            if(dummyDeleteRes<10){
               setDummyDeleteRes(dummyDeleteRes+1)
            }else{
               setDummyDeleteRes(0)
            }
     return ;
    }  
    // ///////////////////////////End of Resource post////////
    // ////////////////////////////start of video data////////////////
    const [weekvideo,setWeekVideo]=useState(weekID);
    const [datavideo,setDataVideo]=useState("");
    const [titlevideo, setTitleVideo]=useState("");
    const [mapvideo,setMapVideo] = useState([]);
    const [dummyVid,setDummyVid] =useState(0);
    const [dummyDeleteVid, setDummyDeleteVid] =useState(0);

     async function vidSubmit(e){
        e.preventDefault()

        try{
            await fetch(`${APIURL}/videos`,{
                method: "POST",
                headers:{
                    "Content-type":"application/json",
                    "Accept":"application/json"
                },
                body:JSON.stringify({
                    week: weekvideo,
                    Type_of_resource: datavideo,
                    Name_of_resource: titlevideo,
                }),
            }).then((res)=>{
                res.json();
                console.log(res);
                
                if(res.status === 200){
                    console.log(res.status)
                    setDataRes("");
                    setWeekRes(weekID);
                   
                   
            }}) 
         
        } catch (err) {
            console.log(err);
        }
            // let resJson =await res.json();
            // console.log(resJson)  
            if(dummyVid<10){
               setDummyVid(dummyVid+1)
            }else{
               setDummyVid(0)
            }    
    }

     async function deleteIndividualVideo(id){

          await fetch(`${APIURL}/videos/${id}`,{
            method:'DELETE'
            })
            .then((response)=>{response.json();
               })
            // .then((data)=> window.location.href=data.redirect)
            if(dummyDeleteVid<10){
               setDummyDeleteVid(dummyDeleteVid+1)
            }else{
               setDummyDeleteVid(0)
            }
     return ;
    } 
     // ////////////////////////////end of video data////////////////
      // ////////////////////////////start of link data////////////////
    const [weeklink,setWeekLink]=useState(weekID);
    const [datalink,setDataLink]=useState("");
    const [titleLink, setTitleLink]=useState("");
    const [maplink,setMapLink] = useState([]);
    const [dummylink,setDummyLink] =useState(0);
    const [dummyDeleteLink, setDummyDeleteLink] =useState(0);
      

     async function linkSubmit(e){
        e.preventDefault()

        try{
            await fetch(`${APIURL}/links`,{
                method: "POST",
                headers:{
                    "Content-type":"application/json",
                    "Accept":"application/json"
                },
                body:JSON.stringify({
                    week: weeklink,
                    Type_of_resource: datalink,
                    Name_of_resource: titleLink,
                }),
            }).then((res)=>{
                res.json();
                console.log(res);
                // window.location.reload(false);
                if(res.status === 200){
                    console.log(res.status)
                    setDataRes("");
                    setWeekRes(weekID);
                   
            }}) 
         
        } catch (err) {
            console.log(err);
        }
            // let resJson =await res.json();
            // console.log(resJson)
            if(dummylink<10){
               setDummyLink(dummylink+1)
            }else{
               setDummyLink(0)
            }   
    }

    async function deleteIndividuallink(id){

         await fetch(`${APIURL}/links/${id}`,{
            method:'DELETE'
            })
            .then((response)=>{response.json();
                })
            // .then((data)=> window.location.href=data.redirect)
            if(dummyDeleteLink<10){
               setDummyDeleteLink(dummyDeleteLink + 1)
            }else{
               setDummyDeleteLink(0)
            }
     return ;
    } 
      // ////////////////////////////end of link data////////////////
    // ////////////////////////////start of get data////////////////
    // async function fetchData (){
    //     const id=weekID;
    //         const response = await fetch(`${APIURL}/resources/${id}`);
    //         const data = await response.json();
    //         // console.log(data.payload.responseResources)
    //         setMapRes(data.payload.responseResources)
    //     }
       

    // async function fetchVideoData(){
    //     const id=weekID;
    //         const response = await fetch(`${APIURL}/videos/${id}`);
    //         const data = await response.json();
    //         // console.log(data.payload.responseResources)
    //         setMapVideo(data.payload.responseVideo)
    //     }

    // async function fetchLinkData(){
    //     const id=weekID;
    //         const response = await fetch(`${APIURL}/links/${id}`);
    //         const data = await response.json();
    //         // console.log(data.payload.responseResources)
    //         setMapLink(data.payload.responseLinks)
    //     }
    // useEffect(()=>{
    //      async function resSubmit(e){
    //     e.preventDefault()

    //     try{
    //          await fetch(`${APIURL}/resources`,{
    //             method: "POST",
    //             headers:{
    //                 "Content-type":"application/json",
    //                 "Accept":"application/json"
    //             },
    //             body:JSON.stringify({
    //                 week: weekres,
    //                 Type_of_resource: datares,
    //             }),
    //         }).then((res)=>{
    //             res.json();
    //             console.log(res);
    //             // window.location.reload(false);
    //             if(res.status === 200){
    //                 console.log(res.status)
    //                 setDataRes("");
    //                 setWeekRes("");
                   
    //         }}) 
         
    //     } catch (err) {
    //         console.log(err);
    //     }
    //         // let resJson =await res.json();
    //         // console.log(resJson)
                 
    // } 
    // resSubmit()
    // },[])
    useEffect(()=>{
       
         async function fetchData (){
        const id=weekID;
            const response = await fetch(`${APIURL}/resources/${id}`);
            const data = await response.json();
            // console.log(data.payload.responseResources)
            setMapRes(data.payload.responseResources)
        }
      fetchData()
        
      
    },[weekID,dummyRes,dummyDeleteRes])

    useEffect(()=>{
         async function fetchVideoData(){
        const id=weekID;
            const response = await fetch(`${APIURL}/videos/${id}`);
            const data = await response.json();
            // console.log(data.payload.responseResources)
            setMapVideo(data.payload.responseVideo)
        }

     fetchVideoData();
    },[weekID,dummyVid,dummyDeleteVid]);

    useEffect(()=>{
           async function fetchLinkData(){
        const id=weekID;
            const response = await fetch(`${APIURL}/links/${id}`);
            const data = await response.json();
            // console.log(data.payload.responseResources)
            setMapLink(data.payload.responseLinks)
        }

    fetchLinkData();
      }, [weekID,dummylink,dummyDeleteLink]);
    
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
        <div className="header-logout">
           <a className="logout"href="/">
               Log out 
           </a>

        </div>
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
                            <a className="resource-para" href={input.type_of_resource}>{input.name_of_resource} </a>
                        </div>
                        <button className="icon-cross-container"  onClick={()=>{deleteIndividualRes(input.id)}}>
                                <FontAwesomeIcon icon={faTimesCircle} />
                        </button>
                    </div>
                    </div>
                </>
                })}
            {/* end of container */}
            </div>
            {/* form */}
            <div className="resource-container-2">
            <div className="formcontainer">
                <form className="formResources" onSubmit={resSubmit}>
                    <input type="number" value={weekres} placeholder="Enter the week Number" required onChange={(e)=> setWeekRes(e.target.value)}/>
                    <input type="text" value={titleres} placeholder="Enter the Resource name" required onChange={(e)=> setTitleRes(e.target.value)}/>
                    <input type="text" value={datares} placeholder="Enter Link to Resource" required onChange={(e)=> setDataRes(e.target.value)}/>
                    
                    <input type="submit" className="submitBtn"/>
                </form>
            </div>
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
                         <button className="icon-cross-container-video" onClick={()=>{deleteIndividualVideo(input.id)}}>
                                <FontAwesomeIcon icon={faTimesCircle} />
                        </button>
                        </div>
                    </>
                })}

                {/* map through end*/}
            </div>
           </div>
                     {/* form */}
            <div className="formcontainer">
                <form className="formlink" onSubmit={vidSubmit}>
                    <input type="number" name="" id="" placeholder="Enter the week Number" required onChange={(e)=> setWeekVideo(e.target.value) } value={weekvideo}/>
                    <input type="text" placeholder="Enter the resource title"required onChange={(e)=> setTitleVideo(e.target.value)} value={titlevideo}/>
                    <input type="text" placeholder="Enter Link to Resource"required onChange={(e)=> setDataVideo(e.target.value)} value={datavideo}/>
                    <input type="submit" className="submitBtn"/>
                </form>
            </div>
           {/* end of form */} 
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
                                <a className="links-para" href={input.type_of_resource}>{input.name_of_resource}</a>
                             </div>
                        <button className="icon-cross-container" onClick={()=>{deleteIndividuallink(input.id)}}>
                                <FontAwesomeIcon icon={faTimesCircle} />
                         </button>
                        </div>
                    </div>
                    </>
                 })} 
            {/* /////////////////end map start ///////////////// */}
           </div>
           
           <div className="links-container-2">
           {/* form */}
            <div className="formcontainer">
                <form className="formlink" onSubmit={linkSubmit}>
                    <input type="number" name="" id="" placeholder="Enter the week Number"required onChange={(e)=> setWeekLink(e.target.value)} value={weeklink}/>
                    <input type="text" placeholder="Enter the resource name"required onChange={(e)=> setTitleLink(e.target.value)} value={titleLink}/>
                    <input type="text" placeholder="Enter Link to Resource"required onChange={(e)=> setDataLink(e.target.value)} value={datalink}/>
                    <input type="submit" className="submitBtn"/>
                </form>
            </div>
           {/* end of form */}
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

export default Content;