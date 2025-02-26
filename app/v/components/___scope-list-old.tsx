/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useTranslation } from "@/lib/i18n-next/use-translation";
import { cn } from "@/lib/utils";
import { DogIcon } from "lucide-react";

export const ScopeListOld = ({ step }: any) => {
  const { t } = useTranslation(["v"]);

  const styleMap = {
    0: "bg-blue-400",
    1: "bg-green-400",
    2: "bg-orange-400",
  } as any;

  return (
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

          return (
            <div
              key={`${idx}-${Date.now()}`}
              className={cn(
                "bg-yellow-400 p-4 rounded-xl dark:text-black",
                isGlobalScope ? "bg-yellow-400" : styleMap[idx]
              )}
            >
              {bindings.map(([variable, value], i) => {
                return (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                    }}
                  >
                    <code></code>
                  </div>
                );
              })}

              <div className="flex justify-between items-center mb-4">
                {bindings.length === 0 && (
                  <div className="flex items-center gap-2">
                    <span className="font-bold">
                      <DogIcon />
                    </span>

                    <span> {t("v:no.variables")}</span>
                  </div>
                )}

                {isGlobalScope && (
                  <div className="font-bold"> {t("v:global.scope")} </div>
                )}
              </div>

              <code>
                <pre>{stringifiedScope}</pre>
              </code>
            </div>
          );
        })}
    </div>
  );
};
