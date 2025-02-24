"use client";

import { Nothing } from "@/components/nothing";
import { CourseBanner } from "./components/course-banner";
import { useGetCourse } from "./hooks/use-get-course";
import { useGetCourseParams } from "./hooks/use-get-course-params";
import { PageTitle } from "@/components/page-title";
import { CourseContent } from "./components/course-content";
import { TheBlueprint } from "./components/the-blueprint";

export default function Page() {
  const { courseId } = useGetCourseParams();
  const course = useGetCourse(courseId);

  if (!course) {
    return <Nothing />;
  }

  return (
    <main>
      <PageTitle title={course.title} description={course.description} />
      <CourseBanner course={course} />
      <TheBlueprint />
      <CourseContent course={course} />
    </main>
  );
}
