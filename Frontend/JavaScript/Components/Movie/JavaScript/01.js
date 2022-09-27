const result = document.querySelector(".result")

let chosenStars = 0

function hoverStar(a) {
    lightAllStarsUpTo(a)
}

function leftStar() {
    lightAllStarsUpTo(chosenStars)
}

function clickStar(b) {
    result.innerText = `You rated ${b} stars!`
    chosenStars = b
}

function resetStars() {
    result.innerHTML = "&nbsp;"
    chosenStars = 0
    lightAllStarsUpTo(chosenStars)
}

function lightAllStarsUpTo(c) {

    const allStars = document.querySelectorAll(".movie .rating img")

    for (let i = 1; i <= c; i++) {
        allStars[i - 1].src = "stars/star.png"
    }

    for (let i = c + 1; i <= 5; i++) {
        allStars[i - 1].src = "stars/star-gray.png"
    }
}