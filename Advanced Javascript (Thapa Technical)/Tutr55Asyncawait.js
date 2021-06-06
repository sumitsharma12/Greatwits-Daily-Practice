



let myobject=new Promise((resolve,reject)=>{

    setTimeout(
        ()=>{
            let rollno=[1,2,3,4,5,6,7];
            resolve(rollno)
    
            reject('error while communicating........')
        },2000)
    });
    

    let getbiodata=(indexdata)=>{
    return new Promise((resolve,reject)=>{
    setTimeout((indexdata)=>{
    let biodata={
        name:'sumit',
        age:26
    }
    resolve(` My name is ${biodata.name} and my age is ${biodata.age}   `)
    
    },2000,indexdata)
    })
    
    
    
    }
    
    
    
    async function getdata(){


let rollnodata=await myobject
console.log(rollnodata)


let nameage=await getbiodata(rollnodata[1])
console.log(nameage)



    }
    getdata()






