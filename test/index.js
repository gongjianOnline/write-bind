const bind = require("../src/index");

Function.prototype.bind2 = bind;
console.assert(Function.prototype.bind2 !== undefined);

const fn1 = function(){
    return this
}
// 绑定this
const newFn1 = fn1.bind2({name:"frank"});
console.log(newFn1)
console.assert(newFn1().name === "frank");

const fn2 = function(p1,p2){
    return [this,p1,p2]
}
// 绑定this和两个参数
const newFn2 = fn2.bind2({name:'frank'},123,456);
console.assert(newFn2()[0].name === 'frank',"this error")
console.assert(newFn2()[1] === 123,"p1 error")
console.assert(newFn2()[2] === 456,"p2 error")

// 先绑定一次this,在绑定一次参数  fn.bind(asThis)(params1)
const anotherFn2 = fn2.bind({name:"frank"});
console.assert(anotherFn2(223,245)[0].name === "frank",'frank',"this error")
console.assert(anotherFn2(223,245)[1] === 223,'frank',"p1 error")
console.assert(anotherFn2(223,245)[2] === 245,'frank',"p2 error")
