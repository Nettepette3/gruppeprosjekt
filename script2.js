const tilfTall = Math.floor(Math.random() * 13) + 1
const suits = ["spades", "hearts", "clubs", "diamonds"]
// Tilfeldig indeks for å finne rett suit:
const i = Math.floor(Math.random() * suits.length);
const suit = suits[i] // i er en tilfeldig indeks
// Lager et img-element
const bilde = document.querySelector(".bilde")

//bilde.src = "kortstokk/" + tilfTall + "_of_" + suit + ".png"


const fasitTall = tilfTall
const fasitSort = suit



function sjekkSvar() {

    const tallInput = document.getElementById("gjett")
    const sortInput = document.getElementById("gjettSort")
    const hintElement = document.getElementById("hint")

    const gjettTall = Number(tallInput.value)
    const gjettSort = sortInput.value

    let melding = ""

    // Sjekk tall
    if (gjettTall === fasitTall) {
        melding += "✅ Riktig tall! "
    }
    else if (gjettTall < fasitTall) {
        melding += "🔼 Tallet er høyere. "
    }
    else {
        melding += "🔽 Tallet er lavere. "
    }

    // Sjekk sort
    if (gjettSort === fasitSort) {
        melding += "✅ Riktig sort!"
    }
    else {
        melding += "❌ Feil sort."
    }

    hintElement.innerHTML = melding

    // Hvis ALT er riktig → vis kortet
    if (gjettTall === fasitTall && gjettSort === fasitSort) {
        bilde.src = "kortstokk/" + fasitTall + "_of_" + fasitSort + ".png"
        hintElement.innerHTML = "🎉 DU VANT! 🎉"
        tallInput.style.backgroundColor = "lightgreen"
    }
    else {
        tallInput.style.backgroundColor = "lightcoral"
    }
}


function handleKeyPress(event) {
    if (event.key === 'Enter') {
        knapp = event.target.nextElementSibling
        knapp.click()
    }
}