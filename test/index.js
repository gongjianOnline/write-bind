const bind = require("../src/index");

Function.prototype.bind2 = bind;
console.assert(Function.prototype.bind2 !== undefined);

const fn1 = function(){
    return this
}
const newFn1 = fn1.bind2({name:"frank"});
console.log(newFn1)
console.assert(newFn1().name === "frank");