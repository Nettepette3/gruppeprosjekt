
let kortstokk = []
        const containerElm = document.getElementById("c2")
        const farger = ['clubs', 'diamonds', 'hearts', 'spades']
        for (const tall in farger) {
            for (let i = 1; i <= 13; i++) {
                const kortNavn = "kortstokk/" + i + "_of_" + tall + ".png"
                korstokk.push(kortNavn)

            }


        }
        for (let n = 0; n < 5; n++) {


            const kortBilde = document.createElement("img")
            kortBilde.src = kortNavn
            containerElm.appendChild(kortBilde)
        }