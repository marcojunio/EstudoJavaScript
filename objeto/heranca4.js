function MeuObjeto() {}
console.log(MeuObjeto.prototype);

const obj1 = new Object;
const obj2 = new Object;
console.log(obj1.__proto__ === obj2.__proto__);