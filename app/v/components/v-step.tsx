/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Card } from "@/components/ui/card";
import { useTranslation } from "@/lib/i18n-next/use-translation";
import { DogIcon } from "lucide-react";
import "react-json-view-lite/dist/index.css";

import theme from "./theme";
import { camelCaseToSpaced } from "@/lib/formatting/utils/camel-case-to-spaced";
import { NotStarted } from "./not-started";
import { cn } from "@/lib/utils";

export const VStep = ({ step }: any) => {
  const { t } = useTranslation(["v"]);

  return (
    <Card
      className={cn(
        "bg-white dark:bg-black dark:text-white p-4",
        step?.category === "init" ? "" : "h-44"
      )}
    >
      <h4 className="font-bold text-2xl">{t("v:step")} </h4>

      <div className="mt-4">
        {step?.category === "init" ? (
          <div className="my-16">
            <NotStarted />
          </div>
        ) : step?.category === "wait" ? (
          <div className="flex items-center gap-2 mb-4">
            <span className="font-bold">
              <DogIcon />
            </span>

            <span> {t("v:async.operation.waiting")}</span>
          </div>
        ) : (
          step?.time &&
          step?.category &&
          step?.type && (
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
          )
        )}
      </div>
    </Card>
  );
};
