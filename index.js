let heroi = [
    {nome: "Yohdra", xp: 12000}
]

for (let repeticao = 0; repeticao < heroi.length; repeticao++){
    let nomeHeroi = heroi[repeticao].nome
    let xpHeroi = heroi[repeticao].xp
    let nivel = ""

    if (xpHeroi <= 1000) {
        nivel = "Ferro"
    } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
        nivel = "Bronze"
    } else if (xpHeroi >= 2001 && xpHeroi <= 3000) {
        nivel = "prata"
    } else if (xpHeroi >= 3001 && xpHeroi <= 4000) {
        nivel = "ouro"
    } else if (xpHeroi >= 4001 && xpHeroi <= 5000) {
        nivel = "platina"
    } else {
        nivel = "cyberpunk"
    }

    console.log("O heroi de nome " + nomeHeroi + " está no nivel " + nivel)

}