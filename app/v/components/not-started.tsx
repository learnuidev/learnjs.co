import { useTranslation } from "@/lib/i18n-next/use-translation";
import { DogIcon } from "lucide-react";

export const NotStarted = () => {
  const { t } = useTranslation(["v"]);

  return (
    <div className="flex items-center justify-center gap-2 text-[16px] text-gray-500">
      <span className="font-bold">
        <DogIcon />
      </span>

      <span> {t("v:not.started")}</span>
    </div>
  );
};
