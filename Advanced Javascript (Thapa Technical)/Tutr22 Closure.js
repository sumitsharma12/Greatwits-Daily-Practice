// let sum=()=>{
// let a=10;
// let b=20;
// console.log(a+b)
// }
// sum()





// let first=(a)=>{
// let b=20;
// let second=()=>{
// let sum=a+b;
// console.log(sum)
// }
// second()
// }
// first(30)






// let firstdigit=(a)=>{
// let b=20;
// console.log(a+b)

// }
// firstdigit(20)







let question=(name)=>{
    return function(topic){
        if(name==="shivji"){
        console.log(`Hello ${name},Your todays topic is ${topic}`)
        }

        if(name==="sushant"){
            console.log(`Hello ${name},Your todays topic is ${topic}`)
            }

            if(name==="snesh"){
                console.log(`Hello ${name},Your todays topic is ${topic}`)
                }

                if(name==="varun"){
                    console.log(`Hello ${name},Your todays topic is ${topic}`)
                    }
    }



}

question("shivji")("english")
let candidate=question("shivji")
candidate("maths")




