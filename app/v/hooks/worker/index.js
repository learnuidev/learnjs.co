import * as babel from "@babel/core";

import { describe } from "./describe";
import transpilerPlugin from "./transpile-plugin";

const id = Math.floor(Math.random() * 1000);

console.debug("hello from worker");

setInterval(() => {
  self.postMessage({ alive: id });
}, 100);

self.onmessage = ({ data: { code, config = {} } }) => {
  console.debug("compiling...");
  const ns = (config.ns = config.ns || "__V__");
  try {
    const transpiled = transpile(code, config);
    self.describe = describe;
    let getSteps = eval(`
      (((undefined) => {
        const console = new (class console {
          log(...args) {
            ${ns}._logs.push(args.map(item => ${ns}.describe(item)));
          }
        });
        const ${ns} = {
          _t0: Date.now(),
          _steps: [ { category: "init" } ],
          _updated: false,
          _logs: [],
          _tmp: {}
        };
        ${ns}.describe = self.describe;
        ${ns}.cache = {};
        ${ns}.report = function(value, meta) {
          meta.dt = Date.now() - ${ns}._t0;
          meta.num = ${ns}._steps.push(meta) - 1;
          meta.value = ${ns}.describe(value);
          meta.logs = ${ns}._logs;
          ${ns}._logs = [];
          ${ns}._updated = true;
          return value;
        };
        (function () {
          ${transpiled};
        }.call());
        return () => {
          const res = [${ns}._steps, ${ns}._updated];
          ${ns}._updated = false;
          return res;
        };
      })())
    `);

    // To avoid some kind of permission problem,
    //  manually serialize then deserialize once
    console.debug("  OK");
    let TIMEOUT = 500;
    let steps,
      updated,
      run = 0;

    function messageUpdates() {
      // stop polling after 1 minute
      if (++run * TIMEOUT > 60000) {
        clearInterval(interval);
      }

      [steps, updated] = getSteps();
      if (updated) {
        self.postMessage({
          code,
          transpiled,
          config,
          steps: JSON.stringify(steps),
        });
      }
    }
    let interval = setInterval(messageUpdates, TIMEOUT);
    messageUpdates();
  } catch (error) {
    console.debug("  ERR", error);
    const {
      message,
      constructor: { name: type },
    } = error;
    self.postMessage({ code, config, error: { message, type } });
  }
};

function transpile(code, config) {
  const transpiled = babel.transformSync(code, {
    plugins: [[transpilerPlugin, config]],
  });

  return transpiled.code;
}
