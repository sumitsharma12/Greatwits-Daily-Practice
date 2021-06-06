




let x, y;
x = y = 25 - 10 - 5;
console.log(x, y)




// You can check the mdn operator precednce from here:-
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence


let now = 2022;
let firstage = 2020 - 1994;
let secondge = now - 1994;
// let averageage = firstage+secondge /2;   //In this case secondge will be divided by 2 and then will be added with firstage according to predence table
let averageage = (firstage + secondge) / 2;    //In this case firstage will be added with secondge and then divided with 2 .
console.log(firstage, secondge, averageage);


