const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const homem = f => f.genero == 'M';
const pais = f => f.pais === 'Argentina';
const maiorSalario = (func,funcAtual) => {
    return func.salario > funcAtual.salario ? func : funcAtual;
} 

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    //Homem argentino com maior salário;
    const func = funcionarios
        .filter(homem)
        .filter(pais)
        .reduce(maiorSalario)

    console.log(func);
});

  