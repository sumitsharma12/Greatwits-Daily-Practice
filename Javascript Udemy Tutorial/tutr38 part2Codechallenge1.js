

// let Dolphinscore=((44+23+71)/3)
// console.log(Dolphinscore)

// let Koalasscore=((65+54+49)/3)
// console.log(Koalasscore)



let dolphinScore=()=>{
console.log((85+54+41)/3)
}
dolphinScore()


let Koalasscore=(a,b,c)=>
{
    console.log((a+b+c)/3)
}
Koalasscore(23,34,27)

function checkwinner(dolphinScore,Koalasscore){
    if(dolphinScore>=2*Koalasscore){
        console.log("Dolphin wins")
    }
    else
    {
        console.log("koalas wins")
    }
}
checkwinner(60,28)

