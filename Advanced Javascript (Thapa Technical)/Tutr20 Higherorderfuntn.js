




let Interviewquestion=(name)=>{
    if(name==="sumit"){
        return function(topic){
            console.log(`Hii ${name}.Tell Me what is role of ${topic} ?`)
        }
    }

    if(name==="shivji"){
        return function(topic){
            console.log(`Hii ${name}.Tell Me what is role of ${topic} ?`)
        }
    }

    if(name==="sushant"){
        return function(topic){
            console.log(`Hii ${name}.Tell Me what is role of ${topic} ?`)
        }
    }

    else{
        return function(){
            console.log("There is no question to ask to you.")
        }
    }
}
Interviewquestion("sumit")("front end developer")
Interviewquestion("shivji")("Back end developer")
Interviewquestion("sushant")("Full stack developer")

// let candidate= Interviewquestion("sumit")
// candidate("UI");
// candidate("AI")











// let list={
//     name1:"Tell me what is front?",
//     name2:"Tell me what is Backend?",
//     name3:"Tell me what is fullstack?"
// }
// console.log(list)



// let listofname=function(name1,name2,name3)
//     {
        
//         console.log(`${name1}  tell me about youself ?`)
//         console.log(`${name2} tell me about youself ?`)
//         console.log(`${name3} tell me about youself ?`)
//     }

// listofname("sumit","snesh","shivji")




