


// let myobject={
//     firstname:"sumit",
//     lastname:"sharma",
//     id:2432,
// }
// for (let key in myobject)
// {
//     console.log(myobject[key])
// }




// let courses=[0,1,2,3,4,5,6,]
// for (let i = 0; i < courses.length; i++) {
    
//     console.log(courses[i])
// }


let myarray=["angular","react","html","css","python","java"];
myarray.forEach(function(element,index)
{
    console.log(index + " -- "+ element)
}
)


// Q) Create an array foreach element in the array add the value 100 to each items & update the element value ?

let thearray=[10,20,30,40,50];
thearray.forEach(function(element,index,arr)
{
    console.log(arr[index]+100)
}
)








