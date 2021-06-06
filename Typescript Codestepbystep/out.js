var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var userlist;
(function (userlist) {
    var parent = /** @class */ (function () {
        function parent() {
            this.name = "";
        }
        parent.prototype.setname = function (name) {
            this.name = name;
        };
        return parent;
    }());
    userlist.parent = parent;
})(userlist || (userlist = {}));
// export {}
// let a="hello world"
// console.log(a)
// class student
// {
//     biodata(){
//         console.log("This is a Class")
//     }
// }
// var obj2=new student();
// obj2.biodata()
// Types in Typescript----------------------------------------
// let a:Number=22;
// console.log(a)
// let w:Number=22.45;
// console.log(w)
// let b:String="This is a String Type ."
// console.log(b)
// let c:String="22"
// console.log(c)
// let d:Boolean=true;
// console.log(d)
// Array------------------------------------------
// let arry=['sumit',"sushant",2]
// arry.push(22)
// console.log(arry);
// let arr:any=['sumit',"sushant"]
// arr.push(22)
// console.log(arr);
// Object------------------------------------------
// interface usertyped{
//     firstname:string,
//     gender:string,
//     age:number,
//     adress:any
// }
// let obj:usertyped={
//     firstname:"sunny",
//     gender:'male',
//     age:22,
//     adress:"B-20,Pocket-3,Sector-7"
// }
// console.log(obj)
// let users:any={
//     name:'snesh',
//     age:30,
// }
// users.name=100
// console.log(users)
// Union Type-----------------------------------------------------
// let doc:string|Number=22;
// console.log(doc)
// let data:string|Number|Boolean=22
// data=true
// console.log(data)
// Interface in T.S -----------------------------------------------------------
// interface beee{
//     myname:String,
//     rollnumber:Number,
//     size:any,
//     getname:()=>String
// }
// let detail:beee={
// myname:"rahul",
// rollnumber:22,
// size:'22cm',
// getname:function (){
//     return ('sidhu moosewala')
// }
// }
// console.log(detail.getname())
// Function in T.S----------------------------------------------
// (1)
//     function aooo(){
//     console.log("This is a")
//     function booo(){
//         console.log("This is b")
//     }
//     booo()
// }
// aooo()
//  -------------------
// (2)
// function give(a:Number):any{
//     // console.log("This will give strinf statement")
//     return a
// }
// console.log(give(45))
// --------------------
// (3)
// function given(c:number,d:number)
// {
//     return c+d
// }
// console.log(given(45,20))
// ---------------------
// (4)
// function cals(a:number,b?:number)
// {
//     return b?a+b:a
// }
// console.log(cals(100))
// ---------------------
// Class in T.S------------------------------------------
// (1)--------
// class student{
//     biodata(){
//         console.log("This is my class")
//     }
// }
// let say=new student()
// say.biodata()
// (2)----------
// class app{
//     name="shivji"
//     getname()
//     {
//         console.log(this.name)
//     }
// }
// let say=new app()
// say.getname()
// Inheritance in T.S-----------------------------------------------
// class parent{
//     name2="sumit sharma"
//     telname(){
//         return this.name2
//     }
// }
// let a2=new parent()
// console.log(a2.telname());
// ----------------------------------------
// class student{
//     constructor(a,b)
//     {
// console.log(a+b)
//     }
// }
// new student(2,78)
// ---------------------------------------
// class student{
//     name;
//     age;
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
//          biodata()  {
//             console.log(`Hello Guys! My name is ${this.name} and my age is ${this.age}.`)
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
// -------------------------------------
// class parent{
//     name="hello typescript";
//     setname()
//     {
//         this.name;
//     }
// }
// class child extends parent{
//     getname()
//     {
//         return this.name
//     }
// }
// let c2=new child()
// c2.setname()
// console.log(c2.getname())
// --------------------------
// class parent{
//   name;
//   setname(name)
//   {
//       this.name=name;
//   }
// }
// class child extends parent{
//   getname()
//   {
//       return this.name
//   }
// }
// let c2=new child()
// c2.setname("hello typescript")
// console.log(c2.getname())
// ----------------------------------------
// NameSpace in T.S-----------------------------------------------
// namespace userlist
// {
//  export class users{
//    getname(){
//      return "ankit gaur"
//             }
//                     } 
// }
// let a2=new userlist.users()
// console.log(a2.getname())
/// <reference path="./utils.ts"/>
var userlist;
(function (userlist) {
    var users = /** @class */ (function (_super) {
        __extends(users, _super);
        function users() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        users.prototype.getname = function () {
            return this.name;
        };
        return users;
    }(userlist.parent));
    userlist.users = users;
})(userlist || (userlist = {}));
var a2 = new userlist.users();
a2.setname("ankit Pauri walle");
console.log(a2.getname());
