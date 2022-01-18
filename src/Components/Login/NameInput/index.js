import { useState } from "react"

function NameInput() {
    const [name, setName] = useState("")

    function handleChange(event) {
        setName(event.target.value);
      }

    
    return (
<input onChange={handleChange} value={name} />

    )
    }

export default NameInput;
