"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTranslation } from "@/lib/i18n-next/use-translation";
import { DogIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export const Nothing = () => {
  const { t } = useTranslation(["common", "nothing"]);
  const router = useRouter();
  return (
    <Card className="bg-white dark:bg-gray-300 mx-auto max-w-xl rounded-xl flex p-12 py-16 justify-center items-center flex-col mt-32">
      <h1 className="text-5xl font-bold text-center flex items-center space-x-4">
        <DogIcon size={54} />:<span>{t("nothing:nothing.title")}</span>
      </h1>

      <p className="mt-8 text-xl font-mono text-center">
        {t("nothing:nothing.description")}
      </p>

      <Button
        onClick={() => {
          router.push("/");
        }}
        variant={"neutral"}
        className="hover:bg-yellow-500 rounded-full mt-8 uppercase font-bold"
      >
        {t("common:back")}
      </Button>
    </Card>
  );
};
