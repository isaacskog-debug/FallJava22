/*
    If the user click ok => update the GUI
*/

import { useState } from 'react'
import './Email.css'

function Email(props) {

    const [input, setInput] = useState("")
    const [inputAgain, setInputAgain] = useState("")

    const [message, setMessage] = useState("")
    const [messageState, setMessageState] = useState("hidden")  // hidden, error, success

    const successMessage = props["success-message"] ?? "The email addresses are the same :)"
    const background = props["background"] ?? "white"
    const borderThickness = props["border-thickness"] ?? 4

    const inputChange = (event) => {
        setInput(event.target.value)
    }

    const inputAgainChange = (event) => {
        setInputAgain(event.target.value)
    }
    
    const sendForm = () => {
        if (input === ""){
            setMessage("Empty email address")
            setMessageState("error")
            return
        }

        if (!isValidEmailAddress(input)) {
            setMessage("Invalid email address")
            setMessageState("error")            
            return
        }

        if (input !== inputAgain) {
            setMessage("Not the same")
            setMessageState("error")            
            return            
        }

        setMessageState("success") 
        setMessage(successMessage)
    }

    const displayMessage = () => {

        const classNames = messageState === "error" ? "result sad" : "result happy"

        return (
            <div className={classNames}>
                {message}
            </div>

        )
    }

    return (

        <article className="email" style={{backgroundColor:background, border:"solid " + borderThickness + "px"}}>

            <div className="group">
                <label>Email</label>
                <input className="inputEmail" type="email" value={input} onChange={inputChange} />
            </div>

            <div className="group">
                <label>Enter again</label>
                <input className="inputEmailAgain" type="email" value={inputAgain} onChange={inputAgainChange} />
            </div>

            <button onClick={sendForm}>Ok</button>

            {displayMessage()}

        </article>

    )
}

function isValidEmailAddress(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}


export default Email


