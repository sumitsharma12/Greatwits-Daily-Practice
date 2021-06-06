
// CallBackhell

let get=()=>{
    setTimeout(()=>{
        console.log("Getting all roll Numbers ")
        let rollno=[1,2,3,4,5,6,7,8,9]
        console.log(rollno)

setTimeout((rollno)=>{
let detail={
    name:"sumit sharma",
    age:26
}

    console.log(`My rollNo. is ${rollno}, My name is ${detail.name} and my age is ${detail.age}. Thats All......` )




    setTimeout(()=>{
        let gender='male';

        console.log(`My rollNo. is ${rollno}, My name is ${detail.name} and my age is ${detail.age} and my gender is ${gender} . Thats All......`)
    },2000)



},2000,rollno[1])


    },2000)}
    get()




    