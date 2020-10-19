// Função em JS é First-Class Object (Citzens)
//Higher-order function

//criar de forma literal
function func1(){}

//Armazenar em uma variável
const func2 = function() { }

//Armazenar em um Array
const array = [function(a ,b) { return a + b},func1,func2];
console.log(array[0](5, 9));

//Armazenar em um atributo do objeto
const obj = {};
obj.falar = function (){return 'Opa'};
console.log(obj.falar());

//Passar função como param
function run(fun){
    fun();
}

run(function () {console.log('Executando...')});

//Uma função pode retornar/conter uma função
function soma(a,b){
    return function (c){
        console.log(a + b +c);
    }
}

soma(2,3)(4);
const cincoMias = soma(2,3);
cincoMias(4);
