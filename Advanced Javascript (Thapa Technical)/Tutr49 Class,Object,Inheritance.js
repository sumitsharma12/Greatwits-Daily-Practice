
// Class--------


// class student{

//     biodata()
//     {

//         console.log("Hii I am a class method ")
//     }
//             }
// let obj1=new student();
// obj1.biodata()



// Adding a number using Constructor----------

// class student{
//     constructor(a,b)
//     {
// console.log(a+b)
//     }
// }
// new student(2,78)



// Console using Constructor------------

// class student{
//      constructor()
//     {
// console.log('Hello guys ')
//     }
// }
// new student()



// Passing a Parameter in Constructor----------



// class student{
//      constructor(name,age){
//          this.myname=name
//          this.myage=age
//             {
//              console.log(`Hello Guys! My name is ${this.myname} and my age is ${this.myage}.`)
//             }
//                           }
//     }

// new student("sushant",26);



// Passing Parameter in constructor using Object-----------
// Note--From one class , we can create Multiple objects.

// class student{
//     constructor(name,age){
//         this.myname=name
//         this.myage=age
//     }
//          biodata()  {
//             console.log(`Hello Guys! My name is ${this.myname} and my age is ${this.myage}.`)
//            }
//    }

// let obj1=new student("sushant",26);
// let obj2=new student("shivji",24)
// obj1.biodata()
// obj2.biodata()



// NOTE--We can Inherit parent class using extends
//this is also called Instance method... 

// class student{
//     constructor(name,age){
//         this.myname=name
//         this.myage=age
//     }
//          biodata()  {
//             console.log(`Hello Guys! My name is ${this.myname} and my age is ${this.myage}.`)
//         }

//     }
//        class player extends student
//        {

//        }

// let obj1=new student("sushant",26);
// let obj2=new student("shivji",24)
// let obj3=new player("snesh",25);
// obj1.biodata()
// obj2.biodata()
// obj3.biodata()



// Using Super in constructor------

class student{
    constructor(name,age){
        this.myname=name
        this.myage=age
    }
         biodata()  {
            console.log(`Hello Guys! My name is ${this.myname} and my age is ${this.myage}.`)
        }

    }
       class player extends student
       {
constructor(name,age,livee){
super(name,age)
this.livein=livee


}
biodata()  {
    console.log(`Hello Guys! My name is ${this.myname} and my age is ${this.myage} and I Live in ${this.livein}.`)
}

       }

let obj1=new student("sushant",26);
let obj2=new student("shivji",24)
let obj3=new player("snesh",25,"agra");
obj1.biodata()
obj2.biodata()
obj3.biodata()
