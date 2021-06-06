
let firstlist={
    area:"delhi",
    cases:24,
    order:function(rating){
        console.log(`The total required items are ${this.item} and It will be available ${this.available}.This will be 
        rating ${rating}.`)
    }

}







let quantity={
    item:"mango",
    quality:"average",
    available:"tomorrow"
}

firstlist.order.call(quantity,2)







