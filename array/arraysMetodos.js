const pilotos = ['Vettel','Alonso','Massa','Raikkonen'];
pilotos.pop() // remove o ultimo elemento!
console.log(pilotos);

pilotos.push('Versatappen');
console.log(pilotos);

pilotos.shift(); //remove o primeiro
console.log(pilotos);

pilotos.unshift('Hamilton');
console.log(pilotos);

//splice pode adicionar e remover

//adicionar

pilotos.splice(2,0,'Bottas','Massa');
console.log(pilotos);

//remove
pilotos.splice(3,1)
console.log(pilotos);

const algunsPilotos = pilotos.slice(2) // novo array a partir do indice 2

