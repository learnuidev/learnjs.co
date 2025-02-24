import { useTranslation } from "@/lib/i18n-next/use-translation";
import { Course } from "@/modules/courses/course.type";
import { useGetCourseDetails } from "../hooks/use-get-course-details";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const CourseContent = ({ course }: { course: Course }) => {
  const { t } = useTranslation(["courseDetails"]);

  const courseContent = useGetCourseDetails();
  return (
    <section
      id="course-content"
      className="mt-32 py-16 px-12 mb-32 bg-orange-50 rounded-xl dark:bg-[rgb(31,32,33)]"
    >
      <h3 className="text-5xl text-center font-bold">
        {t("courseDetails:course.content.title")}
      </h3>

      <p className="text-center font-mono mt-4 text-xl">
        <span>{t("courseDetails:course.content.description")} </span>
        <span className="font-bold">{course.title}</span>
      </p>

      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 mt-12">
        {courseContent.map((course) => {
          return (
            <Card
              key={course.id}
              className={cn(
                "rounded-2xl p-8 hover:scale-105 transition hover:bg-yellow-400",
                "dark:bg-[rgb(11,12,13)] bg-white dark:text-white"
              )}
            >
              <Link href={`/c/${course.id}`} className="inline-block h-auto">
                <CardTitle>{course.title}</CardTitle>

                <CardDescription className="dark:text-gray-400 font-mono">
                  {course.description}
                </CardDescription>
              </Link>

              {/* <Link href={`/c/${course.id}`}>
                <div className="mt-4 flex justify-between w-full">
                  <span className="underline"> {t("common:learn.more")} </span>

                  {course.type === "free" && course.typeI18n}
                </div>
              </Link> */}
            </Card>
          );
        })}
      </div>
    </section>
  );
};
