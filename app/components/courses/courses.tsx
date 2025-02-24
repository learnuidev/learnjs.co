"use client";

import { useTranslation } from "@/lib/i18n-next/use-translation";

export const Courses = () => {
  const { t } = useTranslation(["courses"]);

  const courses = [{ id: "classic-js", title: "Classic JS" }];
  return (
    <section className="h-screen" id="courses">
      <h2 className="text-5xl font-bold">{t("courses:courses.title")}</h2>
      <p className="mt-4 font-mono text-xl dark:text-gray-400">
        {t("courses:courses.description")}
      </p>
    </section>
  );
};
