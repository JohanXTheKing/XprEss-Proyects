function contar()
{
    let inicio = document.getElementById(`txtI`);
    let fin = document.getElementById('txtF');
    let paso = document.getElementById('txtP');
    let resultado = document.getElementById('resultado')
    if(inicio.value.length == 0 || fin.value.length == 0 || paso.value.length == 0)
    {
        alert('[ERROR] verifica tus datos e intentalo de nuevo.')
    }else
    {
        resultado.innerHTML = `Contando..`
        let i = Number(inicio.value);
        let f = Number(fin.value);
        let p = Number(paso.value);
        if(p <= 0)
        {
            window.alert('Paso inválido , convirtiendo paso a 1')
            p = 1;
        }
        if(i < f)
        {
            for(let c = i; c <= f; c += p)
            {
                resultado.innerHTML += ` ${c} ,\u{F449}`;
                resultado.style.background = 'red'
                resultado.style.color = 'white'
            }
        }else
        {
            for(let c = i; c >= f ; c -= p)
            {
                resultado.innerHTML += ` ${c} ,\u{F47F}`;
                resultado.style.background = 'blue'
                resultado.style.color = 'white'
            }
        }
    }
}

