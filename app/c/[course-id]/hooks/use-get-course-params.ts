import { useParams } from "next/navigation";

export const useGetCourseParams = () => {
  const params = useParams<{ "course-id": string }>();

  return {
    courseId: params["course-id"],
  };
};
