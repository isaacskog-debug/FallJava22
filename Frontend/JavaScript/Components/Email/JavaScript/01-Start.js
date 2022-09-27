
function sendForm() {

    //console.log("hallå?")

    // Get all "inputEmail"-elements 
    //const inputEmail = document.querySelectorAll(".inputEmail")

    // Get the first "inputEmail"-elements 
    //const inputEmail = document.querySelectorAll(".inputEmail")[0]

    // Is the same as 
    const inputEmail = document.querySelector(".inputEmail")

    // Print the element
    console.log(inputEmail)

    // Print the value
    console.log(inputEmail.value)

    const inputEmailAgain = document.querySelector(".inputEmailAgain")
    const resultArea = document.querySelector(".result")

    // Clean some CSS-classes
    resultArea.classList.remove("hidden")
    resultArea.classList.remove("sad")
    resultArea.classList.remove("happy")

    if (inputEmail.value === ""){
        resultArea.classList.add("sad")
        resultArea.innerText = "Empty email address"
        return
    }

    if (isValidEmailAddress(inputEmail.value)) {
        /* insert code here */

    } else {
        /* insert code here */

    }

}

function isValidEmailAddress(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) != null;
}
