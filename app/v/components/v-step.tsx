/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Card } from "@/components/ui/card";
import { useTranslation } from "@/lib/i18n-next/use-translation";
import "react-json-view-lite/dist/index.css";

import { camelCaseToSpaced } from "@/lib/formatting/utils/camel-case-to-spaced";
import { cn } from "@/lib/utils";
import { NotStarted } from "./not-started";
import theme from "./theme";
import { Wait } from "./wait";

export const VStep = ({
  step,
}: {
  step: {
    category: "init" | "expression" | "statement";
    value: string;
    type: string;
    time: string;
    loc: any;
  };
}) => {
  const { t } = useTranslation(["v"]);

  return (
    <Card
      className={cn(
        "bg-white dark:bg-black dark:text-white p-4",
        step?.category === "init" || step === undefined ? "" : "h-44"
      )}
    >
      <h4 className="font-bold text-2xl">{t("v:step")} </h4>

      <div className="mt-4">
        <NotStarted step={step}>
          <Wait step={step}>
            {step?.time && step?.category && step?.type && (
              <div>
                <p className="font-bold mb-2">
                  {camelCaseToSpaced(step.type)}

                  {step?.loc?.identifierName
                    ? `: ${step?.loc?.identifierName}`
                    : ``}
                </p>
                <p>
                  <strong style={{ color: theme[step.time].fg }}>
                    {step.time === "before"
                      ? step.category === "expression"
                        ? t("v:about.to.evaluate")
                        : t("v:about.to.execute")
                      : step.category === "statement"
                        ? t("v:executed")
                        : t("v:evaluated")}
                  </strong>{" "}
                  {/* {t(`v:${step.category}`, step.category)} */}
                  {step.category}
                  <br />
                </p>
                {step.time === "after" && step.category === "expression" && (
                  <p>
                    {t("v:to.the.value")}{" "}
                    <span>
                      {JSON.stringify(step?.value, function (k, v) {
                        if (typeof v === "object") {
                          return `${step?.loc?.identifierName || v?.constructor?.name} object`;
                        }

                        if (typeof v === "function") {
                          if (v?.constructor?.name === "Promise") {
                            return "Promise";
                          }
                          return `${step?.loc?.identifierName || t("v:anonymous")} function`;
                        }

                        return v;
                      })}
                    </span>
                  </p>
                )}
              </div>
            )}
          </Wait>
        </NotStarted>
      </div>
    </Card>
  );
};
