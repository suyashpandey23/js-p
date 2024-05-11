console.log("hello world!");
// let var const
var a = 1;
console.log(a);
// we only use let and const
// let for dynamic value and const for costant value

let fname = "suyash";
let age = 23;
let ismarried = false;

console.log("this person name is " + fname + " and their age is " + age);

if (ismarried == true) {
  console.log(fname + " is married");
} else {
  console.log(fname + " is not married ");
}

// let ans = 0;
for (let index = 0; index <= 100; index++) {
  ans += index;
}
console.log(ans);

const arr = [2, 10, 11, 13, 18, 20];
arr.forEach((element) => {
  if (element % 2 == 0) {
    console.log(element);
  }
});

// sytax of arrays->
const values=[1,2,3,4,];
// sytax of objects->combing form of arrays
const person = {
  fname: "suyash",
  age: 23,
  ismarried: false,
};
console.log(person["fname"]);

// we can array of objects which means every field of and array is
// an object in itself

const user1 = [
  {
    fname: "suyash",
    age: 23,
    ismarried: false,
    gender: "male",
  },
  {
    fname: "sushant",
    age: 23,
    ismarried: false,
    gender: "male",
  },
  {
    fname: "manish",
    age: 23,
    ismarried: false,
    gender: "female",
  },
];

for (let index = 0; index < user1.length; index++) {
  if (user1[index].gender == "male") {
    console.log(user1[index].fname);
  }
}

//we can further nest an object both
// inside the array and otherwise in simple manner as well
const user2 = [
  {
    fname: "suyash",
    age: 23,
    ismarried: false,
    metadata: {
      //nested object
      address: "delhi",
      city: "delhi",
    },
  },
  {
    fname: "sushant",
    age: 23,
    ismarried: false,
    metadata: {
      address: "bglr",
      city: "bglr",
    },
  },
];

for (let index = 0; index < user2.length; index++) {
  if (user2[index]["metadata"]["city"] == "bglr") {
    console.log(user2[index]["fname"]);
  }
}

function sum(a, b) {
  return a + b;
}

const val = sum(1, 2);
console.log(val);

const smp = [
  {
    fname: "ravi",
    age: 23,
    metadata: {
      address: "delhi",
      city: "delhi",
    },
  },
];

console.log(smp[0].metadata.city);

function sum(num1,num2,fntocall){
    let res=num1+num2;
    fntocall(res);
}

function displayres(data){
    console.log("result sum is "+ data);
}
function displayrespassive(data){
    console.log("sum is "+ data);
}

sum(2,3,displayres);

function calculateArithmetic(a, b, type) {
  if (type == "sum") {
    const val = sum(a, b);
    return val;
  }
  if (type == "minus") {
    const val = sub(a, b);
    return val;
  }
}

function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

const res = calculateArithmetic(2, 3, "sum");
console.log(res);

//passing function inside other functions is callback functions
function calculateArithmetic(a, b, arithmatic) {
  const ans = arithmatic(a, b);
  return ans;
}

function sum(a, b) {
  return a + b;
}
// const res = calculateArithmetic(2, 3, sum);
console.log(res);

settimeout
function greet() {
  console.log("hello js");
}
// passing fnc as an argument is a callback
setTimeout(greet, 3 * 1000);


 

