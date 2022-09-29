const result = document.querySelector(".region .result")
const county = document.querySelector(".region .county")
const municipality = document.querySelector(".region .municipality")

const countyData = [

    { countyCode: "01", countyName: "Stockholm län", municipalities: [{ code: "14", name: "Upplands Väsby" }, { code: "15", name: "Vallentuna" }, { code: "17", name: "Österåker" }] },
    { countyCode: "03", countyName: "Uppsala län", municipalities: [{ code: "05", name: "Håbo" }, { code: "19", name: "Älvkarleby" }, { code: "30", name: "Knivsta" }] },
    { countyCode: "04", countyName: "Södermanlands län", municipalities: [{ code: "28", name: "Vingåker" }, { code: "61", name: "Gnesta" }, { code: "80", name: "Nyköping" }] },
    { countyCode: "05", countyName: "Östergötlands län", municipalities: [{ code: "09", name: "Ödeshög" }, { code: "12", name: "Ydre" }, { code: "13", name: "Kinda" }] }

]

// todo: write a function "renderCounty" that generates the first drop down (Välj län) from "countyData"
// hint: you need to loop through "countyData" and create html
// hint: the function "renderMunicipality" can give some ideas

function renderMunicipality() {
    let html= 
        `<option value="">Välj kommun...</option>
         <option value="05">Håbo</option>
         <option value="19">Älvkarleby</option>
         <option value="30">Knivsta</option>
        `    
    municipality.innerHTML = html
    municipality.classList.remove("hide")
}

function countyChanged() {
    console.log("User has changed the county!")
    renderMunicipality()
}

function municipalityChanged() {
    console.log("municipality changed!")
}