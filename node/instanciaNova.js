// Uma factory retorna uma novas instância

module.exports = () => {
    return {
        valor:1,
        inc(){
            this.valor ++;
        }
    }
}