//Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma(6,9);

//funcao com retorno
function soma(a,b = 1){
    return a + b;
}

console.log(soma(2,3));