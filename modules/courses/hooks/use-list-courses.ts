import { useTranslation } from "@/lib/i18n-next/use-translation";
import { Course } from "../course.type";

export const useListCourses = () => {
  const { t } = useTranslation(["courses"]);

  const color = "dark:bg-[rgb(11,12,13)] bg-white dark:text-white";

  const courses: Course[] = [
    {
      id: "classic-js",
      typeI18n: t("courses:course.paid"),
      type: "paid",
      title: t("courses:course1.title"),
      description: t("courses:course1.description"),
      color,
    },
    {
      id: "advanced-js",
      type: t("courses:course.paid"),
      typeI18n: "paid",
      title: t("courses:course3.title"),
      description: t("courses:course3.description"),
      color,
    },
    {
      id: "thinking-in-javascript",
      type: t("courses:course.paid"),
      typeI18n: "paid",
      title: t("courses:course5.title"),
      description: t("courses:course5.description"),
      color,
    },

    {
      id: "fjs",
      typeI18n: t("courses:course.paid"),
      type: "paid",
      title: t("courses:course.fjs.title"),
      description: t("courses:course.fjs.description"),
      color,
    },

    {
      id: "rwr",
      type: t("courses:course.paid"),
      typeI18n: "paid",
      title: t("courses:course.react.title"),
      description: t("courses:course.react.description"),
      color,
    },
    {
      id: "promises",
      typeI18n: t("courses:course.free"),
      type: "free",
      title: t("courses:course.promises.title"),
      description: t("courses:course.promises.description"),
      color,
    },
    {
      id: "closure",
      type: "free",
      typeI18n: t("courses:course.free"),
      title: t("courses:course.closures.title"),
      description: t("courses:course.closures.description"),
      color,
    },
    {
      id: "product-js-engineer",
      typeI18n: t("courses:course.paid"),
      type: "paid",
      title: t("courses:course6.title"),
      description: t("courses:course6.description"),
      color,
    },
    {
      id: "state-management",
      typeI18n: t("courses:course.paid"),
      type: "paid",
      title: t("courses:course2.title"),
      description: t("courses:course2.description"),
      color,
    },

    // {
    //   id: "grokking-posthog",
    // type: t("courses:course.paid"),
    //   title: t("courses:course4.title"),
    //   description: t("courses:course4.description"),
    //   color,
    // },
  ];

  return courses;
};
