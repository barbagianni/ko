ko
==

Write asynchronous JavaScript code that looks like synchronous code.

Example:

  ko(function* () {
    var result = yield longRunningTask('result1');
    // waits till the longRunningTask finishes and fills the promised value into result.
    var transformedResult = result + 5;
    // return the final value.
    return transformedResult;
  }).then(function (resultOfAsyncTask) {
    // Do something with the result of the asynchronous task.
  });
