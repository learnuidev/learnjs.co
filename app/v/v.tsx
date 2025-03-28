"use client";

import { Slider } from "@/components/ui/slider";
import { VStep } from "./components/v-step";

import { VConsole } from "./components/v-console";
import { VEditor } from "./components/v-editor";
import { VScope } from "./components/v-scope";
import { useVState } from "./hooks/use-v-state";
import "./prism.css";

export function V() {
  const { steps, at, code, set_at, set_code, step, error, logs } = useVState();

  console.log("step", step);

  return (
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
        <VEditor
          at={at}
          code={code}
          set_at={set_at}
          step={step}
          set_code={set_code}
        />

        <div className="col-span-12 sm:col-span-5 flex flex-col gap-8">
          <VStep step={step} />
          <VScope step={step} steps={steps} at={at} />
          <VConsole step={step} logs={logs} error={error} />
        </div>
      </div>
    </section>
  );
}
