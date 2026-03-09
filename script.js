let valgtkort = null
let tidligerekort = []
let random1 = null
let random2 = null
let kortFarge = null

function trekkort() {
    if (valgtkort) {
        return
    }

    const kortplass = document.getElementById("randomkort")
    random1 = Math.floor(Math.random() * 13) + 1
    random2 = Math.floor(Math.random() * 4)

    let farger = ['clubs', 'diamonds', 'hearts', 'spades']
    kortFarge = farger[random2]

    kortplass.src = "kortstokk/" + random1 + "_of_" + kortFarge + ".png"
}

function trykk() {

    const valgt = document.getElementById("randomkort")
    valgtkort = valgt.src

}

function leggtil(x) {

    const rute = document.getElementsByClassName("r")[x]

    if (!valgtkort) {
        return
    }


    if (
        (kortFarge == "diamonds" && !rute.classList.contains("diamond")) ||
        (kortFarge == "hearts" && !rute.classList.contains("heart")) ||
        (kortFarge == "clubs" && !rute.classList.contains("club")) ||
        (kortFarge == "spades" && !rute.classList.contains("spade"))
    ) {
        return
    }

    let kortID = random1 + "_of_" + random2
    tidligerekort.push(kortID)

    const img = document.createElement("img")
    img.src = valgtkort

    rute.appendChild(img)

    valgtkort = null
    trekkort()
}