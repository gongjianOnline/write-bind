var slice = Array.prototype.slice;
function bind(asThis){
    // this is function
    var args = slice.call(arguments,1)
    var fn = this;
    if(typeof fn !== "function"){
        throw new Error('bind 必须调用在函数身上')
    }
    return function(){
        var args2 = slice.call(arguments,0)
        return fn.apply(asThis,args.concat(args2));
    }
}
module.exports =  bind;

if(! Function.prototype.bind){
    Function.prototype.bind = bind;
}