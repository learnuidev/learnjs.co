/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Card } from "@/components/ui/card";
import { useTranslation } from "@/lib/i18n-next/use-translation";
import { cn } from "@/lib/utils";
import { DogIcon } from "lucide-react";

export const VScope = ({ step }: any) => {
  const { t } = useTranslation(["v"]);
  return (
    <Card className="bg-white dark:bg-black dark:text-white p-4">
      <h4 className="font-bold text-2xl">{t("v:scope")} </h4>

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
    </Card>
  );
};
