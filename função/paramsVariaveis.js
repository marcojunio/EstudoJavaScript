function soma(){
    let soma = 0;
    for(i in arguments){
        soma += arguments[i];
    }
    return soma;
}


console.log(soma(5,6,8,9,5,5));
console.log(soma(9,5,5));
console.log(soma(5));
console.log(soma('a','b','c','d'));