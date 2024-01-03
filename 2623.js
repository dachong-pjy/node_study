function sum(a,b){
	return a+b;
}
function memoize(fn) {
    
    return function(...args) {
        return fn(...args);
    }
}
let msum=memoize(sum);
console.log(msum(25,27));