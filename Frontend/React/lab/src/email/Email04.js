/*
    Keep track of the value of both textfields

    Write a text if the values are the same
*/

import { useState } from 'react'
import './Email.css'
function Email() {

    const [input, setInput] = useState("")
    const [inputAgain, setInputAgain] = useState("")

    const inputChange = (event) => {
        setInput(event.target.value)
    }

    const inputAgainChange = (event) => {
        setInputAgain(event.target.value)
    }

    // const doStuff = () => {
    //     return "Hello?"
    // }

    const compareText = () =>{
        if (input === inputAgain){
            return "Same";
        } else {
            return "Not the same";
        }
    }
    
    return (

        <article className="email">

            <div className="group">
                <label>Email</label>
                <input className="inputEmail" type="email" value={input} onChange={inputChange} />
            </div>

            <p><b>Here:</b> {input}</p>
            <div className="group">
                <label>Enter again</label>
                <input className="inputEmailAgain" type="email" value={inputAgain} onChange={inputAgainChange} />
            </div>
            <p><b>Here:</b> {inputAgain}</p>

            <button onClick={() => { console.log('hej') }}>Ok1</button>

            {/* <p>{doStuff()}</p> */}

            <p>{compareText()}</p>

            <p>{input === inputAgain ? "Same" : "Not the same" }</p>

            <div className="result hidden">
                You entered ....
            </div>

        </article>

    )
}

export default Email


