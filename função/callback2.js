const notas = [7.7,8.8,9.5,3.2, 6.9];

const notasBaixas = [];
for (let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i]);
    }
}

console.log(notasBaixas);

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7;
});

console.log(notasBaixas2);

const notasBaixas3 = notas.filter(nota => nota < 7);
console.log(notasBaixas3);