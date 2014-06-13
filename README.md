ko
==

Write asynchronous JavaScript code that looks like synchronous code.

Example:
```
ko(function* () {
  var result = yield longRunningTask(12);
  // resumes execution when the longRunningTask finishes and fills the promised value into result.
  var transformedResult = result + 5;
  // return the final value.
  return transformedResult;
}).then(function (resultOfAsyncTask) {
  // Do something with the result of the asynchronous task.
});
```

Also supports starting multiple asynchronous tasks:
```
ko(function* () {
  var result = yield [
    longRunningTask(12),
    longRunningTask(42),
  ];
  // resumes execution when both longRunningTasks are finished and fills the promised values into result.
  var transformedResult = result[0] + result[1];
  // return the final value.
  return transformedResult;
}).then(function (resultOfAsyncTask) {
  // Do something with the result of the asynchronous task.
});
```
