/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Slider } from "@/components/ui/slider";
import Editor from "react-simple-code-editor";
import { Highlight } from "./components/highlight";
import { presets } from "./data/presets";
import { useCode } from "./hooks/use-code";
import { useReplacableWorker } from "./hooks/use-replaceable-worker";
import { useEffect, useState } from "react";
import { add_waiting_time_steps } from "./utils/add-waiting-time-steps";
import { undescribe } from "./utils/describe";
import { useThrottle } from "react-use";
import { useMostRecent } from "./hooks/use-most-recent";
import { Card } from "@/components/ui/card";
import theme from "./components/theme";
import "./prism.css";
import {
  JsonView,
  allExpanded,
  darkStyles,
  defaultStyles,
} from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";
import { cn } from "@/lib/utils";

export default function V() {
  // @ts-ignore
  const [code, set_code] = useCode(presets["Closure" || "Promise / fetch"]);
  const [cache, set_cache] = useState<any>({});

  const worker = useReplacableWorker((data: any) => {
    if (!data.error) {
      data.steps = JSON.parse(data.steps);
      data.steps.forEach((step: any) => {
        if ("value" in step) {
          step.value = undescribe(step.value);
        }
        if ("scopes" in step) {
          step.scopes.forEach((scope: any) => {
            Object.keys(scope).forEach((key) => {
              scope[key] = undescribe(scope[key]);
            });
          });
        }
        if ("logs" in step) {
          step.logs = step.logs.map((line: any) => {
            return line.map((item: any) => undescribe(item));
          });
        }
      });
      add_waiting_time_steps(data.steps);
    }
    set_cache((cache: any) => {
      return {
        ...cache,
        [data.code]: data,
      };
    });
  });

  useEffect(() => {
    if (worker && !cache[code]) {
      worker.postMessage({ code });
    }
  }, [code, cache, worker]);

  const state = cache[code] || { loading: true };
  const { loading, steps } = state;
  const { loading: loading_throttled, error } = useThrottle(state, 200);

  const max = useMostRecent(steps, []).length - 1;
  const [at, set_at] = useState(0);
  const step =
    steps && steps[Math.max(0, Math.min(steps.length - 1, Math.round(at)))];

  const logs = (steps || [])
    .slice(0, step?.num + 1)
    .map((s: any) => s?.logs || [])
    .flat();

  console.log("LOGS", logs);

  return (
    <main className="mt-4 mx-0 mb-8">
      <section className="mt-8">
        <div className="flex gap-12 items-center flex-row mt-12">
          <Slider
            max={steps?.length}
            value={[at]}
            onValueChange={(value) => {
              set_at(value[0]);
            }}
          />

          <p className="text-4xl font-bold">{at}</p>
        </div>
        <div className="grid grid-cols-12 mt-12 gap-8">
          <Card className="col-span-12 sm:col-span-7 bg-white dark:bg-black dark:text-white">
            <Editor
              value={code}
              onValueChange={(str) => {
                set_code(str);
              }}
              highlight={(code) => {
                return <Highlight code={code} step={step} />;
              }}
              padding={24}
              style={{
                fontFamily: "Menlo, Consolas, monospace",
                fontSize: 18,
                lineHeight: 1.5,
              }}
              preClassName="language-js"
              textareaClassName="Code"
            />
          </Card>

          <div className="col-span-12 sm:col-span-5 flex flex-col gap-8">
            <Card className="bg-white dark:bg-black dark:text-white p-4 h-44">
              <h4 className="font-bold text-2xl">Step </h4>

              <div className="mt-4">
                {step?.category === "init" ? (
                  <div>init</div>
                ) : step?.category === "wait" ? (
                  <div>async operation waiting...</div>
                ) : (
                  step?.time &&
                  step?.category &&
                  step?.type && (
                    <div>
                      <p className="font-bold">{step.type}</p>
                      <p>
                        <strong style={{ color: theme[step.time].fg }}>
                          {step.time === "before"
                            ? `about to ${
                                step.category === "expression"
                                  ? "evaluate"
                                  : "execute"
                              }`
                            : step.category === "statement"
                              ? "executed"
                              : "evaluated"}
                        </strong>{" "}
                        {step.category}
                        <br />
                        {/* <span>
                        (of type <strong>{step.type}</strong>)
                      </span> */}
                      </p>
                      {step.time === "after" &&
                        step.category === "expression" && (
                          <p>&hellip;to the value:</p>
                        )}
                    </div>
                  )
                )}
              </div>

              {/* {step?.time === "after" && step?.category === "expression" && (
                <div>{JSON.stringify(step?.value)}</div>
              )} */}
            </Card>
            <Card className="bg-white dark:bg-black dark:text-white p-4">
              <h4 className="font-bold text-2xl">Scope </h4>

              <div className="mt-4 space-y-4">
                {step?.scopes &&
                  step?.scopes?.map((scope: any, idx: any, ctx: any) => {
                    const bindings = Object.entries(scope);

                    const stringifiedScope = JSON.stringify(
                      scope,
                      function (k, v) {
                        return v === undefined
                          ? "undefined"
                          : typeof v === "function"
                            ? "function"
                            : v;
                      },
                      4
                    );

                    const isGlobalScope = idx === ctx?.length - 1;

                    const styleMap = {
                      0: "bg-blue-400",
                      1: "bg-green-400",
                      2: "bg-orange-400",
                    } as any;

                    return (
                      <div
                        key={`${idx}-${Date.now()}`}
                        className={cn(
                          "bg-yellow-400 p-4 rounded-xl dark:text-black",
                          isGlobalScope ? "bg-yellow-400" : styleMap[idx]
                        )}

                        // css={`
                        //   display: inline-block;
                        //   margin-top: 10px;
                        //   border: 2px solid ${j === 0 ? "black" : "#ccc"};
                        //   ${j === 0 && "box-shadow: 0 2px 6px rgba(0, 0, 0, .2);"}
                        //   padding: 10px;
                        //   border-radius: 4px;
                        // `}
                      >
                        {bindings.length === 0 && (
                          <p>
                            <em>(no variables in this scope)</em>
                          </p>
                        )}
                        {bindings.map(([variable, value], i) => {
                          return (
                            <div
                              key={i}
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                              }}
                            >
                              <code>
                                {/* <pre>{value}</pre> */}

                                {/* <JsonView
                                data={value as any}
                                shouldExpandNode={allExpanded}
                                style={defaultStyles}
                              /> */}
                              </code>
                              {/* <ObjectInspector
                            theme={inspectorTheme}
                            name={variable}
                            data={value}
                          /> */}
                            </div>
                          );
                        })}

                        {/* <JsonView
                        data={scope}
                        shouldExpandNode={allExpanded}
                        style={defaultStyles}
                      /> */}
                        {isGlobalScope && (
                          <div className="mb-2 font-bold"> global scope </div>
                        )}
                        <code>
                          <pre>{stringifiedScope}</pre>
                        </code>
                      </div>
                    );
                  })}
              </div>
            </Card>
            <Card className="bg-white dark:bg-black dark:text-white p-4">
              <h4 className="font-bold text-2xl">Console </h4>

              <div className="mt-4 space-y-4">
                {error && (
                  <div>
                    <code className="text-red-400">
                      <pre>{error.message}</pre>
                    </code>
                  </div>
                )}
                {logs.map((items: any, i: any) => {
                  return (
                    <div
                      key={i}
                      // style={{
                      //   display: "flex",
                      //   flexWrap: "wrap",
                      //   paddingBottom: 10,
                      //   ...(i !== 0 && {
                      //     borderTop: "2px solid #ccc",
                      //     paddingTop: 10,
                      //   }),
                      // }}

                      className={cn(
                        i !== 0 && "border-t-2 border-gray-500",
                        "pt-4"
                      )}
                    >
                      {items.map((item: any, idx: any) => {
                        return (
                          <div key={i}>
                            {/* {JSON.stringify(item)} */}

                            <code>
                              <pre>
                                {JSON.stringify(
                                  item,
                                  function (k, v) {
                                    return v === undefined ? "undefined" : v;
                                  },
                                  4
                                )}
                              </pre>
                            </code>
                            {/* <JsonView
                            data={item}
                            shouldExpandNode={allExpanded}
                            style={defaultStyles}
                          /> */}
                            {/* <ObjectInspector theme={inspectorTheme} data={item} /> */}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
