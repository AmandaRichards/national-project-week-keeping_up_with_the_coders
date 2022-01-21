import "./index.css";
// import{useState} from 'react';
function Heading({username}) {
  const what =username
  // const [name,setName]=useState(username)
  return <>
    <div className="header-homepage-page">
        <div className="header-title-homepage">
            <p>Welcome, {what}</p>
        </div>
        <div className="header-logout-homepage">
           <a className="logout"href="/">
               Log out 
           </a>

        </div>
    </div>
  {/* <h1 className="heading">Welcome, Bootcamper</h1>; */}
  </>
}
export default Heading;