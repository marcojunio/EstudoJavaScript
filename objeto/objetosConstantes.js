//pessoa -> 123 -> {...}
const pessoa = {nome: 'Pedro'};
pessoa.nome = 'João';
console.log(pessoa);

//pessoa -> 456 -> {...}
// pessoa = {nome: 'Ana'};

Object.freeze(pessoa);
pessoa.nome = 'Maria';
pessoa.end = 'Rua abc';

console.log(pessoa.nome);
console.log(pessoa);