/*
    Keep track on what the user writes in the textbox (this is saved in "state")
   
    The GUI is automatically updated when the state is changed
*/

import { useState } from 'react'
import './Email.css'
function Email() {

    const [input, setInput] = useState("lisa@hotmail.com")

    /*
    When you want to change a state, don't write

        input = "a@b.se"
        
    ...instead write

        setInput("a@b.se")

    */

    const inputChange = (event) => {
        /*
           event.target =>       that's "input"
           event.target.value => that's the entered value in the box

           Let's change "input" to the value in the box       

           Think
           input = event.target.value

           but write
           setInput(event.target.value)

        */

           setInput(event.target.value)

        /*
        React will now automagically update the component!
        */           
    }

    return (

        <article className="email">

            <div className="group">
                <label>Email</label>
                <input className="inputEmail" type="email" value={input} onChange={inputChange}  />
            </div>

            <p><b>Here:</b> {input}</p>
            <div className="group">
                <label>Enter again</label>
                <input className="inputEmailAgain" type="email" />
            </div>


            <button onClick={() => { console.log('hej') }}>Ok1</button>

            <div className="result hidden">
                You entered ....
            </div>

        </article>

    )
}

export default Email


