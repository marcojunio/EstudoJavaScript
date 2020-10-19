// // 01)
// function Calculadora(a = 0 ,b = 0){
//     console.log(`SOMA:${a + b}`);
//     console.log(`SUBTRAÇÃO:${a - b}`);
//     console.log(`DIVISÃO:${a / b}`);
//     console.log(`MULTIPLICAÇÃO:${a * b}`);
// }

// Calculadora(9,10);

// // 02)
// function retornaTipoQuadrado(a = 0,b = 0,c = 0){
//     if(a == b && b == c && c == a){
//         return console.log('Equlátero');
//     }else if(a == b || b == a || c == a){
//         return console.log('Isóceles');
//     }
//     else{
//         return console.log('Escaleno');
//     }
// }

// retornaTipoQuadrado(6,6,6);
// retornaTipoQuadrado(6,5,6);
// retornaTipoQuadrado(6,4,5);

// //03)
// function potenciacao(base = 0, expoente = 0){
//     return Math.pow(base,expoente);
// }

// console.log(potenciacao(5,9));

// // 04)
// function imprimiDivisaoEResto(dividendo = 0, divisor = 0){
//     console.log(`DIVISÃO: ${dividendo / divisor}`);
//     console.log(`RESTO: ${dividendo % divisor}`);
// }

// imprimiDivisaoEResto(5,4);

// // 05)
// function retornaComDuasCasasDecimais(a = 0){
//     return `R$:${a.toFixed(2)}`;
// }
// console.log(retornaComDuasCasasDecimais(0.30000000000000004));

// 06)
// function regimeJurosSimples(capitalInicial = 0, taxaJuros = 0,tempoAplicao = 0){
//   const juros = capitalInicial * taxaJuros * tempoAplicao;
//   const montante = capitalInicial + juros;
    
//     return montante;  
// }

// console.log(regimeJurosSimples(1500,0.20,10));

// function regimeJurosComposto(capitalInicial = 0, taxaJuros = 0,tempoAplicao = 0){
//     const montante = capitalInicial * Math.pow(1 + taxaJuros,tempoAplicao);

//     return montante.toFixed(2);
// }

// console.log(regimeJurosComposto(1500,0.20,10));

// // 07)
// function calcularBhaskara(ax2 = 0, bx = 0, c = 0){
    
//     let delta = Math.pow(bx,2) - (4 * ax2 * c);

//     if(delta < 0){
//         return "Delta é negativo";
//     }else{
//         let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
//         let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2);
//         let resultado = [x1,x2];
        
//         return resultado;
//     }
// }

// console.log(calcularBhaskara(1,12,-13))

// //08)
// let stringPontuacoes =  "30, 40, 20, 4, 51, 25, 42, 38, 56, 0";

// function retornaQauebraDeRecordes(stringPontuacoes){
    
//     let pontuacoes = stringPontuacoes.split(", ")
//     let qtdQuebraDeRecords = 0
//     let piorJogo = 1
//     let maiorPontuacao = pontuacoes[0]
//     let menorPontuacao = pontuacoes[0]

//     for (let i = 1; i < pontuacoes.length; i++) {
//         if(pontuacoes[i] > maiorPontuacao) {
//             maiorPontuacao = pontuacoes[i]
//             qtdQuebraDeRecords++
//         }else if (pontuacoes[i] < menorPontuacao) {
//             menorPontuacao = pontuacoes[i]
//             piorJogo = i+1;
//         }
//     }
//     return [qtdQuebraDeRecords, piorJogo]
// }


// console.log(retornaQauebraDeRecordes(stringPontuacoes));

//09)
// function retornaNotas(nota = 0){

//     if(nota < 40){
//         return "REPROVADO";
//     }else if(){

//     }

// }