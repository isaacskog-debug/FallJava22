/*

Usage of the keyword "this" 

+ No repetition in the JavaScript code
+ It's easy to add more components, just copy the HTML code

- Repetition of HTML-code
- If the button is moved in comparison with "article" the code will stop working
- If the class-name is changed (e.g "inputEmail" to "input-email") the code will stop working

*/

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
