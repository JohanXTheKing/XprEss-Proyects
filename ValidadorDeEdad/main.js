function verificar()
{
    let date = new Date()
    let año = date.getFullYear()
    let edad = document.getElementById('edad')
    let nombre = document.getElementById('name').value
    let res = document.getElementById('res')
    if(edad.value.length == 0 || edad.value > año)
    {
        alert(`[ERROR] verifíca tus datos e intentalo de nuevo.`)
    }else
    {
        let genre = document.getElementsByName('genre')
        let fedad = año - Number(edad.value);
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        let genero = '';
        if(genre[0].checked)
        {
            genero = 'Hombre'
            if(fedad >= 0 && fedad <= 10)
            {
                res.innerHTML = 'niño'
                img.setAttribute('src', 'assets/imgs/kidniño.png')
            }else if(fedad > 10 && fedad <= 18)
            {
                res.innerHTML = 'joven'
                img.setAttribute('src', 'assets/imgs/chicoJoven.png')
            }else if(fedad > 18 && fedad <= 50)
            {
                res.innerHTML = 'adulto'
                img.setAttribute('src', 'assets/imgs/hombre30.png')
            }else 
            {
                res.innerHTML = 'anciano'
                img.setAttribute('src', 'assets/imgs/anciano.png')
            }
        }else if(genre[1].checked)
        {
            genero = 'Mujer'
            if(fedad >= 0 && fedad <= 10)
            {
                res.innerHTML = 'niña'
                img.setAttribute('src', 'assets/imgs/niñaJoven.png')
            }else if(fedad > 10 && fedad <= 18)
            {
                res.innerHTML = 'joven'
                img.setAttribute('src', 'assets/imgs/chicaJoven.png')
            }else if(fedad > 18 && fedad <= 50)
            {
                res.innerHTML = 'adulta'
                img.setAttribute('src', 'assets/imgs/mujer30.png')
            }else 
            {
                res.innerHTML = 'anciana'
                img.setAttribute('src', 'assets/imgs/anciana.png')
            }
        }else
        {
            alert('[ERROR] porfavor selecciona un género.')
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Usted ${nombre} tiene ${fedad} años.`
        res.appendChild(img);
        img.style.marginTop = '10px'
    }
}