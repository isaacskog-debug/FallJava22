// Display multiple error messages

const resultArea = document.querySelector(".result")

function sendForm() {
    
    const inputEmail = document.querySelector(".inputEmail")   
    const inputEmailAgain = document.querySelector(".inputEmailAgain")
    
    const errorMessages = []

    if (inputEmail.value === "") {
        errorMessages.push("Empty email address")
    }
    
    if (!isValidEmailAddress(inputEmail.value)) {
        errorMessages.push("Invalid email address")
    }
    
    if (inputEmail.value !== inputEmailAgain.value) {
        errorMessages.push("Not the same")
    }
    
    const errorExist = errorMessages.length > 0 

    if (errorExist) {
        displaySadMessage(errorMessages.join("<br/>"))
        return
    } 

    displayHappyMessage("The email addresses are the same :)")
    
}


function displaySadMessage(message) {
    resultArea.classList.remove("hidden", "happy")
    resultArea.classList.add("sad")
    resultArea.innerHTML = message
}

function displayHappyMessage(message) {
    resultArea.classList.remove("hidden", "sad")
    resultArea.classList.add("happy")
    resultArea.innerHTML = message        
}

function isValidEmailAddress(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) != null;
};
