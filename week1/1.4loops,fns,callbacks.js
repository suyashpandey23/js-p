var ans = 0;
for (var idx = 0; idx <= 100; idx++) {
  ans += idx;
}
console.log(ans);

function findsum(m) {
  var ans = 0;
  for (var idx = 0; idx <= m; idx++) {
    ans += idx;
  }
  return ans;
}

console.log(findsum(10));

//callback fns
// can you call one fn inside another fn ? well yes;

//fn to fins sq.
function sq(x) {
  return x * x;
}

//fn to add sq val
function addsq(x, y) {
  const val = sq(x);
  const val2 = sq(y);
  return val + val2;
}

console.log(addsq(1, 2));

function sq(x) {
  return x * x;
}

function cube(n) {
  return n * n * n;
}

function addsq(x, y) {
  const val = sq(x);
  const val2 = sq(y);
  return val + val2;
}

function sumofcube(x, y) {
  const val = cube(x);
  const val2 = cube(y);
  return val + val2;
}

console.log(sumofcube(2, 2));

//instead of writting addsq and sumofcube seperately we can use call back and pass function
//as an argument to another function
function sq(x) {
  return x * x;
}

function cube(n) {
  return n * n * n;
}

function sumof(x, y, fn) {
  const val = fn(x);
  const val2 = fn(y);
  return val + val2;
}

var ans1 = sumof(1, 2, sq);
var ans2 = sumof(1, 2, cube);

console.log(ans1 + " " + ans2);

//another standard way to define a callback which is generally used is by declaring the function while calling it
//and then passing it as an argument to another function
function sumof(x, y, fn) {
  const val1 = fn(x);
  const val2 = fn(y);
  return val1 + val2;
}

//you can leave the function name bt if you want specifically to name it you can do that as well bt it wont get called so no need
const ans1 = sumof(1, 2, function (n) {
  return n * n * n;
});
console.log(ans1)