const aprovados = ['Bia','Carlos','Antonio','Marcos'];

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`);
})

aprovados.forEach(nome => console.log(nome));

const exibitAprovados = aprovados => console.log(aprovados);
