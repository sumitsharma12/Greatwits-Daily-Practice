


// 5 Falsy Values 0, '', null,undefined,NaN .




console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('hello'));
console.log(Boolean({}));
console.log(Boolean(''));



let money = 0;   //In this case if it is 0 then it is falsy value and if it is (1,2,3----then this is a Truthy value .)
if (money) {
    console.log("you can spend money here :)")
}
else {
    console.log("You cannot spend money here:)")
}



let height;      //In this Case if height is not defined then else statement will come and if , in height value is given instead of 0 then height is defined.
if (height) {
    console.log("height is defined ")
}
else {
    console.log("height is undefined")
}

