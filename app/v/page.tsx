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

export default function V() {
  const [code, set_code] = useCode(presets["Promise / fetch"]);
  const [cache, set_cache] = useState({});

  const worker = useReplacableWorker((data) => {
    if (!data.error) {
      data.steps = JSON.parse(data.steps);
      data.steps.forEach((step) => {
        if ("value" in step) {
          step.value = undescribe(step.value);
        }
        if ("scopes" in step) {
          step.scopes.forEach((scope) => {
            Object.keys(scope).forEach((key) => {
              scope[key] = undescribe(scope[key]);
            });
          });
        }
        if ("logs" in step) {
          step.logs = step.logs.map((line) => {
            return line.map((item) => undescribe(item));
          });
        }
      });
      add_waiting_time_steps(data.steps);
    }
    set_cache((cache) => {
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

  return (
    <main className="mt-4 mx-0">
      <section className="mt-8">
        <Slider
          max={steps?.length}
          value={[at]}
          onValueChange={(value) => {
            set_at(value[0]);
          }}
        />

        <div>
          <Editor
            value={code}
            onValueChange={(str) => {
              set_code(str);
            }}
            highlight={(code) => {
              // console.log("INNER CODE", code);
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
        </div>
      </section>
    </main>
  );
}
