let botonMascotaJugador = document.getElementById('boton-mascota')
let botonAtaqueTierra = document.getElementById('boton-tierra')
let botonAtaqueFuego = document.getElementById('boton-fuego')
let botonAtaqueAgua = document.getElementById('boton-agua')
let botonReiniciar = document.getElementById('boton-reiniciar')
let spanVidasMascotaJugador = document.getElementById("vida-mascota-jugador")
let spanVidasMascotaEnemigo = document.getElementById("vida-mascota-enemigo")
let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
let sectionMensajes = document.getElementById('mensajes')
let sectionReiniciar = document.getElementById('reiniciar')
let mascotaJugador = document.getElementById('nombre-mascota-jugador')
let mascotaEnemigo = document.getElementById('nombre-mascota-enemigo')

let resultado = document.getElementById('resultado')
let divAtaqueJugador = document.getElementById('ataque-jugador')
let divAtaqueEnemigo = document.getElementById('ataque-enemigo')
const contendorTarjetas = document.getElementById('contendorTarjetas')

let ataqueJugador
let ataqueEnemigo
let opcioneMokepons
let vidasJugador = 3
let vidasEnemigo = 3
let mokepones = []

class Mokepon{
    constructor(nombre,foto,vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge','assets/hipodoge.png',5);
let capipepo = new Mokepon('Capipepo','assets/capipepo.png',5);
let ratigueya = new Mokepon('Ratigueya','assets/ratigueya.png',5);

hipodoge.ataques.push(
    {nombre:'💧', id:'boton-agua'},
    {nombre:'💧', id:'boton-agua'},
    {nombre:'💧', id:'boton-agua'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'🌱', id:'boton-tierra'},
)

capipepo.ataques.push(
    {nombre:'🌱', id:'boton-tierra'},
    {nombre:'🌱', id:'boton-tierra'},
    {nombre:'🌱', id:'boton-tierra'},
    {nombre:'💧', id:'boton-agua'},
    {nombre:'🔥', id:'boton-fuego'},
)

ratigueya.ataques.push(
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'💧', id:'boton-agua'},
    {nombre:'🌱', id:'boton-tierra'},
)

mokepones.push(hipodoge,capipepo,ratigueya)


function iniciarJuego(){

   mokepones.forEach(mokepon => {
    opcioneMokepons = `<input type="radio" name="mascota" id=${mokepon.nombre}>
            <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
                <img src=${mokepon.foto} alt=${mokepon.nombre}>
                <p>${mokepon.nombre}</p>
            </label>`
    contendorTarjetas.innerHTML += opcioneMokepons
   })


    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
    botonAtaqueTierra.addEventListener('click',ataqueTierra)
    botonAtaqueFuego.addEventListener('click',ataqueFuego)
    botonAtaqueAgua.addEventListener('click',ataqueAgua)
    botonReiniciar.addEventListener('click',reiniciarJuego)

    document.getElementById("vida-mascota-jugador").innerHTML = vidasJugador
    document.getElementById("vida-mascota-enemigo").innerHTML = vidasEnemigo

    sectionSeleccionarAtaque.style.display = 'none'
    sectionMensajes.style.display = 'none'
    sectionReiniciar.style.display = 'none'
}

function seleccionarMascotaJugador(){
    const mascotaSeleccionada = document.querySelector('input[name="mascota"]:checked')

    if(mascotaSeleccionada == null){
        alert("Selecciona una mascota")
        return;
    }else{
        mascotaJugador.innerHTML = inicialMayuscula(mascotaSeleccionada.id)
    }

    seleccionarMascotaEnemigo()

    sectionSeleccionarAtaque.style.display = 'flex'
    sectionMensajes.style.display = 'flex'
    sectionSeleccionarMascota.style.display = 'none'
}

function seleccionarMascotaEnemigo(){
    const mascotaAleatoria = aleatorio(1,3)

    if(mascotaAleatoria == 1){
        mascotaEnemigo.innerHTML = 'Hipodoge'
    } else if(mascotaAleatoria == 2){
        mascotaEnemigo.innerHTML = 'Capipepo'
    }else{
        mascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function inicialMayuscula(cadena){
    return cadena.charAt(0).toUpperCase() + cadena.slice(1)
}

function aleatorio(min,max){
    return Math.floor(Math.random()* (max - min + 1) + min)
}

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    const ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO'
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA'
    }else{
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

function crearMensaje(resultadoCombate){
    const nuevoAtaqueJugador = document.createElement('p')
    const nuevoAtaqueEnemigo = document.createElement('p')

    resultado.innerHTML = resultadoCombate
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo
    
    divAtaqueJugador.appendChild(nuevoAtaqueJugador)
    divAtaqueEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    resultado.innerHTML = resultadoFinal

    botonAtaqueAgua.disabled = true
    botonAtaqueFuego.disabled = true
    botonAtaqueTierra.disabled = true
    
    sectionReiniciar.style.display = 'block'
}

function combate(){
    if(ataqueJugador == ataqueEnemigo){
        crearMensaje("EMPATE 😠")
    }else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA' || ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO' || ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje("GANASTE 🎉")
        vidasEnemigo--
        spanVidasMascotaEnemigo.innerHTML = vidasEnemigo
    }else{
        crearMensaje("PERDISTE 😲")
        vidasJugador--
        spanVidasMascotaJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal("GANAMOS🎉🎉🎉🎉")
    }else if(vidasJugador == 0){
        crearMensajeFinal("PERDIMOS❌❌❌")
    }
}

function reiniciarJuego(){
    vidasJugador = 3
    vidasEnemigo = 3

    location.reload()
}

window.addEventListener('load', iniciarJuego)