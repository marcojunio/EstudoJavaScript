const numros = [1,2,5,9,10,6,5,25,396,1,2,5,4,2];

function imprimeMenorQueCinco(numeros){
    let cont = 0;
    numeros.forEach(element => {
        
        if(element < 5){
            cont++;
        }
    });
    return cont;
}

console.log(imprimeMenorQueCinco(numros));