function cargar()
{
    let msg = document.getElementById('msg');
    let img = document.getElementById('img');
    let body = document.body;
    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let seconds = data.getSeconds();
    msg.innerHTML = `Son las ${hora}:${minuto}:${seconds} horas.`
    if(hora > 0 && hora < 12)
    {
        msg.innerHTML = `Son las ${hora}:${minuto}:${seconds} de la mañana.`
        body.style.background = `linear-gradient(to left, #faf07e,#bd6e03)`;
        img.src = 'assets/images/amanecer.png'
    }else if(hora > 12 && hora < 18)
    {
        msg.innerHTML = `Son las ${hora}:${minuto}:${seconds} de la tarde.`
        body.style.background = `linear-gradient(to left, #7e2b16,#ff6f16)`;
        img.src = 'assets/images/atardecer.png'
    }else
    {
        msg.innerHTML = `Son las ${hora}:${minuto}:${seconds} de la noche.`
        body.style.background = `linear-gradient(to left, #3d244e,#e54664)`;
        img.src = 'assets/images/anochecer.png'
    }
}