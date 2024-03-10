function generar()
{
    let txtn = document.getElementById('txtn');
    let MatTable = document.getElementById('MatTable');
    let img = document.getElementById('img');
    if(txtn.value.length == 0)
    {
        alert('[ERROR] coloca un numero para generar una tabla.')
    }
    else
    {
        MatTable.style.display = 'block';
        img.style.display = 'block';
        let n = Number(txtn.value);
        let c = 1
        MatTable.innerHTML = '';
        while(c <= 10)
        {
            let option  = document.createElement('option');
            option.text = `${n} x ${c} = ${c*n}`;
            MatTable.appendChild(option);
            c++;
        }
    }
    if(txtn.value == 10)
    {
        img.src = 'numbersIMGS/img10.jpg'
    }else if(txtn.value == 9)
    {
        img.src = 'numbersIMGS/img9.jpg'
    }else if(txtn.value == 8)
    {
        img.src = 'numbersIMGS/img8.jpg'
    }else if(txtn.value == 7)
    {
        img.src = 'numbersIMGS/img7.jpg'
    }else if(txtn.value == 6)
    {
        img.src = 'numbersIMGS/img6.jpg'
    }else if(txtn.value == 5)
    {
        img.src = 'numbersIMGS/img5.jpg'
    }else if(txtn.value == 4)
    {
        img.src = 'numbersIMGS/img4.jpg'
    }else if(txtn.value == 3)
    {
        img.src = 'numbersIMGS/img3.jpg'
    }else if(txtn.value == 2)
    {
        img.src = 'numbersIMGS/img2.jpg'
    }else if(txtn.value == 1)
    {
        img.src = 'numbersIMGS/img1.jpg'
    }
    img.style.marginBottom = "15px"
}