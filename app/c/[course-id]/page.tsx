"use client";

import { Nothing } from "@/components/nothing";
import { CourseBanner } from "./components/course-banner";
import { useGetCourse } from "./hooks/use-get-course";
import { useGetCourseParams } from "./hooks/use-get-course-params";

export default function Page() {
  const { courseId } = useGetCourseParams();
  const course = useGetCourse(courseId);

  if (!course) {
    return <Nothing />;
  }

  return (
    <main>
      <CourseBanner course={course} />
    </main>
  );
}
