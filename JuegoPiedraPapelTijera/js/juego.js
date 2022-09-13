function jugadaPC(min,max){
    return Math.floor(Math.random()* (max - min + 1) + min)
}

function eleccion(jugador){
    switch(jugador){
        case 1: 
            return "Piedra 🥌"
        case 2:
            return "Papel 📰"
        case 3:
            return "Tijera ✂️"
        default:
            return "ELEGISTE MAL 💀"
    }
}

function winner(jugador,pc){
    if(jugador == pc){
        alert("Empate")
    }else if(jugador == 1 && pc == 3 || jugador == 2 && pc == 1 || jugador == 3 && pc == 2){
        triumphs++;
        alert("Winner!!")
    } else{
        defeats++
        alert("Loser")
    }
}

let triumphs = 0
let defeats = 0

while(triumphs < 3 && defeats < 3 ){
    let jugardor = parseInt(prompt("1 rock, 2 paper, 3 scissors"))
    alert(`Jugador elegio ${eleccion(jugardor)}`)
    
    let pc = jugadaPC(1,3)
    alert(`PC elegio ${eleccion(pc)}`)

    winner(jugardor,pc);
    //console.log(triumphs, defeats,jugardor,pc);
}

alert(`Ganaste ${triumphs} veces. Perdiste ${defeats} veces.`)
