// Min funktion hedder (checkAlcohol). Jeg har skrevet det her så funktionen kaldes, når billedet klikkes.

function checkAlcohol() {
    // Tjekker om billedets alt-attribut indeholder "øl" eller "snaps". Vi bruger this til at finde ud af, om biledets attribruter indeholder "øl" eller "snaps". Hvis det indeholder, så kommer der "indeholder alkohol" frme. Hvis ikke, så er det alkoholfri. //
    if (this.alt.includes("øl") || this.alt.includes("snaps")) {
        console.log("Indeholder alkohol");
    } else {
        console.log("Alkoholfri");
    }
}


// Man skriver document.querySelectorAll("img") for at sørge for, at alle elementer der indeholder img bliver valgt.
var billeder = document.querySelectorAll("img");

//Tilføjer en klikhændelse til billederne.
billeder.forEach(function(billede) {
    billede.addEventListener("click", checkAlcohol);
});
