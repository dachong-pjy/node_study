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
//2. 新建一个数组，使用map方法，返回一个新的数组，数组中含有原数组每个数的平方
let arr1=[1,2,3,90,38,34];
let square_1=(x,y,z)=>{
	return x*x;
}
arr1.map(square_1);
arr1.map(square_1);
let a2=arr1.map(square_1);
let b2=arr1.map(square_1);
console.log(arr1.map(square_1));
let square_2=(x,y,z)=>{
   if(x>10) return x;
	else {return 10;}
}
arr1.map(square_2);
console.log(arr1.map(square_2));

let square_3=(x,y,z)=>{
   if(y%2){return x;}
}
console.log(arr1.map(square_3));
//3. 新建一个数组，使用filter方法，返回一个新的数组，数组中包含原数组中的正数
let arr_3=[-1, 5, 5, -5, 2, 4, -8, 3, -8, 5, -2, 1, 1, 9, -8, -7, 9, 9, 7, 1]
let f=x=>{
	if(x>0){return x}
}
console.log(arr_3.filter(f));
let f_1=x=>{
	if(x<0){return x};
}
console.log(arr_3.filter(f_1));
