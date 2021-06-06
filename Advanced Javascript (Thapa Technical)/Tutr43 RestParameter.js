// function sum(a,b){
//     console.log(a+b)
// }
// sum(1,2,3,4)




function sum(...input){
    console.log(...input)
    let total=0;
    for(let i of input){
        total +=i;
    }
    console.log(total)
}
sum(1,2,3,4,5,6,7,8)



