"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTranslation } from "@/lib/i18n-next/use-translation";
import { useRouter } from "next/navigation";

export const Nothing = () => {
  const { t } = useTranslation(["common", "nothing"]);
  const router = useRouter();
  return (
    <Card className="mx-auto max-w-xl rounded-xl flex p-12 py-16 bg-white dark:bg-white justify-center items-center flex-col mt-32">
      <h1 className="text-5xl font-bold text-center">
        {t("nothing:nothing.title")}
      </h1>

      <p className="mt-8 text-xl font-mono text-center">
        {t("nothing:nothing.description")}
      </p>

      <Button
        onClick={() => {
          router.push("/");
        }}
        className="bg-yellow-500 rounded-full mt-8 uppercase font-bold"
      >
        {t("common:back")}
      </Button>
    </Card>
  );
};
