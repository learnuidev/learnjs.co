"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTranslation } from "@/lib/i18n-next/use-translation";
import { cn } from "@/lib/utils";
import { Course } from "@/modules/courses/course.type";

export const CourseBanner = ({ course }: { course: Course }) => {
  const { t } = useTranslation(["common"]);
  const color = "dark:bg-[rgb(11,12,13)] bg-white dark:text-white";
  return (
    <Card
      className={cn(
        "mx-auto max-w-xl rounded-xl flex p-12 py-16 bg-white dark:bg-white justify-center items-center flex-col mt-32",
        color
      )}
    >
      <h1 className="text-5xl font-bold text-center"> {course?.title}</h1>

      <p className="mt-8 text-xl font-mono text-center">
        {course?.description}
      </p>

      <Button
        variant={"neutral"}
        className="rounded-full mt-8 uppercase font-bold "
      >
        {t("common:start.this.course")}
      </Button>
    </Card>
  );
};
