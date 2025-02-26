/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useTranslation } from "@/lib/i18n-next/use-translation";
import { DogIcon } from "lucide-react";
import "react-json-view-lite/dist/index.css";

export const Wait = ({
  step,
  children,
}: {
  children: React.ReactNode;
  step: any;
}) => {
  const { t } = useTranslation(["v"]);

  if (step?.category === "wait") {
    return (
      <div className="flex items-center gap-2 mb-4">
        <span className="font-bold">
          <DogIcon />
        </span>

        <span> {t("v:async.operation.waiting")}</span>
      </div>
    );
  }

  return children;
};
