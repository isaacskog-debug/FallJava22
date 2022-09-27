
const result = document.querySelector(".result")

let chosenStars = 0

function hoverStar(number) {
    lightAllStarsUpTo(number)
}

function leftStar(){
    lightAllStarsUpTo(chosenStars)
}

function clickStar(number) {

    /* insert code here */

    console.log("clickStar", number)
    chosenStars = number
}

function resetStars() {
    /* insert code here */
}

function lightAllStarsUpTo(number) {
    const allStars = document.querySelectorAll(".movie .rating img")

    for(let i=1; i<= number; i++){
        // Lysa upp stjärnan med numret i
        allStars[i-1].src = "stars/star.png"
    }

        /* insert code here */

}