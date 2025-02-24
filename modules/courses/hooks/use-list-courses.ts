import { useTranslation } from "@/lib/i18n-next/use-translation";
import { Course } from "../course.type";

export const useListCourses = () => {
  const { t } = useTranslation(["courses"]);

  const courses: Course[] = [
    {
      id: "classic-js",
      type: t("courses:course.paid"),
      title: t("courses:course1.title"),
      description: t("courses:course1.description"),
    },
    {
      id: "state-management",
      type: t("courses:course.paid"),
      title: t("courses:course2.title"),
      description: t("courses:course2.description"),
    },
    {
      id: "advanced-js",
      type: t("courses:course.paid"),
      title: t("courses:course3.title"),
      description: t("courses:course3.description"),
    },
    {
      id: "grokking-posthog",
      type: t("courses:course.paid"),
      title: t("courses:course4.title"),
      description: t("courses:course4.description"),
    },
    {
      id: "thinking-in-javascript",
      type: t("courses:course.paid"),
      title: t("courses:course5.title"),
      description: t("courses:course5.description"),
    },
    {
      id: "product-js-engineer",
      type: t("courses:course.paid"),
      title: t("courses:course6.title"),
      description: t("courses:course6.description"),
    },
  ];

  return courses;
};
