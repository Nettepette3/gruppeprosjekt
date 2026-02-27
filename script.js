
function trekkort() {
    const kortplass = document.getElementById("randomkort")
    const random1 = Math.floor(Math.random() * 13) + 1
    const random2 = Math.floor(Math.random() * 3)
    let farger = ['clubs', 'diamonds', 'hearts', 'spaces']
    const farge = farger[random2]
    kortplass.src = "kortstokk/" + random1 + "_of_" + farge + ".png"
    console.log(bilde.src)

}
