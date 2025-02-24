"use client";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { useTranslation } from "@/lib/i18n-next/use-translation";
import { cn } from "@/lib/utils";
import { useListCourses } from "@/modules/courses/hooks/use-list-courses";
import Link from "next/link";

export const Courses = () => {
  const { t } = useTranslation(["courses", "common"]);

  const courses = useListCourses();

  return (
    <section className="h-screen" id="courses">
      <h2 className="text-5xl font-bold">{t("courses:courses.title")}</h2>
      <p className="mt-4 font-mono text-xl dark:text-gray-400">
        {t("courses:courses.description")}
      </p>

      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 mt-12 pb-32">
        {courses.map((course) => {
          return (
            <Card
              key={course.id}
              className={cn(
                "rounded-2xl p-8 hover:scale-105 transition hover:bg-yellow-400",
                course.color
              )}
            >
              <Link href={`/c/${course.id}`} className="inline-block h-auto">
                <CardTitle>{course.title}</CardTitle>

                <CardDescription className="dark:text-gray-400 font-mono">
                  {course.description}
                </CardDescription>
              </Link>

              <Link href={`/c/${course.id}`}>
                <div className="mt-4 flex justify-between w-full">
                  <span className="underline"> {t("common:learn.more")} </span>

                  {course.type === "free" && course.typeI18n}
                </div>
              </Link>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
