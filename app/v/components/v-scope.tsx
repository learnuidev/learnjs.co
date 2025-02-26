"use client";

import { Card } from "@/components/ui/card";
import { useTranslation } from "@/lib/i18n-next/use-translation";
import { ScopeListOld } from "./___scope-list-old";
import { ScopeList } from "./scope-list";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const VScope = ({ step }: { step: any }) => {
  const { t } = useTranslation(["v"]);

  return (
    <Card className="bg-white dark:bg-black dark:text-white p-4">
      <h4 className="font-bold text-2xl">{t("v:scope")} </h4>
      <ScopeList step={step} />
      <ScopeListOld step={step} />
    </Card>
  );
};
