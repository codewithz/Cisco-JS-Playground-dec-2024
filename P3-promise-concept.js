// const p = new Promise(
//   (
//     functionToBeInvokedWhenPromiseIsKept,
//     functionToBeInvokedWhenPromiseIsBroken
//   ) => {
//     console.log("Task to be performed-- Async Task");
//     const isTaskSuccessful = false;
//     if (isTaskSuccessful) {
//       functionToBeInvokedWhenPromiseIsKept(10);
//     } else {
//       functionToBeInvokedWhenPromiseIsBroken(20);
//     }
//   }
// );

// p.then((valueReturnedWhenPromiseIsFullfilled) => {
//   console.log(
//     "Value Returned When the Promise is Fullfilled:",
//     valueReturnedWhenPromiseIsFullfilled
//   );
// }).catch((valueReturnedWhenPromiseIsBroken) => {
//   console.log(
//     "Value Returned When the Promise is Broken:",
//     valueReturnedWhenPromiseIsBroken
//   );
// });
const p = new Promise(
  (
    resolve,
    reject
  ) => {
    console.log("Task to be performed-- Async Task");
    const isTaskSuccessful = true;
    if (isTaskSuccessful) {
      resolve(10);
    } else {
      reject(new Error("I dion't like the promise"));
    }
  }
);

p.then((result) => {
  console.log(
    "Value Returned When the Promise is Fullfilled:",
    result
  );
}).catch((error) => {
  console.log(
    "Value Returned When the Promise is Broken:",
    error
  );
});


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
