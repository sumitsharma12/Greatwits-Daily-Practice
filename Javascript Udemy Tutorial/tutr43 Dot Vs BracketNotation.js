
let jons = {
    firstname: 'shivji',
    lastname: 'sharma',
    age: 24,
    jobrole: 'trainer',
    friendslist: ['snesh', 'sushant', 'debanjan']

}

console.log(jons.friendslist)

let namekey = 'name'
console.log(jons['first' + namekey]);


let give = prompt('Search Here ? ');
// console.log(jons[give]);


if (jons[give]) {
    console.log(jons[give])
}
else {
    console.log("This is not define ")
}


jons.location = 'India'
console.log(jons)
