let aprovados = new Array('Bia','Carlos','Ana');
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]);

aprovados[3];
aprovados.push('Abia');

console.log(aprovados.length);

aprovados[9] = 'Rafael';
console.log(aprovados.length);
console.log(aprovados[8] === undefined);

aprovados = ['Bia','Carlos','Pedro'];
aprovados.splice(1,1);
console.log(aprovados);