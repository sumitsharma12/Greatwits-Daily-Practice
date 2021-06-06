function include(file) { 

    var script = document.createElement('script'); 
    script.src = file; 
    script.type = 'text/javascript'; 
    script.defer = true; 
    
    document.getElementsByTagName('head').item(0).appendChild(script); 
    
    } 
    
    /* Include Many js files */
    include('inx.js');
    include('third.js')
    // include('https://media.geeksforgeeks.org/wp-content/uploads/20190704162640/second.js'); 
    


function tell()
{
    console.log("This is my master file")
}
tell()

