var global="added";

function a(){
    var fa="1st function"
    console.log(fa);
    debugger;
    b();
    console.log("let see i will be in console or not.")
}

function b(){
    debugger;
console.log("2nd function");
c();
}

function c(){
    debugger;
    console.log("3rd function")
}
debugger;
a()
// b()


// let nam2="ankit"
// console.log(nam2)


