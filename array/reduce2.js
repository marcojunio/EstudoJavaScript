const alunos = [
    {nome: 'João', nota: 7.3, bolsista: true},
    {nome: 'Pedro', nota: 6.5, bolsista: false},
    {nome: 'Maria', nota: 8., bolsista: true},
    {nome: 'Ana', nota: 9.5, bolsista: false}
]

const todosAlunosEhBolsista = (resultado,bolsista) => resultado && bolsista;
console.log(alunos.map(a => a.bolsista).reduce(todosAlunosEhBolsista));

const algunsBolsistas = (resultado,bolsista) => resultado || bolsista;
console.log(alunos.map(a => a.bolsista).reduce(algunsBolsistas));