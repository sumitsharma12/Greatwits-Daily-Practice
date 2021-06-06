
// PART--1

let dolphin1 = 96;
let dolphin2 = 108;
let dolphin3 = 89;
let koalas1 = 88;
let koalas2 = 91;
let koalas3 = 110;


let dolphinsaverage = ((dolphin1 + dolphin2 + dolphin3) / 3)
console.log(dolphinsaverage)

let koalasaverage = ((koalas1 + koalas2 + koalas3) / 3)
console.log(koalasaverage);


if (dolphinsaverage > koalasaverage) {
    console.log("Dolphins you are the Winner")
}
else if (koalasaverage > dolphinsaverage) {
    console.log("koalas are the winner")
}




// PART--2




let dolphinsecond = ((97 + 112 + 101) / 3)
console.log(dolphinsecond)

let koalassecond = ((109 + 95 + 123) / 3)
console.log(koalassecond)

if (dolphinsecond > koalassecond) {
    console.log("Dolphins you are the Winner")
}
else if (koalassecond > dolphinsecond) {
    console.log("koalas are the winner")
}




// PART--3



let dolphinthird = ((97 + 112 + 101) / 3)
console.log(dolphinthird)

let koalasthird = ((109 + 95 + 106) / 3)
console.log(koalasthird)


if (dolphinthird > koalasthird && dolphinthird > 100) {
    console.log("Dolphins you are the Winner")
}
else if (koalasthird > dolphinthird) {
    console.log("koalas are the winner")
}
else if (dolphinthird === koalasthird && dolphinthird > 100 && koalasthird > 100) {
    console.log("The match is draw")
}
