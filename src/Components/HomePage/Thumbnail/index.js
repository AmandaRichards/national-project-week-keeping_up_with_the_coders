function Thumbnail({title, url}){
 return (<div>
    <img src={url}/>
    <p>{title}</p>
</div> )
}

export default Thumbnail;