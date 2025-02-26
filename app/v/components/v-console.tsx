/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Card } from "@/components/ui/card";
import { useTranslation } from "@/lib/i18n-next/use-translation";
import { cn } from "@/lib/utils";
import { DogIcon } from "lucide-react";
import { NotStarted } from "./not-started";

export const VConsole = ({ error, logs, step }: any) => {
  const { t } = useTranslation(["v"]);

  return (
    <Card className="bg-white dark:bg-black dark:text-white p-4">
      <h4 className="font-bold text-2xl">{t("v:console")} </h4>

      <div className="mt-4 space-y-4 text-xl">
        <NotStarted step={step}>
          {error && (
            <div>
              <code className="text-red-400">
                <pre>{error.message}</pre>
              </code>
            </div>
          )}
          {logs?.length === 0 ? (
            <div className="flex items-center justify-center gap-2 my-16 text-[16px] text-gray-500">
              <span className="font-bold">
                <DogIcon />
              </span>

              <span> {t("v:nothing.logged")}</span>
            </div>
          ) : (
            logs.map((items: any, i: any) => {
              return (
                <div
                  key={i}
                  className={cn(
                    i !== 0 && "border-t-2 border-gray-500",
                    "pt-4"
                  )}
                >
                  {items.map((item: any, idx: any) => {
                    return (
                      <div key={i}>
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
                      </div>
                    );
                  })}
                </div>
              );
            })
          )}
        </NotStarted>
      </div>
    </Card>
  );
};
