const countyData = [

    { countyCode: "01", countyName: "Stockholm län", municipalities: [{ code: "14", name: "Upplands Väsby" }, { code: "15", name: "Vallentuna" }, { code: "17", name: "Österåker" }] },
    { countyCode: "03", countyName: "Uppsala län", municipalities: [{ code: "05", name: "Håbo" }, { code: "19", name: "Älvkarleby" }, { code: "30", name: "Knivsta" }] },
    { countyCode: "04", countyName: "Södermanlands län", municipalities: [{ code: "28", name: "Vingåker" }, { code: "61", name: "Gnesta" }, { code: "80", name: "Nyköping" }] },
    { countyCode: "05", countyName: "Östergötlands län", municipalities: [{ code: "09", name: "Ödeshög" }, { code: "12", name: "Ydre" }, { code: "13", name: "Kinda" }] }

]

// De element i arrayen som uppfyller villkoret (alltså de län vars namn börjar på S)
console.log( countyData.filter(x => x.countyName.startsWith("S")) )

// De element i vars countyCode är 04 (ger en array med ett element i)
countyData.filter(x => x.countyCode === "04")

// Själva elementet
countyData.filter(x => x.countyCode === "04")[0]

// Samma sak men med "find" (lyxfunktion). 
countyData.find(x => x.countyCode === "04")