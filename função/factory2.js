function criarProduto(nome,preco){
    return{
        nome,
        preco,
        descont: (preco * 0.90).toFixed(2)
    }
}

console.log(criarProduto('Notebook',2199.49))
console.log(criarProduto('iPad',1199.49))