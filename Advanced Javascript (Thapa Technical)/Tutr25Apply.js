let firstlist={
    area:"delhi",
    cases:24,
    order:function(rating,suport){
        console.log(`The total required items are ${this.item} and It will be available ${this.available}.This will be 
        rating ${rating}.${suport}`)
    }

}


let quantity={
    item:"mango",
    quality:"average",
    available:"tomorrow"
}

firstlist.order.apply(quantity,[2,"Always With You"])



