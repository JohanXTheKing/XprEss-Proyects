let num = document.getElementById("numb");
let selec = document.getElementById("res");
let result = document.getElementById("result");
let finalres = document.getElementById("resultado")
let valores = [];

function numerosIN(n)
{
    if(Number(n) >= 1 && Number(n) <= 100)
    {
        return true;
    }else
    {
        return false;
    }
}

function inLIsta(n,l)
{
    if(l.indexOf(Number(n)) != -1)
    {
        return true;
    }else
    {
        return false;
    }
}

function adicc()
{
    if(numerosIN(num.value) && !inLIsta(num.value, valores))
    {
        selec.style.display = "block";
        valores.push(Number(num.value));
        let item = document.createElement("option");
        item.text = `Valor "${num.value}" adicionado!`;
        selec.appendChild(item);
        result.style.display = "block"
        finalres.innerHTML = '';
    }else
    {
        alert("Valor inválido o ya encontrado en la lista!");
    }
    num.value = '';
    num.focus()
}      

function finalizar()
{
    finalres.style.display = 'block';
    let total = valores.length;
    let nmayor = valores[0]
    let nmenor = valores[0]
    let suma = 0
    let media = 0
    for(let pos in valores)
    {
        suma += valores[pos];
        if(valores[pos] > nmayor)
        {
            nmayor =  valores[pos];
        }
        if(valores[pos] < nmenor)
        {
            nmenor =  valores[pos];
        }
    } 
    media = suma /  total;
    finalres.innerHTML = '';
    finalres.innerHTML += `<p> Total de numeros registrados: <b style="color: #5D0E41;">${total}</b></p>`;
    finalres.innerHTML += `<p> Mayor numero registrado: <b style="color: #5D0E41;">${nmayor}</b></p>`; 
    finalres.innerHTML += `<p> Menor numero registrado: <b style="color: #5D0E41;">${nmenor}</b></p>`;
    finalres.innerHTML += `<p> Sumando todos los valores: <b style="color: #5D0E41;">${suma}</b></p>`;
    finalres.innerHTML += `<p> Media de los valores: <b style="color: #5D0E41;">${media}</b></p>`;

}