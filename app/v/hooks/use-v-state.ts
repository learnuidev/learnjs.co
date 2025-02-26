/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useEffect, useState } from "react";
import { useThrottle } from "react-use";
import { presets } from "../data/presets";
import { useCode } from "./use-code";
import { useMostRecent } from "./use-most-recent";
import { useReplacableWorker } from "./use-replaceable-worker";

import { add_waiting_time_steps } from "../utils/add-waiting-time-steps";
import { undescribe } from "../utils/describe";

export const useVState = () => {
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

  return {
    logs,
    max,
    loading,
    loading_throttled,
    steps,
    at,
    code,
    set_at,
    set_code,
    step,
    error,
  };
};
