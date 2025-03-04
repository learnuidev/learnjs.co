/* eslint-disable @typescript-eslint/no-explicit-any */
type Resolve<T> = (value: T | PromiseLike<T>) => void;
type Reject = (reason?: any) => void;
type Executor<T> = (resolve: Resolve<T>, reject: Reject) => void;
type OnFulfilled<T, U> = (value: T) => U | PromiseLike<U>;
type OnRejected<U> = (reason: any) => U | PromiseLike<U>;

const createPromise = <T>(executor: Executor<T>) => {
  let state: "pending" | "fulfilled" | "rejected" = "pending";
  let value: T | any;
  const handlers: Array<OnFulfilled<T, any>> = [];
  const catchers: Array<OnRejected<any>> = [];

  const resolve: Resolve<T> = (result) => {
    if (state !== "pending") return;
    state = "fulfilled";
    value = result;
    handlers.forEach((handler) => handler(value));
  };

  const reject: Reject = (error) => {
    if (state !== "pending") return;
    state = "rejected";
    value = error;
    catchers.forEach((catcher) => catcher(value));
  };

  const then = <U>(
    onFulfilled?: OnFulfilled<T, U>,
    onRejected?: OnRejected<U>
  ) => {
    return createPromise<U>((resolveNext, rejectNext) => {
      const handleResult = (result: T) => {
        try {
          if (typeof onFulfilled === "function") {
            resolveNext(onFulfilled(result));
          } else {
            resolveNext(result as unknown as U);
          }
        } catch (error) {
          rejectNext(error);
        }
      };

      const handleError = (error: any) => {
        try {
          if (typeof onRejected === "function") {
            resolveNext(onRejected(error));
          } else {
            rejectNext(error);
          }
        } catch (err) {
          rejectNext(err);
        }
      };

      if (state === "fulfilled") {
        handleResult(value);
      } else if (state === "rejected") {
        handleError(value);
      } else {
        if (typeof onFulfilled === "function") {
          handlers.push((result) => handleResult(result));
        }
        if (typeof onRejected === "function") {
          catchers.push((error) => handleError(error));
        }
      }
    });
  };

  const _catch = <U>(onRejected: OnRejected<U>) => {
    return then<U>(undefined, onRejected);
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
const myPromise = createPromise<string>((resolve, reject) => {
  setTimeout(() => {
    try {
      resolve("Success!");
    } catch (err) {
      reject(err);
    }
  }, 1000);
});

myPromise
  .then((result) => {
    console.log(result); // Output: Success!
    return "Another Success!";
  })
  .then((result) => {
    console.log(result); // Output: Another Success!
  })
  .catch((error) => {
    console.error(error);
  });
