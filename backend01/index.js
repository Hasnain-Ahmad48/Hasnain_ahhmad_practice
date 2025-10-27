// const express = require("express");
// const app = express();
// app.get("/", (req, res) => {
//   res.send("Hello Hasnain");
// });

// app.listen(3000, () => {
//   console.log("the server is started at port 3000");
// });

// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   app.send("This is my first project");
// });

// app.listen(port,()=>{
//     console.log(`server is started is ${port}`)
// });


// Import express
const express = require('express');

// Create an express app
const app = express();

// Define a port
const PORT = 3000;

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, this is my first Express server!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
