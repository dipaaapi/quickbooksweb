import React, { useState } from "react";
import { info } from "./Info";

const App = () => {

    const [count, setCount] = useState(0)
    const [user, setUser] = useState('')

    const adding = () => {
        setCount(count + 1)
    }

    const handleOnChange = (e) => {
        setUser(e.target.value)
        // console.log("e: ", e.target.value)
        console.log("user: ", user)
    }

    return (
        <React.Fragment>
            <p>Hello {info.fname}</p>
            <br />
            <p>{count}</p>
            <button id="add" onClick={adding}>add</button>
            <br />
            <input name="user" onChange={handleOnChange} value={user} />
        </React.Fragment>
    )
}

export default App