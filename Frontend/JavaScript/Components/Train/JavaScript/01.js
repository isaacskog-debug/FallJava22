const result = document.querySelector(".train .result")
const from = document.querySelector(".train .from")
const to = document.querySelector(".train .to")
const okbutton = document.querySelector(".train button")
let wayChoice = null

update()

function update() {

    // Hide result text
    result.classList.add("hide")

    // User has entered the site
    if (wayChoice === null) {
        from.disabled = true
        to.disabled = true
        okbutton.disabled = true
    }

    // User has chosen "oneway"
    if (wayChoice === 'oneway') {
        from.disabled = false
        to.disabled = true

        okbutton.disabled = from.value===""

        // Samma som:
        // if (from.value === ""){
        //     okbutton.disabled = true
        // } else {
        //     okbutton.disabled = false
        // }
    }

    // User has chosen "roundtrip" 
    if (wayChoice === 'roundtrip') {

        from.disabled = false
        to.disabled = false
        okbutton.disabled = from.value==="" || to.value===""

        if (to.value !=="" &&  to.value < from.value) {
            to.value = from.value
        }    
    }
    
}

function wayChange(way) {
    wayChoice = way
    update()
}

function makeChoice() {
    // Show result text
    result.classList.remove("hide")

    if (wayChoice==='oneway') {

        result.innerHTML = `Du har valt att resa <b>enkelresa</b> med utresa <b>${from.value}</b>`
    }

    if (wayChoice==='roundtrip') {

        result.innerHTML = `Du har valt att resa <b>tur-o-retur</b> med utresa <b>${from.value}</b> och hemresa <b>${to.value}</b>`
    }
}
