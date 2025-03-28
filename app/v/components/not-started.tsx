/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from "@/lib/i18n-next/use-translation";
import { DogIcon } from "lucide-react";

export const NotStarted = ({
  children,
  step,
}: {
  children: React.ReactNode;
  step: any;
}) => {
  const { t } = useTranslation(["v"]);

  if (step?.category === "init" || step === undefined) {
    return (
      <div className="flex items-center justify-center gap-2 text-[16px] text-gray-500 my-16">
        <span className="font-bold">
          <DogIcon />
        </span>

        <span> {t("v:not.started")}</span>
      </div>
    );
  }

  return children;
};
