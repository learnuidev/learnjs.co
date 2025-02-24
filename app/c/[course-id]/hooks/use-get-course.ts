import { courses } from "@/modules/courses/courses.mock";

export const useGetCourse = (id: string) => {
  const course = courses.find((course) => course.id === id);
  return course;
};
