// What is Express.js?
// Express.js, commonly referred to as Express, is a popular, lightweight, and flexible Node.js web application framework.
//It allows developers to build web applications and APIs quickly and efficiently. Express.js provides a thin layer of fundamental web application features, making it a great choice for building robust and scalable web applications.
// How does Express.js help with HTTP?

// Express.js helps with HTTP in several ways:

// Routing: Express.js provides a robust routing system that allows developers to map URLs to specific handlers. This makes it easy to organize and manage different routes in an application.
// Request and Response Objects: Express.js provides a request object (req) and a response object (res) that contain information about the HTTP request and response. This makes it easy to access and manipulate request and response data.
// Middleware: Express.js has a built-in middleware system that allows developers to add additional functionality to an application. Middleware functions can perform tasks such as authentication, logging, and error handling.
// HTTP Methods: Express.js supports all standard HTTP methods, including GET, POST, PUT, DELETE, and others. This makes it easy to handle different types of HTTP requests.
// Template Engines: Express.js supports template engines such as EJS, Jade, and Pug, which make it easy to render dynamic HTML templates.
// Example Code

// Here is an example of a simple Express.js application that handles GET and POST requests:

// javascript
// Edit
// Copy code
// // Import Express.js
// const express = require('express');

// // Create an Express.js application
// const app = express();

// // Define a route for the root URL
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // Define a route for a POST request
// app.post('/submit', (req, res) => {
//   res.send('Form submitted!');
// });

// // Start the server
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });
// This code creates an Express.js application that listens on port 3000 and responds to GET and POST requests.

// Would you like me to elaborate on any of these points or provide more examples?

// const express = require("express");
// function calculatesum(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// const app = express();
// app.get("/", function (req, res) {
//   const n = req.query.n;
//   const ans = calculatesum(n);
//   res.send(ans.toString());
// });

// app.listen(3000);

//request methods-
// GET: Retrieve data from the server
// POST: Send data to the server
// PUT: Update data on the server
// DELETE: Delete data from the server

//a simplified example of a patient going to hospital
// get=going for a consultation to get a checkup
// post=going to get a new kidney inserted
// put=going to get a kidney replaced
// delete=going to get a kidney removed;

//status codes
//200- everything went fine
//404- doctor is not in the hospital
//500- mid surgery light went away
//411- inputs were incorrect, wrong person came to surgery
//201- surgery was successful
//204- patient was discharged successfully
//403- you were not allowed in the hospital

const express = require("express");
const { fchown, fstat, fsync } = require("fs");
const app = express();

app.use(express.json());

const users = [
  {
    name: "john",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", function (req, res) {
  //write logic here

  const johnkidneys = users[0].kidneys;
  console.log(johnkidneys);

  const numberofkidneys = johnkidneys.length;
  let numberofhealthykidneys = 0;
  for (let i = 0; i < johnkidneys.length; i++) {
    if (johnkidneys[i].healthy) {
      numberofhealthykidneys++;
    }
  }

  res.json({
    numberofkidneys,
    numberofhealthykidneys,
  });
});

app.post("/", function (req, res) {
  const ishealthy = req.body.ishealthy;
  users[0].kidneys.push({
    healthy: ishealthy,
  });

  res.json({
    msg: "done",
  });
});

app.put("/", function (req, res) {
  const allarenothealthy = isThereAtleastOneUnhealthyKidney();
  if (allarenothealthy) {
    for (let i = 0; i < users.length; i++) {
      users[0].kidneys[i].healthy = true;
    }
    res.json({});
  } else {
    res.status(411).json({
      msg: "All kidneys are already healthy",
    });
  }
});

app.delete("/", function (req, res) {
  if (isThereAtleastOneUnhealthyKidney()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({ msg: "done" });
  } else {
    res.status(411).json({
      msg: "You have no bad kidneys",
    });
  }
});

function isThereAtleastOneUnhealthyKidney() {
  let atleastOneUnhealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atleastOneUnhealthyKidney = true;
    }
  }
  return atleastOneUnhealthyKidney;
}
// app.delete("/", function (req, res) {
//   if (thereisatleastoneunhealthykidney) {
//     const newkidneys = [];
//     for (let i = 0; i < users[0].kidneys.length; i++) {
//       if (users[0].kidneys[i].healthy) {
//         newkidneys.push({
//           healthy: true,
//         });
//       }
//     }

//     users[0].kidneys = newkidneys;
//     res.json({
//       msg: "done",
//     });
//   } else {
//     req.status(411).json({ msg: "no unhealthy kidney" });
//   }
// });

// function thereisatleastoneunhealthykidney() {
//   let atleastone = false;
//   for (let i = 0; i < users[0].kidneys.length; i++) {
//     if (!users[0].kidneys[i].healthy) {
//       atleastone = true;
//     }
//   }
//   return atleastone;
// }
app.listen(3000);
