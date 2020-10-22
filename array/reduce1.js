const alunos = [
    {nome: 'João', nota: 7.3, bolsista: true},
    {nome: 'Pedro', nota: 6.5, bolsista: false},
    {nome: 'Maria', nota: 8., bolsista: true},
    {nome: 'Ana', nota: 9.5, bolsista: false}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumular,atual){
    console.log(acumular,atual)
    return acumular + atual;
});

console.log(resultado);