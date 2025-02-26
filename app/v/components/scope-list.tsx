/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useTranslation } from "@/lib/i18n-next/use-translation";
import { cn } from "@/lib/utils";
import { DogIcon } from "lucide-react";

export const ScopeList = ({ step }: any) => {
  const { t } = useTranslation(["v"]);

  const styleMap = {
    0: "bg-blue-400",
    1: "bg-green-400",
    2: "bg-orange-400",
  } as any;

  return (
    <div className="mt-4 space-y-4">
      {step?.scopes &&
        step?.scopes?.slice().reduce(
          (childrenScopes: any, scope: any, j: any, ctx: any) => {
            const isGlobalScope = j === ctx?.length - 1;
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
            return (
              <div
                className={cn(
                  isGlobalScope ? "bg-yellow-400" : styleMap[j],
                  "p-4 rounded-xl"
                )}
              >
                {isGlobalScope && (
                  <div className="font-bold"> {t("v:global.scope")} </div>
                )}
                {bindings.length === 0 && (
                  <div className="flex items-center gap-2">
                    <span className="font-bold">
                      <DogIcon />
                    </span>

                    <span> {t("v:no.variables")}</span>
                  </div>
                )}
                <code className="block">
                  <pre>{stringifiedScope}</pre>
                </code>
                {childrenScopes}
              </div>
            );
          },
          <div />
        )}
    </div>
  );
};
