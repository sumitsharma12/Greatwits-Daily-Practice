

let higher=Math.max(22,1,2,56,43)
console.log(`The lower number is ${higher}`)


let lower=Math.min(22,1,2,56,43)
console.log(`The lower number is ${lower}`)


let inapply=Math.max.apply(null,[1,2,3,4,5])
console.log(`The smaller number in apply is ${inapply}`)


let napply=Math.min.apply(null,[1,2,3,4,5])
console.log(`The smaller number in apply is ${napply}`)




let ncall=Math.min.call(null,1,2,0,3,35)
console.log(`The smaller number in apply is ${ncall}`)


