import React, { useState } from "react";
import { info } from "./Info";

const App = () => {

    const [count, setCount] = useState(0)

    const adding = () => {
        setCount(count + 1)
    }

    return (
        <React.Fragment>
            <p>Hello {info.fname}</p>
            <br />
            <p>{count}</p>
            <button id="add" onClick={adding}>add</button>
        </React.Fragment>
    )
}

export default App