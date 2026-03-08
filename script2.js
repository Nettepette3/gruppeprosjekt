//Trekk et tilfeldig kort:
const suits = ["spades", "hearts", "clubs", "diamonds"];

const fasitTall = Math.floor(Math.random() * 13) + 1;          // Tall mellom 1 og 13
const fasitSort = suits[Math.floor(Math.random() * suits.length)]; // Tilfeldig sort

const bilde = document.querySelector(".bilde"); // Henter kortbildet fra HTML

//Sjekk om gjettet er riktig:
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
        visnVinnEffekt()
        tallInput.style.backgroundColor = "lightgreen"
    }
    else {
        tallInput.style.backgroundColor = "lightcoral"
    }
}

function visnVinnEffekt() {
    // Lag konfetti-container
    const container = document.createElement("div");
    container.id = "konfetti-container";
    container.style.cssText = `
        position: fixed; top: 0; left: 0;
        width: 100%; height: 100%;
        pointer-events: none; z-index: 9999;
        overflow: hidden;
    `;
    document.body.appendChild(container);

    // Lag 120 konfetti-biter
    const farger = ["#ff6b6b", "#ffd93d", "#6bcb77", "#4d96ff", "#ff922b", "#cc5de8"];
    for (let i = 0; i < 120; i++) {
        const bit = document.createElement("div");
        const farge = farger[Math.floor(Math.random() * farger.length)];
        const størrelse = Math.random() * 12 + 6;
        const startX = Math.random() * 100;
        const varighet = Math.random() * 2 + 2;
        const forsinkelse = Math.random() * 1.5;

        bit.style.cssText = `
            position: absolute;
            top: -20px;
            left: ${startX}%;
            width: ${størrelse}px;
            height: ${størrelse * 0.5}px;
            background: ${farge};
            border-radius: ${Math.random() > 0.5 ? "50%" : "2px"};
            animation: fall ${varighet}s ${forsinkelse}s ease-in forwards;
            transform: rotate(${Math.random() * 360}deg);
        `;
        container.appendChild(bit);
    }

    // Fjern konfetti etter 5 sekunder
    setTimeout(() => container.remove(), 5000);

    // Vis vinn-overlay
    const overlay = document.createElement("div");
    overlay.id = "vinn-overlay";
    overlay.innerHTML = `
        <div class="vinn-boks">
            <div class="vinn-emoji">🏆</div>
            <h2>DU VANT!</h2>
            <p>Kortet var ${fasitTall} av ${fasitSort}</p>
            <button onclick="document.getElementById('vinn-overlay').remove()">Spill igjen?</button>
        </div>
    `;
    document.body.appendChild(overlay);
}

//Enter-tast:
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        sjekkSvar();
    }
});