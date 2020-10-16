let valor // não inicializada
console.log(undefined);

valor = null;
console.log(valor);
//console.log(valor.toString()); Erro

const produto = {preco: 25.99};
console.log(produto.preco);

produto.preco = undefined;
console.log(!!produto.preco);

// delete produto.preco
console.log(produto);

produto.preco = null;
console.log(produto.preco);
console.log(produto)