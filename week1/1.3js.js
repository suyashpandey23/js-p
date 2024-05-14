//level1
//string

//length of the string
function getlength(str) {
  console.log("original str is :", str);
  console.log("str len is :", str.length);
}
getlength("HELOOOOOOOOOOOOOOOOOOOOO");

const str = "heyo suyash";
console.log(str.length);

//index of a word in a string
//indexOf always gives the first index
function findindexof(str, target) {
  console.log("original str ", str);
  console.log("index of target :", str.indexOf(target));
}
findindexof("hello world", "world");
//if we make something random which is not present in string it will give -1

function findlastindex(str, target) {
  console.log("original str ", str);
  console.log("last index of target :", str.lastIndexOf(target));
}
findlastindex("hello world world world", "world");

//slice string
//slice is used to get a part of a string
//the last index passed is not included
function slice(str, start, end) {
  console.log("original str is :", str);
  console.log("slice of str is :", str.slice(start, end));
}
slice("hello world", 0, 5);
slice("hellokkkk world", 0, 5);

const val = "suyash pandey";
let ans = val.slice(0, 4);
console.log(ans);

//replace string
//replace is used to replace a part of a string
function replace(str, target, replacement) {
  console.log("original str is :", str);
  console.log("replace of str is :", str.replace(target, replacement));
}
replace("hello world", "world", "earth");

const s = "hello suyash";
console.log(s.replace("suyash", "pandey"));

//split string
//the split() method is a useful tool in JavaScript for splitting strings into arrays of substrings based on a specified delimiter.
let st = "hello,world,example";
let arr = st.split(",");
console.log(arr);
// Output: ["hello", "world", "example"]

var strr = "hello siri my name is sp";
const ar = strr.split(" ");
console.log(ar);

//trim
//trim helps you trim down the extra spaces in the beginning and the end;
var strrr = "   hello world   ";
console.log(strrr.trim());

//toUppercase
console.log(strrr.toUpperCase());
//toLowercase
console.log(strrr.toLowerCase());

//numbers

// The parseInt() function in JavaScript is used to convert a string into an integer. It takes two arguments: the string to convert and the base of the number system (optional). Here's an example:
console.log(parseInt("42"));
console.log(parseInt("asdasdasdsa42adsdsadas")); //this will Nan bc in the startin there are not no.
console.log(parseInt("42sfdklfdsalkj"));
console.log(parseInt("3.13"));

//The parseFloat() function in JavaScript is used to convert a string into a floating-point number. It takes one argument: the string to convert. Here's an example:
console.log(parseFloat("42"));
console.log(parseFloat("asdasdasdsa42adsdsadas")); //this will Nan bc in the startin there are not no.
console.log(parseFloat("43sfdklfdsalkj"));
console.log(parseFloat("3.13"));

// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.
// push()
function pushExample(arr, element) {
  console.log("Original Array:", arr);

  arr.push(element);
  console.log("After push:", arr);
}
pushExample([1, 2, 3], 4);

const initialarray = [2, 1, 3];
initialarray.push(7);
console.log(initialarray);

// pop()
function popExample(arr) {
  console.log("Original Array:", arr);

  arr.pop();
  console.log("After pop:", arr);
}
popExample([1, 2, 3]);

initialarray.pop();
console.log(initialarray);

//shift - to pop from starting
function shiftExample(arr) {
  console.log("Original Array:", arr);

  arr.shift();
  console.log("After shift:", arr);
}
shiftExample([1, 2, 3]);

const sarr = [12, 13, 14, 15];
sarr.shift();
console.log(sarr);

//unshift - to put something in from of the array
function unshiftExample(arr, element) {
  console.log("Original Array:", arr);

  arr.unshift(element);
  console.log("After unshift:", arr);
}
unshiftExample([1, 2, 3], 0);

sarr.unshift(0);
console.log(sarr);

//concat - to merge two arrays
function concatExample(arr1, arr2) {
  console.log("Original Arrays:", arr1, arr2);

  let arr3 = arr1.concat(arr2);
  console.log("After concat:", arr3);
}
concatExample([1, 2, 3], [4, 5, 6]);

const farray = [1, 2, 3];
const sarray = [4, 5, 6];
console.log(farray.concat(sarray));

// forEach()-to iterate over an array
function forEachExample(arr) {
  console.log("Original Array:", arr);

  arr.forEach(function (item, index) {
    console.log(item, index);
  });
}
forEachExample([1, 2, 3]);

const temparray = [56, 32, 565, 79, 91];
function logthing(str) {
  console.log(str);
}
temparray.forEach(logthing);

//callback , map , filter , reduce

// ------------------------------------------------------------------------------------------------------------------------------
//level2

//classes
class Animal {
  constructor(name, legCount) {
    this.name = name;
    this.legCount = legCount;
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`;
  }
}

let dog = new Animal("dog", 2); //object creation
let bird = new Animal("sparrow", 2);
console.log(dog.describe()); //call function on object
console.log(bird.describe()); ////call function on object

//date class in js(a premade class in js)

function dateMethods() {
  const currentDate = new Date();
  console.log("Current Date:", currentDate);

  // Getting various components of the date
  console.log("Date:", currentDate.getDate());
  console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
  console.log("Year:", currentDate.getFullYear());
  console.log("Hours:", currentDate.getHours());
  console.log("Minutes:", currentDate.getMinutes());
  console.log("Seconds:", currentDate.getSeconds());

  // Setting components of the date
  currentDate.setFullYear(2022);
  console.log("After setFullYear:", currentDate);

  currentDate.setMonth(5); // Setting month to June (zero-indexed)
  console.log("After setMonth:", currentDate);

  // Getting and setting time in milliseconds since 1970
  console.log("Time in milliseconds since 1970:", currentDate.getTime());

  const newDate = new Date(2023, 8, 15); // Creating a new date
  console.log("New Date:", newDate);
}
dateMethods();
// const currentDate=new Date();
// console.log(currentDate.getDate());
// console.log(currentDate.getMonth()+1)//0 based array for months so add +1;
// console.log(currentDate.getFullYear());

function currentime() {
  console.log(new Date().getSeconds());
}
// setInterval(currentime, 1000);

//json javascript object notaion
//sending data object in form of string is done with json

//json.parse-parse json string to object ans lets you use further
//json.stringify-converts js objects to json strings

const users = '{"name":"suyash","age":23,"gender":"male"}';
const user = JSON.parse(users);
console.log(user["gender"]);

const sampleuser = {
  name: "lala",
  gender: "male",
};
const finalstring = JSON.stringify(sampleuser);
console.log(finalstring);

function mathMethods(value) {
  console.log("Original Value:", value);

  let rounded = Math.round(value);
  console.log("After round():", rounded);

  let ceiling = Math.ceil(value);
  console.log("After ceil():", ceiling);

  let flooring = Math.floor(value);
  console.log("After floor():", flooring);

  let randomValue = Math.random();
  console.log("After random():", randomValue);

  let maxValue = Math.max(5, 10, 15);
  console.log("After max():", maxValue);

  let minValue = Math.min(5, 10, 15);
  console.log("After min():", minValue);

  let powerOfTwo = Math.pow(value, 2);
  console.log("After pow():", powerOfTwo);

  let squareRoot = Math.sqrt(value);
  console.log("After sqrt():", squareRoot);
}

// Example Usage for Math Methods
mathMethods(4.56);
mathMethods(9);
mathMethods(25);

// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

  let values = Object.values(obj);
  console.log("After Object.values():", values);

  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty():", hasProp);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);
}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);
