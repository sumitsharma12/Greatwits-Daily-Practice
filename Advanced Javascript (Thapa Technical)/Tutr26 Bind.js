


// let team={
//     a:"ankit",
//     game:"VolleyBall",
//     players:6,
//     Captain:function (a){
//         console.log(`The team Captain will be ${a} `)
//     }
// }
// team.Captain("ankit")



let team={
    a:"ankit",
    game:"VolleyBall",
    players:6,
    Captain:function (a){
        console.log(`The team Captain will be ${this.game} `)
    }
}
// team.Captain()

let final=team.Captain.bind(team);
// console.log(final)
final()


