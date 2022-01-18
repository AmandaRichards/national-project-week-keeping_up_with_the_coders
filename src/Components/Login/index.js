import { useState } from "react";


function Input() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("")

 
  function handleNameChange(event){
      setName(event.target.value);
  }

 function handleChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    // Stop the page from refreshing as the form will try and submit and refresh by default
    event.preventDefault();
    //onSubmitClick(password);
    if(password === "Koder"){
        console.log("correct password");
    }else{
        console.log("wrong password")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
    <input onChange={handleNameChange} value={name} placeholder="enter your name"/>
      <input onChange={handleChange} value={password} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Input;