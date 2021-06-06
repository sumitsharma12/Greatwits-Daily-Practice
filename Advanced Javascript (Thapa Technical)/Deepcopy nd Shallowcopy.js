




// Shallow Copy-----------------------------------------





// let obj = {
//     first:"priyanka",
//     sec:"suprabha",
//     third:"Ankit",
//     sahu:{
//             ghgh:"some",
//             num:"78"
//         }
// }



// let newObj = {...obj};
// newObj.first = "monika"
// newObj.sahu.ghgh = "hello";
// console.log( newObj);
// console.log(obj);





// Deep Copy-------------------------------------------------------- 




let jira = {
    first:"one",
    sec:"two",
    third:"three",
    sahu:{
            ghgh:"four",
            num:"78"
        }
}

let newObj= JSON.parse(JSON.stringify(jira));

newObj.sahu.ghgh = "five";
console.log(newObj);
console.log(jira);




