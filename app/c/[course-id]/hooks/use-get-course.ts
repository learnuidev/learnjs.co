import { useListCourses } from "@/modules/courses/hooks/use-list-courses";

export const useGetCourse = (id: string) => {
  const courses = useListCourses();
  const course = courses.find((course) => course.id === id);
  return course;
};
