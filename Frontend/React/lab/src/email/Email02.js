
/*
    Write stuff in console when user clicks button
*/
import './Email.css'
function Email() {

    // function buttonclicked(event) {
    //     //console.log("testy!")
    //     //console.log("event", event) // vilken knapp, altkey, clientX, clientY        
    //     console.log("event.target", event.target) // vilken knapp, altkey, clientX, clientY        
    // }

    const buttonclicked = (event) => {

        console.log("event.target", event.target) // vilken knapp, altkey, clientX, clientY        

    }

    return (

        <article className="email">

            <div className="group">
                <label>Email</label>
                <input className="inputEmail" type="email" />
            </div>

            <div className="group">
                <label>Enter again</label>
                <input className="inputEmailAgain" type="email" />
            </div>

            {/* "onClick" is case sensitive */}

            {/* Inline function */}
            <button onClick={() => { console.log('hej') }}>Ok1</button>


            {/* Inline function and pickup the event */}
            <button onClick={(event) => { console.log(event) }}>Ok2</button>

            {/* Connect the click event with my own function. Note: it's not a function call like buttonclicked() */}
            <button onClick={buttonclicked}>Ok3</button>

            {/* Note: this is incorrect 
                
                <button onClick={buttonclicked()}>Ok3</button> 
                
                */}

            <div className="result hidden">
                You entered ....
            </div>

        </article>

    )
}

export default Email


