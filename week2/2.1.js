//Promises
/* approach 1
wrapping another async fn*/
/* this approach uses a callback where other people can send a callback this is good , but could lead to callback hell */
// function myownsetTimeout(fn, duration) {
//   setTimeout(fn, duration);
// }

// myownsetTimeout(function () {
//   console.log("Hello");
// }, 1000);

//using promises
function myownsetTimeout(duration) {
  let p = new Promise(function (resolve) {
    //after 1 sec call resolve
    setTimeout(resolve, 1000);
  });
  return p;
}
myownsetTimeout(1000).then(function () {
  console.log("log the first thing");
});

/*
Callback hell, also known as "Pyramid of Doom," refers to a situation in JavaScript where multiple nested callback functions make the code difficult to read and maintain. This often occurs when dealing with several asynchronous operations that depend on each other. Here’s a detailed explanation:
### What is Callback Hell?
When you have multiple asynchronous operations that need to be executed in sequence, you often end up nesting callbacks inside callbacks. This nesting can quickly become deeply indented and hard to follow, making the code look like a pyramid.
### Example of Callback Hell
Here's a basic example to illustrate callback hell:
```javascript
doSomething(function(result1) {
    doSomethingElse(result1, function(result2) {
        doAnotherThing(result2, function(result3) {
            doSomethingMore(result3, function(result4) {
                // and so on...
                console.log('Final result:', result4);
            });
        });
    });
});
```

In this example, each subsequent asynchronous operation depends on the result of the previous one. This nesting can become problematic as the complexity grows, leading to code that is difficult to read, debug, and maintain.
### Problems with Callback Hell
1. **Readability**: The code becomes increasingly hard to read as the indentation level increases.
2. **Maintainability**: Modifying the code can be error-prone due to the deeply nested structure.
3. **Error Handling**: Managing errors is more complicated because you have to handle errors at each level of the callback chain.
4. **Scalability**: As the number of asynchronous operations grows, the nesting grows as well, leading to even more complex and less manageable code.

### Solutions to Callback Hell
To mitigate the problems of callback hell, several techniques and features have been introduced in JavaScript:
1. **Named Functions**: Breaking down nested callbacks into separate named functions can help flatten the code structure.
    ```javascript
    function doSomethingCallback(result1) {
        doSomethingElse(result1, doSomethingElseCallback);
    }

    function doSomethingElseCallback(result2) {
        doAnotherThing(result2, doAnotherThingCallback);
    }

    function doAnotherThingCallback(result3) {
        doSomethingMore(result3, function(result4) {
            console.log('Final result:', result4);
        });
    }

    doSomething(doSomethingCallback);
    ```
2. **Promises**: Using Promises can flatten the nested structure by chaining `.then()` calls, providing a more linear and readable flow.
    ```javascript
    doSomething()
        .then(result1 => doSomethingElse(result1))
        .then(result2 => doAnotherThing(result2))
        .then(result3 => doSomethingMore(result3))
        .then(result4 => console.log('Final result:', result4))
        .catch(error => console.error('Error:', error));
    ```

3. **async/await**: The `async` and `await` syntax introduced in ES2017 allows you to write asynchronous code that looks synchronous, making it much easier to read and maintain.

    ```javascript
    async function asyncFunction() {
        try {
            const result1 = await doSomething();
            const result2 = await doSomethingElse(result1);
            const result3 = await doAnotherThing(result2);
            const result4 = await doSomethingMore(result3);
            console.log('Final result:', result4);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    asyncFunction();
    ```f 
By using these techniques, you can avoid callback hell and write cleaner, more maintainable asynchronous JavaScript code.
*/

const ticket = new Promise(function (resolve, reject) {
  const isboarded = true;
  if (isboarded) {
    resolve("Ticket confirmed");
  } else {
    reject("Ticket not confirmed");
  }
});

ticket
  .then((data) => {
    console.log("wohoooooo");
  })
  .catch((data) => {
    console.log("oh noooo");
  })
  .finally(() => {
    console.log("finally always gets executed");
  });

function getcheese() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cheese = "cheeeeeeseeeeee";
      resolve(cheese);
    }, 2000);
  });
}

console.log(getcheese());

function getdough(cheese) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dough = "douughhhhhh";
      resolve(dough);
    }, 2000);
  });
}

function bakepizza(dough) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pizza = "Pizzaaaaaaa";
      resolve(pizza);
    }, 2000);
  });
}

//promisified calling
getcheese()
  .then((cheese) => {
    console.log("here is your chese ->", cheese);
    return getdough(cheese);
  })
  .then((dough) => {
    console.log("here is your dough ->", dough);
    return bakepizza(dough);
  })
  .then((pizza) => {
    console.log("here is your pizza ->", pizza);
  })
  .catch((data) => {
    console.log("error occured ", data);
  })
  .finally(() => {
    console.log("process end");
  });

//async await method for same
async function makepizza() {
  const cheese = await getcheese();
  const getdough = await getdough(cheese);
  const pizza = await bakepizza(getdough);
}
