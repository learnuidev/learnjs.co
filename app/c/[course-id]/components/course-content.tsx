import { useTranslation } from "@/lib/i18n-next/use-translation";
import { Course } from "@/modules/courses/course.type";

export const CourseContent = ({ course }: { course: Course }) => {
  const { t } = useTranslation(["courseDetails"]);
  return (
    <section
      id="course-content"
      className="h-screen mt-32 py-16 px-12 bg-orange-50 rounded-xl dark:bg-[rgb(31,32,33)]"
    >
      <h3 className="text-5xl text-center font-bold">
        {t("courseDetails:course.content.title")}
      </h3>

      <p className="text-center font-mono mt-4 text-xl">
        <span>{t("courseDetails:course.content.description")} </span>
        <span className="font-bold">{course.title}</span>
      </p>
    </section>
  );
};
