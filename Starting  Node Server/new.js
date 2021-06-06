





const http = require('http')

const server = http.createServer(function (request, response) {
  console.dir(request.param)

  if (request.method == 'POST') {
    console.log('POST')
    var body = ''
    request.on('data', function (data) {
      body += data
      console.log('Partial body: ' + body)
    })
    request.on('end', function () {
      console.log('Body: ' + body)
      response.writeHead(200, { 'Content-Type': 'text/html' })
      // response.end('post received')
      // response.end(body)
      response.end( body)
      
    }
      
      )
    
    }
  

  
  else {
    console.log('GET')
    var html = `


    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            #container {
                border: 2px solid black;
                background-color: rgb(233, 219, 219);
                width: 500px;
                height: 400px;
                margin: auto;
                padding-left: 2px;
                border-radius: 20%
            }
    
            .fill {
    
                margin-left: 122px;
    
            }
    
            .hello {
                background-color: rgb(217 217 217 / 55%);
    
            }
    
            .btn {
                padding: 8px;
            }
        </style>
    </head>
    
    <body class="hello">
        <!-- This is my Form -->
    
          <form id="container" method="post" action="http://localhost:3000">
    
            <div class="fill">
                <h2>Student Information</h2>
                <!-- <label for="SNo.">S.No.:</label> -->
                <input type="number" name="SNo." id="SNo" placeholder="Enter Your Sr No."><br>
                <br>
                <!-- <label for="Name">Name:</label> -->
                <input type="text" name="Name" id="Name" placeholder="Enter Your Name"><br>
                <br>
                <!-- <label for="City">City:</label> -->
                <input type="text" name="City" id="City" placeholder="Enter Your City"><br>
                <br>
                <!-- <label for="PhoneNumber">PhoneNumber:</label> -->
                <input type="text" name="PhoneNumber" id="PhoneNumber" placeholder="Enter Your PhoneNumber"><br>
                <br>
                <!-- <label for="email">email</label> -->
                <input type="email" name="Mobilenumber" id="email" placeholder="Enter Your email"><br>
                <br>
               
                <button class="btn">SUBMIT</button>
    
    
            </div>
        </form>
    
    </body>
    
    </html> `

    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.end(html)
  }
})

const port = 3000
const host = '127.0.0.1'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)

































