
import './Email.css'
function Email() {

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

            <button>Ok</button>

            <div className="result hidden">
                You enter ed ....
            </div>

        </article>

    )
}

export default Email


