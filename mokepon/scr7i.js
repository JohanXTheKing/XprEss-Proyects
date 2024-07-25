function startGame()
{   
    let selccionar__ataque = document.getElementById('selccionar__ataque')
    selccionar__ataque.style.display = 'none'
    let mensajes = document.getElementById('mensajes')
    mensajes.style.display = 'none'
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'
    let sectionVidas = document.getElementById('juego')
    sectionVidas.style.display = 'none'
    var nombre_mascota = document.getElementById('nombre_mascota')
    let nombre_mascotaEnemigo = document.getElementById('nombreMascota_enemigo')
    let bottomMascotas   = document.getElementById('bottom__SelecMasc')
    let seleccionar_mascota = document.getElementById('seleccionar_mascota')
    bottomMascotas.addEventListener('click', seleccionarMascotaJugador)
    function seleccionarMascotaJugador()
    {
        const $ = selector => document.getElementById(selector)
        let hipodoge  = $ ('hipodoge')
        let Dylansio  = $ ('dylansio')
        let Monedita  = $ ('monedita')
        let Michelony = $ ('michelony')
        let Gabivi    = $ ('gabivi')
        if(hipodoge.checked)
        {   
            nombre_mascota.innerHTML = '<b>Hipodoge</b>'
            sectionVidas.style.display = 'flex'
            selccionar__ataque.style.display = 'block'
            bottomMascotas.disabled = true
            seleccionar_mascota.style.display = 'none'
        }else if (Dylansio.checked)
        {
            nombre_mascota.innerHTML = '<b>Dylansio</b>'
            sectionVidas.style.display = 'flex'
            selccionar__ataque.style.display = 'block'
            bottomMascotas.disabled = true
            seleccionar_mascota.style.display = 'none'
        }else if (Monedita.checked)
        {
            nombre_mascota.innerHTML = '<b>Monedita</b>'
            sectionVidas.style.display = 'flex'
            selccionar__ataque.style.display = 'block'
            bottomMascotas.disabled = true
            seleccionar_mascota.style.display = 'none'
        }else if (Michelony.checked)
        {
            nombre_mascota.innerHTML = '<b>Michelony</b>'
            sectionVidas.style.display = 'flex'
            selccionar__ataque.style.display = 'block'
            bottomMascotas.disabled = true
            seleccionar_mascota.style.display = 'none'
        }else if (Gabivi.checked)
        {   
            nombre_mascota.innerHTML = '<b>Gabivi</b>'
            sectionVidas.style.display = 'flex'
            selccionar__ataque.style.display = 'block'
            bottomMascotas.disabled = true
            seleccionar_mascota.style.display = 'none'
        }else
        {
            alert('[ERROR] Selecciona una mascota.')
        }
        mascotaEnemigoAleatorio(1,5)
    }
    function mascotaEnemigoAleatorio(min,max)
    {
        let mascotaEnemigo = Math.floor(Math.random() * (max - min + 1)) + min;
        if(mascotaEnemigo == 1)
        {
            nombre_mascotaEnemigo.innerHTML = '<b>Hipodoge</b>'
        }else if(mascotaEnemigo == 2)
        {
            nombre_mascotaEnemigo.innerHTML = '<b>Dylansio</b>'
        }else if(mascotaEnemigo == 3)
        {
            nombre_mascotaEnemigo.innerHTML = '<b>Monedita</b>'
        }else if(mascotaEnemigo == 4)
        {
            nombre_mascotaEnemigo.innerHTML = '<b>Michelony</b>'
        }else if(mascotaEnemigo == 5)
        {
            nombre_mascotaEnemigo.innerHTML = '<b>Gabivi</b>'
        }else{
            alert('[ERROR] No se generó un enemigo.')
        }
        combateMascotas()
    }
    let vidasJugador = 3
    let vidasEnemigo = 3
    let atackMy = ""
    let atackEnemy = ""
    let atackCombat = document.getElementById('atack')
    function combateMascotas()
    {
        const $ = combate => document.getElementById(combate)
        const atackFire   = $ ('bottom__SelecAtac__Fire')
        atackFire.addEventListener('click', ataqueFuego) 

        const atackWater  = $ ('bottom__SelecAtac__Water')
        atackWater.addEventListener('click', ataqueAgua)
           
        const atackEarth  = $ ('bottom__SelecAtac__Earth')
        atackEarth.addEventListener('click', ataqueTierra)
        
    }
    function ataqueFuego()
    {
        atackMy = 'FUEGO';
        atackCombat.innerHTML = `<b>${nombre_mascota.textContent}</b> ataco con <b style = "color: #f2d776;">${atackMy}!</b>`;
        ataqueEnemigo()
    }
    function ataqueAgua()
    {
        atackMy = 'AGUA';
        atackCombat.innerHTML = `<b>${nombre_mascota.textContent}</b> ataco con <b style = "color: #93b5c9;">${atackMy}!</b>`;
        ataqueEnemigo()
    }
    function ataqueTierra()
    {
        atackMy = 'TIERRA';
        atackCombat.innerHTML = `<b>${nombre_mascota.textContent}</b> ataco con <b style = "color: #9db13e;">${atackMy}!</b>`;
        ataqueEnemigo()
    }
    function ataqueEnemigo(max = 3,min = 1)
    {
        let ataqueEnemigo = document.getElementById('ataqueEnemigo')
        let ataqueEnemigorandom = Number(Math.floor(Math.random() * (max - min + 1)) + min);
        if(ataqueEnemigorandom == 1)
        {
            atackEnemy = 'FUEGO';
        }else if(ataqueEnemigorandom == 2)
        {
            atackEnemy = 'AGUA';
        }
        else if(ataqueEnemigorandom == 3)
        {
            atackEnemy = 'TIERRA';
        }
        mensajeGanador()
        return ataqueEnemigo.innerHTML = `<b>${nombre_mascotaEnemigo.textContent}</b> ataco con ${atackEnemy}!`;
    }
    function mensajeGanador()
    {
        
        let VidasJugador = document.getElementById('vidasMymascot')
        let VidasEnemigo = document.getElementById('vidasAlmascot')
        let mensajeGanador = document.getElementById('mensajeGanador')
        let mensajeFlex = document.getElementById('mensajesFlex')
        mensajes.style.display = 'block'
        mensajeFlex.style.display = 'flex'
        if(atackMy == atackEnemy)
        {
            mensajeGanador.innerHTML = 'Empate!'
        }else if (atackMy == 'AGUA' && atackEnemy == 'FUEGO' || atackMy == 'TIERRA' && atackEnemy == 'AGUA' || atackMy == 'FUEGO' && atackEnemy == 'TIERRA')
        {
            mensajeGanador.innerHTML = 'Ganaste!'
            vidasEnemigo--
            VidasEnemigo.innerHTML = vidasEnemigo
        }else
        {
            mensajeGanador.innerHTML = 'Perdiste!'
            vidasJugador--
            VidasJugador.innerHTML = vidasJugador
        }
        let atackFire  = document.getElementById('bottom__SelecAtac__Fire')
        let atackWater = document.getElementById('bottom__SelecAtac__Water')
        let atackEarth = document.getElementById('bottom__SelecAtac__Earth')

        if(vidasJugador == 0)
        {
            mensajeGanador.innerHTML = 'Perdiste la batalla!'
            alert("Pinche looser")
            atackFire.disabled = true
            selccionar__ataque.style.display = 'none'
            atackWater.disabled = true
            atackEarth.disabled = true
            bottom__Reset()
        }else if (vidasEnemigo == 0)
        {
            mensajeGanador.innerHTML = 'Ganaste la fucking pelea!'
            alert("Eres un ganador")
            atackFire.disabled = true
            selccionar__ataque.style.display = 'none'
            atackWater.disabled = true
            atackEarth.disabled = true
            bottom__Reset()
        }
    }

    function bottom__Reset()
    {
        sectionReiniciar.style.display = 'block'
        let atack = document.getElementById('atack')
        let atackEnemy = document.getElementById('ataqueEnemigo')
        atack.style.display = 'none'
        atackEnemy.style.display = 'none'
        let bottom__Reiniciar = document.getElementById("bottom__Reiniciar")
        bottom__Reiniciar .addEventListener('click', resetGame)
    }
    

}
function resetGame()
{
    location.reload()
}
window.addEventListener('load' , startGame)






































/*function saludar()
{
    alert("Hola, bienvenido al juego de Mascotas!")
}
let saludoTiempo = setTimeout(saludar(), 5000)
clearTimeout(saludoTiempo) */