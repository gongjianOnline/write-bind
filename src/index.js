function bind(asThis){
    // this is function 
    const fn = this;
    return function(){
        return fn.call(asThis)
    }
}
module.exports =  bind;

if(! Function.prototype.bind){
    Function.prototype.bind = bind;
}