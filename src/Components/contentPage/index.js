import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import "./style.css"

function Content() {

  return (<>
          {/* /////////////////////////////////////////////////////// */}
    <div className="header-content-page">
        <div className="back-to-home">
            <a href="/">
                <FontAwesomeIcon icon={faHome} />
            </a>
        </div>
        <div className="header-title">
            <p>Week 1 React hello</p>
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
           {/* container */}
           <div className="main-subs-container">
               <div className="individual-container">
                   <div className="links-resources-container">
                       <p className="resource-para">https://en.wikipedia.org/wiki/Main_Page Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae odit illum sapiente eveniet eius aliquid qui cumque ducimus optio. </p>
                   </div>
                   <div className="icon-cross-container">
                    <a href="/">
                        <FontAwesomeIcon icon={faTimesCircle} />
                    </a>
                       
                   </div>
               </div>
           </div>
           {/* end of container */}
           
           {/* form */}
            <div className="formcontainer">
                <form className="formResources" action="/">
                    <input type="number" name="" id="" placeholder="Enter the week Number"required/>
                    <input type="text" placeholder="Enter Link to Resource"required/>
                    <input type="submit" className="submitBtn"/>
                </form>
            </div>
           {/* end of form */}
       </div>
       {/* End of resources */}

       {/* /////////////////////////////////////////////////////// */}
       
        {/* video container */}
        <div>
        <div className="videos-main-container">
            <div className="video-individual-container">
            <div className="video-display">
                <video width="400" height="350" 
            controls poster="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png">
                <source src="https://media.geeksforgeeks.org/wp-content/uploads/20200409094356/Placement100-_-GeeksforGeeks2.mp4"
                    type="video/mp4"></source>
                </video>
            </div>
                <div className="icon-cross-container-video">
                    <a href="/">
                        <FontAwesomeIcon icon={faTimesCircle} />
                    </a>
                       
                   </div>
            </div>
                   {/* try out 2 */}
            <div className="video-individual-container">
            <div className="video-display">
                <video width="400" height="350" 
            controls poster="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png">
                <source src="https://media.geeksforgeeks.org/wp-content/uploads/20200409094356/Placement100-_-GeeksforGeeks2.mp4"
                    type="video/mp4"></source>
                </video>
            </div>
                <div className="icon-cross-container-video">
                    <a href="/">
                        <FontAwesomeIcon icon={faTimesCircle} />
                    </a>
                       
                   </div>
            </div>

         
           </div>
                     {/* form */}
            <div className="formcontainer">
                <form className="formlink" action="/">
                    <input type="number" name="" id="" placeholder="Enter the week Number"required/>
                    <input type="text" placeholder="Enter Link to Resource"required/>
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
           {/* container */}
           <div className="main-subs-container">
               <div className="individual-container">
                   <div className="links-links-container">
                       <p className="links-para">https://en.wikipedia.org/wiki/Main_Page </p>
                   </div>
                   <div className="icon-cross-container">
                    <a href="/">
                        <FontAwesomeIcon icon={faTimesCircle} />
                    </a>
                       
                   </div>
               </div>
           </div>
           {/* end of container */}
           {/* form */}
            <div className="formcontainer">
                <form className="formlink" action="/">
                    <input type="number" name="" id="" placeholder="Enter the week Number"required/>
                    <input type="text" placeholder="Enter Link to Resource"required/>
                    <input type="submit" className="submitBtn"/>
                </form>
            </div>
           {/* end of form */}
       </div>
       {/* End of list container */}
      

    </div>
  </>);
}

export default Content;