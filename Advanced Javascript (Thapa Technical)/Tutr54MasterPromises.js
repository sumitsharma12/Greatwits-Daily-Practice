



let myobject=new Promise((resolve,reject)=>{

setTimeout(
    ()=>{
        let rollno=[1,2,3,4,5,6,7];
        resolve(rollno)

        reject('error while communicating........')
    },2000)
});

let getbiodata=()=>{
return new Promise((resolve,reject)=>{
setTimeout(()=>{
let biodata={
    name:'sumit',
    age:26
}
resolve(` My name is ${biodata.name} and my age is ${biodata.age}   `)

},2000,)
})



}



myobject.then((rollnumber)=>{
    console.log(rollnumber)

   return getbiodata() 
}).then((kutchbhi)=>{
    console.log(kutchbhi)


})


// getbiodata().then((kutchbhi)=>{
//     console.log(kutchbhi)
// })





.catch((error)=>{
    console.log(error)
})






