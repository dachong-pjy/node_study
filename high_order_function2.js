//1. 新建一个数组，使用forEach方法计算每个数的平方，打印每个计算结果
let arr=[81,88,55,13,50,19,53,54,47,85,68,55,81,61,3,58,66,40,10,32]
console.log(arr);

let square = x => {
	console.log(x*x);
	return x*x;
}
//console.log(`${arr[0]},${square(arr[0])}`);
//console.log(square(arr[0]));
//console.log(arr[0],square(arr[0]));
// number , bool, null, undefined, string, NaN
// function, object, map, set
//console.log(square(arr.forEach));
/*
square(arr.forEach)

function square(x) {
return x * x；
}
function square(arr.forEach) {
return arr.forEach * arr.forEach ;
}

class Array {
  forEach =(fn) =>{
     for (let i = 0; i < this.length; i++) {
        fn(this[i], this);
     }
  }
}
*/
arr.forEach(square);