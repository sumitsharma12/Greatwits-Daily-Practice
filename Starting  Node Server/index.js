const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
  res.end(`
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

    <form id="container">

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
            <label for="radio">Gender :</label>
            Male<input type="radio" name="gender" id="">
            Female<input type="radio" name="gender" id="">
            Other<input type="radio" name="gender" id=""><br>
            <br>

            <button class="btn">SUBMIT</button>


        </div>
    </form>

</body>

</html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});