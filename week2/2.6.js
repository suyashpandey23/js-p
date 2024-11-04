//so there are different ways to write a function
//1
function add(a, b) {
  return a + b;
}

// //2
const add2 = (a, b) => {
  return a + b;
};

//similarly
// app.get("/", function (req, res) {
//   res.send("hello world");
// });

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

//map filter ans arrow fns
//give me back a array in which every input of the given array is multiplied by 2;
// const arr = [1, 2, 3, 4, 5];
// const ans = [];
// for (let i = 0; i < arr.length; i++) {
//   ans.push(arr[i] * 2);
// }
// console.log(ans);

//using a map;
const input = [2, 4, 8, 9];
function transform(i) {
  return i * 2;
}
// const ans = input.map(transform);
// console.log(ans);

//a more cleaner way to write the same is
const ans = input.map(function (i) {
  return i * 2;
});
// console.log(ans);

// filter
//given an array give me all even values in the array
//simple way
const arr2 = [2, 4, 5, 7, 8];
const ans2 = [];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] % 2 == 0) {
    ans2.push(arr2[i]);
  }
}
// console.log(ans2);

function filterlogic(n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

const ans3 = arr2.filter(filterlogic);
// console.log(ans3);

//a more cleaner way to write the same;
const ans4 = arr2.filter(function (n) {
  return n % 2 == 0;
});
console.log(ans4);


// try to understand that function(n) in map and filter, the n represents the individual value of the array that is comming 
