function bind(asThis,...args){
    // this is function 
    const fn = this;
    return function(){
        return fn.call(asThis,...args)
    }
}
module.exports =  bind;

if(! Function.prototype.bind){
    Function.prototype.bind = bind;
}