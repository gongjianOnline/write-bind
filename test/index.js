const bind = require("../src/index");
test1("确认 fn.bind 使用");
test2("确认 this bindSuccess");
test3("确认 this,p1,p2 bindSuccess");
test4("确认 fn.bind(asThis)(params1) success");
test5("确认 fn.bind(asThis,params1)(params2) success");




function test1(message){
    console.log(message)
    Function.prototype.bind2 = bind;
    console.assert(Function.prototype.bind2 !== undefined);
}

// 绑定this
function test2(message){
    console.log(message)
    Function.prototype.bind2 = bind;
    const fn1 = function(){
        return this
    }    
    const newFn1 = fn1.bind2({name:"frank"});
    console.assert(newFn1().name === "frank");
}

// 绑定this和两个参数
function test3(message){
    console.log(message)
    Function.prototype.bind2 = bind;
    const fn2 = function(p1,p2){
        return [this,p1,p2]
    }
    const newFn2 = fn2.bind2({name:'frank'},123,456);
    console.assert(newFn2()[0].name === 'frank',"this error")
    console.assert(newFn2()[1] === 123,"p1 error")
    console.assert(newFn2()[2] === 456,"p2 error")
}

// 先绑定一次this,在绑定一次参数  fn.bind(asThis)(params1)
function test4(message){
    console.log(message)
    Function.prototype.bind2 = bind;
    const fn2 = function(p1,p2){
        return [this,p1,p2]
    }
    const anotherFn2 = fn2.bind2({name:"frank"});
    console.assert(anotherFn2(223,245)[0].name === "frank",'frank',"this anotherFn2 error")
    console.assert(anotherFn2(223,245)[1] === 223,'frank',"p1 anotherFn2 error")
    console.assert(anotherFn2(223,245)[2] === 245,'frank',"p2 anotherFn2 error")
}

// 先绑定一次this和参数,在绑定一次参数  fn.bind(asThis,params1)(params2)
function test5(message){
    console.log(message)
    const fn2 = function(p1,p2){
        return [this,p1,p2]
    }
    const anotherFn3 = fn2.bind2({name:"frank"},123);
    console.assert(anotherFn3(245)[0].name === "frank",'frank',"this anotherFn3 error")
    console.assert(anotherFn3(245)[1] === 123,'frank',"p1 anotherFn3 error")
    console.assert(anotherFn3(245)[2] === 245,'frank',"p2 anotherFn3 error");
}
