const states = {
  pending: "pending",
  fulfilled: "fulfilled",
  rejected: "rejected",
};

const typeofs = {
  function: "function",
};

const createPromise = (executor) => {
  let state = states.pending;
  let value;
  const handlers = [];
  const catchers = [];

  const resolve = (result) => {
    if (state !== states.pending) return;
    state = states.fulfilled;
    value = result;
    handlers.forEach((handler) => handler(value));
  };

  const reject = (error) => {
    if (state !== states.pending) return;
    state = states.rejected;
    value = error;
    catchers.forEach((catcher) => catcher(value));
  };

  const then = (onFulfilled, onRejected) => {
    return createPromise((resolveNext, rejectNext) => {
      const handleResult = (result) => {
        try {
          if (typeof onFulfilled === typeofs.function) {
            resolveNext(onFulfilled(result));
          } else {
            resolveNext(result);
          }
        } catch (error) {
          rejectNext(error);
        }
      };

      const handleError = (error) => {
        try {
          if (typeof onRejected === typeofs.function) {
            resolveNext(onRejected(error));
          } else {
            rejectNext(error);
          }
        } catch (err) {
          rejectNext(err);
        }
      };

      if (state === states.fulfilled) {
        handleResult(value);
      } else if (state === states.rejected) {
        handleError(value);
      } else {
        if (typeof onFulfilled === typeofs.function) {
          handlers.push((result) => handleResult(result));
        }
        if (typeof onRejected === typeofs.function) {
          catchers.push((error) => handleError(error));
        }
      }
    });
  };

  const _catch = (onRejected) => {
    return then(undefined, onRejected);
  };

  // Execute the executor function
  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }

  return {
    then,
    catch: _catch,
  };
};

// Example usage:
const myPromise = createPromise((resolve, reject) => {
  setTimeout(() => {
    try {
      resolve("Success!");
    } catch (err) {
      reject(err);
    }
  }, 0);
});

Promise.resolve().then(() => {
  console.log("REAL PROMISE");
});

myPromise
  .then((result) => {
    console.log(result); // Output: Success!
    return "Another Success!";
  })
  .then((result) => {
    console.log(1 + 1);
    console.log(result); // Output: Another Success!
  })
  .catch((error) => {
    console.error(error);
  });
