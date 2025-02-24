"use client";

import { Card } from "@/components/ui/card";
import { useGetCourse } from "./hooks/use-get-course";
import { useGetCourseParams } from "./hooks/use-get-course-params";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n-next/use-translation";

export default function Page() {
  const { courseId } = useGetCourseParams();
  const course = useGetCourse(courseId);

  const { t } = useTranslation(["common"]);

  return (
    <div>
      <Card className="mx-auto max-w-xl rounded-xl flex p-12 py-16 bg-white dark:bg-white justify-center items-center flex-col mt-32">
        <h1 className="text-5xl font-bold text-center"> {course?.title}</h1>

        <p className="mt-8 text-xl font-mono text-center">
          {course?.description}
        </p>

        <Button className="bg-yellow-500 rounded-full mt-8 uppercase font-bold">
          {t("common:start.this.course")}
        </Button>
      </Card>
    </div>
  );
}
