updateStuff()

function updateStuff() {
    console.log("updateStuff körs!")

    const text1 = document.querySelector(".text1")
    const text2 = document.querySelector(".text2")
    const result = document.querySelector(".result")

    /*
    Alla formulär-element (t.ex "input") har
    "value". Det är värdet på input-elementet just nu

    Kan även använda "value" för att förändra värdet
    på ett element

    "console.log" - använd gärna kommatecken om du vill
    visa flera värden samtidigt

    "length" - för att ta reda på antalet tecken 
    av en sträng

    Formattera dokumentet med Shift-Alt-F
    */

    console.log("Värdet i rutan är", text1.value)

    text2.value = text1.value

    const nrOfChars = text1.value.length

    if (nrOfChars === 0) {
        result.innerHTML = "No characters :("
    } else if (nrOfChars === 1) {
        result.innerHTML = nrOfChars + " character"
    } else {
        result.innerHTML = nrOfChars + " characters"
    }

}

