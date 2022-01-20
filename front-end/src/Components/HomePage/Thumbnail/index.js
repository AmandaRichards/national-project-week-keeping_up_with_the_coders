function Thumbnail({title, url}){
 return (<div>
    <img src={url} alt="alt"/>
    <p>{title}</p>
</div> )
}

export default Thumbnail;
