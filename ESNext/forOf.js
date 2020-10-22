for(let letra of "Cod3r"){
    console.log(letra);
}

const assuntosEcma = ['Map','Set','Promisse']

for(let i in assuntosEcma){
    console.log(i)
}

for(let assunto of assuntosEcma){
    console.log(assunto);
}

const assutnoMap = new Map([
    ['Map', {abordados: true}]
    ['Set', {abordados: true}]
    ['Promise', {abordados: false}] 
])
