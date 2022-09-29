/*

Generate the HTML-code from JavaScript

+ No repetition in HTML
- The HTML is quite hard to read, since it's just a string in the JavaScript 
- How can we add stuff between two email components?
- SEO: google might not see the code

*/

function initEmailComponents() {
    const emailHtml = `
    
    <article class="email">

        <div class="group">
            <label>Email</label>
            <input class="inputEmail" type="email">
        </div>

        <div class="group">
            <label>Enter again</label>
            <input class="inputEmailAgain" type="email">
        </div>

        <button onclick="sendForm(this)">Ok</button>

        <section class="result hidden">
            You entered ....
        </section>

    </article>

    `

    document.body.innerHTML= (emailHtml+ "<h3>Hej hej</h3>" + emailHtml+emailHtml+emailHtml)
}

function sendForm(buttonReference) {

    const article = buttonReference.parentElement;

    const inputEmail = article.querySelector(".inputEmail")
    const inputEmailAgain = article.querySelector(".inputEmailAgain")
    const resultArea = article.querySelector("section")

    resultArea.classList.remove("hidden")
    resultArea.classList.remove("sad")
    resultArea.classList.remove("happy")

    if (inputEmail.value === "") {
        resultArea.classList.add("sad")
        resultArea.innerText = "Empty email address"
        return 
    }

    if (isValidEmailAddress(inputEmail.value)) {

        if (inputEmail.value === inputEmailAgain.value) {
            resultArea.classList.add("happy")
            resultArea.innerText = "The email addresses are the same :)"
        } else {
            resultArea.classList.add("sad")
            resultArea.innerText = "Not the same"
        }

    } else {
        resultArea.classList.add("sad")
        resultArea.innerText = "Invalid email address"
    }

}


function isValidEmailAddress(email){
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
