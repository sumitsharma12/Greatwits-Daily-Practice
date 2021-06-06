let name="sumit";
function greet(name)
{
    console.log(name);
}
function greet()
{
    console.log('hello');
}
function greet(name)
{
    console.log('Bye');
}
function greet(name,age)
{
    console.log('Bye bye');
}

function hello(name,age)
{
    console.log('hello');

    function test() {
        console.log('test');
    }
    function test() {
        console.log('test2');
        test4();
 //       test4().test5;

    }
    function test4() {
        var name = "Jitendra";
        var name = "poppu";
        let surname = "Kukreja";
        console.log('test4');
        test5();
        console.log(name);
        function test5() {
            let surname = "Gaur";
            var name = "Ankit";
            test6();
            console.log('test5');
            console.log(name);
            function test6() {
                let surname = "Sharma";                
                var name = "Sumit";
                console.log('test6');
                console.log(name);
            }
    

        }
        
    }
    
    greet();
    test();
    
}
hello();







