const express = require("express");
const app = express();
app.use(express.json());

//array
const users = [];

app.post("/signup", function (req, res) {
  const { name, password, firstname, lastname } = req.body;

  const userexists = users.find((user) => user.name == name);
  if (userexists) {
    return res.status(400).json({ message: "user already exists" });
  }

  const newuser = {
    name,
    password,
    firstname,
    lastname,
  };

  users.push(newuser);

  console.log(users);
  res.status(201).json({
    msg: "user created successfully",
    user: {
      name: newuser.name,
      password: newuser.password,
      firstname: newuser.firstname,
      lastname: newuser.lastname,
    },
  });
});

app.post("/login", function (req, res) {
  const { name, password } = req.body;

  const userexists = users.find(
    (user) => user.name == name && user.password == password
  );
  if (!userexists) {
    res.status(401).json({ msg: "invalid username or password" });
  }

  res.status(200).json({
    msg: "login successful",
    user: {
      name: userexists.name,
      password: userexists.password,
      firstname: userexists.firstname,
      lastname: userexists.lastname,
    },
  });
});

app.listen(3000);
