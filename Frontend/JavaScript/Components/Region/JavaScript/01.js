const result = document.querySelector(".region .result")
const county = document.querySelector(".region .county")
const municipality = document.querySelector(".region .municipality")

const countyData = [

    { countyCode: "01", countyName: "Stockholm län", municipalities: [{ code: "14", name: "Upplands Väsby" }, { code: "15", name: "Vallentuna" }, { code: "17", name: "Österåker" }] },
    { countyCode: "03", countyName: "Uppsala län", municipalities: [{ code: "05", name: "Håbo" }, { code: "19", name: "Älvkarleby" }, { code: "30", name: "Knivsta" }] },
    { countyCode: "04", countyName: "Södermanlands län", municipalities: [{ code: "28", name: "Vingåker" }, { code: "61", name: "Gnesta" }, { code: "80", name: "Nyköping" }] },
    { countyCode: "05", countyName: "Östergötlands län", municipalities: [{ code: "09", name: "Ödeshög" }, { code: "12", name: "Ydre" }, { code: "13", name: "Kinda" }] },
]

renderCounty()

function renderCounty() {
    let html = `<option value="">Välj län...</option>`

    for(let c of countyData) {
        const name = c.countyName
        const code = c.countyCode

        html += `<option value="${code}">${code} ${name}</option>`
        
    }
    county.innerHTML = html
}

function renderMunicipality() {

    if (county.value == "") {
        municipality.classList.add("hide")
        return
    }
    let html= `<option value="">Välj kommun...</option>`

    const selectedCounty = countyData.find(c=>c.countyCode == county.value)

    for (let m of selectedCounty.municipalities) {
        const municipalityFullCode = selectedCounty.countyCode + m.code
        html += `<option value="${m.code}">${municipalityFullCode} ${m.name}</option>`

    }

    municipality.innerHTML = html

    municipality.classList.remove("hide")

}

function countyChanged() {
    renderMunicipality()
    result.classList.add("hide")
}

function municipalityChanged() {
    if (municipality.value == "") {
        result.classList.add("hide")
        return
    }

    municipality.classList.remove("hide")
    result.classList.remove("hide")

    const municipalityFullCode =  county.value + municipality.value
    result.innerHTML = `Du har valt kommun med kod ${municipalityFullCode}`
}