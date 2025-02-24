"use client";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { useTranslation } from "@/lib/i18n-next/use-translation";
import { courses } from "@/modules/courses/courses.mock";
import Link from "next/link";

export const Courses = () => {
  const { t } = useTranslation(["courses"]);

  return (
    <section className="h-screen" id="courses">
      <h2 className="text-5xl font-bold">{t("courses:courses.title")}</h2>
      <p className="mt-4 font-mono text-xl dark:text-gray-400">
        {t("courses:courses.description")}
      </p>

      <div className="grid lg:grid-cols-3 gap-8 mt-12">
        {courses.map((course) => {
          return (
            <Card
              key={course.id}
              className="bg-white dark:bg-[rgb(11,12,13)] p-4 hover:scale-105 transition"
            >
              <CardTitle>{course.title}</CardTitle>

              <CardDescription>{course.description}</CardDescription>

              <Link
                href={`/c/${course.id}`}
                className="underline mt-4 text-sm flex gap-2 items-center"
              >
                <span> Learn More </span>
              </Link>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
