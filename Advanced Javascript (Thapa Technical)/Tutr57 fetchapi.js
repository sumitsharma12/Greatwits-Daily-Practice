



fetch('https://api.covid19api.com/summary').then((apidata)=>{
console.log(apidata)
return apidata.json()
})
.then((actualdata)=>{
console.log(actualdata)
// let hello=console.log(actualdata.Countries[76].Country)
let hello=actualdata.Countries[76]
document.getElementById('apio').innerHTML=`The name of the country is ${hello.Country},The new confirmed case is ${hello.NewConfirmed}
 and total confirmed caese are 
${hello.TotalConfirmed}`
}).catch((error)=>{
console.log("this is an error............")
})







