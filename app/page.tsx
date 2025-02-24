import { Banner } from "./components/banner";
import { Courses } from "./components/courses/courses";

export default function Home() {
  return (
    <div className="flex mx-0 lg:mx-32 flex-col mt-32 gap-32">
      <Banner />
      <Courses />
    </div>
  );
}
