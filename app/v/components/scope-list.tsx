/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useTranslation } from "@/lib/i18n-next/use-translation";

import { cn } from "@/lib/utils";
import { DogIcon } from "lucide-react";
import { Trans } from "react-i18next";

const getScopeName = ({ step, steps, at, scopeIndex }: any) => {
  return `inner [${scopeIndex}]`;
};

export const ScopeList = ({ step, steps, at }: any) => {
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
                  "p-4 rounded-xl my-4"
                )}
              >
                {childrenScopes}
                {isGlobalScope ? (
                  <div className="font-bold mb-4"> {t("v:global.scope")} </div>
                ) : (
                  <div className="font-bold mb-4">
                    <Trans
                      i18nKey={"v:custom.scope"}
                      values={{
                        custom: getScopeName({
                          steps,
                          step,
                          at,
                          scopeIndex: j,
                        }),
                      }}
                    />
                  </div>
                )}
                {bindings.length === 0 && (
                  <div className="flex items-center gap-2 my-4">
                    <span className="font-bold">
                      <DogIcon />
                    </span>

                    <span> {t("v:no.variables")}</span>
                  </div>
                )}
                {bindings.length === 0 ? null : (
                  <code className="block">
                    <pre>{stringifiedScope}</pre>
                  </code>
                )}
              </div>
            );
          },
          <div />
        )}
    </div>
  );
};
