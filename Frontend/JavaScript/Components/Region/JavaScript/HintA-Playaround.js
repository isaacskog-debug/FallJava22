
const countyData = [

    { countyCode: "01", countyName: "Stockholm län", municipalities: [{ code: "14", name: "Upplands Väsby" }, { code: "15", name: "Vallentuna" }, { code: "17", name: "Österåker" }] },
    { countyCode: "03", countyName: "Uppsala län", municipalities: [{ code: "05", name: "Håbo" }, { code: "19", name: "Älvkarleby" }, { code: "30", name: "Knivsta" }] },

    {
        countyCode: "04", countyName: "Södermanlands län",
        municipalities:
            [
                { code: "28", name: "Vingåker" },
                { code: "61", name: "Gnesta" },
                { code: "80", name: "Nyköping" }
            ]
    },

    { countyCode: "05", countyName: "Östergötlands län", municipalities: [{ code: "09", name: "Ödeshög" }, { code: "12", name: "Ydre" }, { code: "13", name: "Kinda" }] }

]

const myObject1 = {}
const myObject2 = { name: "Kalle", age: 80 }
const myObject3 = { description: "Nice phone!", price: 123 }

const myArray1 = [4, 5, 6, 7]
const myArray2 = ["a", "b", "c"]
const myArray3 = ["a", "b", 6, "c", true, () => { alert('hej!') }] // inte så vanligt att man vill blanda typ av element
const myArray4 = [{}, {}, {}, {}]
const myArray5 = [{ name: "Kalle", age: 80 }, { name: "Lisa", age: 40 }, { name: "Musse", age: 20 }]
const myArray6 = [myObject2] // funkar


const test1 = myArray5[0].name // "Kalle"
const test2 = myArray5[0].age // 80
const test3 = myArray5[2].name // Musse

const test4 = countyData[2].countyName // "Södermanlands län"
const test5 = countyData[3].countyCode   // "05"

const test6 = countyData[2].municipalities.length  // 3 (antal kommuner i Södermanlands län)

for (let c of countyData) {
    //console.log( c.countyName )
    console.log(c.countyCode)
}
