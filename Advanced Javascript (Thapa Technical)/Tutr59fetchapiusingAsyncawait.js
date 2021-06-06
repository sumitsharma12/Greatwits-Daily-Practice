



async function getcoviddata(indexss){

   try{

       let wait=  await fetch('https://api.covid19api.com/summary')
    //    console.log(wait)
       
       let jsondata=await wait.json();
    //    console.log(jsondata.Countries)

       
       let countryname=jsondata.Countries[indexss]
       console.log(`The name of the country is ${countryname.Country}`)
       
       


    }


catch(error){
    console.log("this is an error............")
    }


}

getcoviddata(101)
getcoviddata(10)






