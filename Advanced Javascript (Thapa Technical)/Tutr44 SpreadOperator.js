
function sum(a,b,c,){
    console.log(a+b+c)
}

var myarray=[2,2,3]
// sum(...myarray)
sum.apply(null,myarray)


// Replacing Number from array1 to array2---

let arr1=[1,2,3]
let arr2=[2,3,4]

arr1=[...arr2]
console.log(arr1)


// Joining  two array together--

let arry1=[1,2,3]
let arry2=[2,3,'hello']

arry1=[...arry2,...arry1]
console.log(arry1)

