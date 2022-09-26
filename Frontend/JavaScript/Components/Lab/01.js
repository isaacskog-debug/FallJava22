const area = document.querySelector(".area")

function hideArea() {
    area.classList.add("hideMe")
}


function showArea() {
    //const area = document.querySelector(".area")
    area.classList.remove("hideMe")
}


function changeText() {

    //const area = document.querySelector(".area")

    /*
       Alternativ:

       const area = document.querySelector("#myspace")
       const area = document.getElementById("myspace")

       När du deklarerar variabler använd "let" eller "const". 
       Aldrig "var" (det är oldschool)

       "innerHTML" och "innerText" ändrar innehållet i ett element
    */

    area.innerHTML = "Ny <b>text</b>"
    //area.innerText = "Ny <b>text</b>"
    
}

function pow() {
    /*
    Skriv alert eller console för att kolla att funktionen är kopplad

    alert('pow!')
    console.log("pow!")

    "classList" manipulerar CSS-klasserna för ett element
    */

    //const area = document.querySelector(".area")
    area.classList.add("standout")

}