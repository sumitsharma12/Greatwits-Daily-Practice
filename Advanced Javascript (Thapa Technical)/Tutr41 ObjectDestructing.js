



// Object Destructing-----------------

let detail={
    name:'sumit',
    degree:"B-Tech",
    locatio:"noida",
    subject:{
        first:'Hindi',
        second:'english'
    }
}
// console.log(detail.subject.first)

let {name:names,locatio,degree}=detail;

console.log(names)



// Array Destructing-----------------


// let list=["sumit","ankit","aman"]
// // console.log(list[0])
// let [top1,top3,top2]=list
// console.log(top3)




