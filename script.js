let valgtkort = null
let tidligerekort = []
let random1 = null
let random2 = null

function trekkort() {
    if (valgtkort) {
        return
    }

    const kortplass = document.getElementById("randomkort")
    const random1 = Math.floor(Math.random() * 13) + 1
    const random2 = Math.floor(Math.random() * 4)
    
    let farger = ['clubs', 'diamonds', 'hearts', 'spades']
    const farge = farger[random2]
    kortplass.src = "kortstokk/" + random1 + "_of_" + farge + ".png"





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

    let kortID = random1 + "_of_" + random2
    tidligerekort.push(kortID)

    const img = document.createElement("img")
    img.src = valgtkort

    rute.appendChild(img)

    valgtkort = null
    trekkort()

}
