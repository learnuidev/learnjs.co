import { useGetCourseParams } from "./use-get-course-params";

export const useGetCourseDetails = () => {
  const { courseId } = useGetCourseParams();

  console.log(courseId);
  return [
    {
      id: "execution-contexts",
      title: "01. Execution Contexts",
      description:
        "Understand what execution contexts are, how they are created, and their role in JavaScript code execution.",
    },
    {
      id: "call-stack",
      title: "02. Call Stack",
      description:
        "Explore the call stack, how it manages function calls, and its importance in tracking execution flow.",
    },
    {
      id: "hoisting",
      title: "03. Hoisting",
      description:
        "Learn about hoisting, how variable and function declarations are moved to the top of their scope during compilation.",
    },
    {
      id: "tdz",
      title: "04. Temporal Dead Zone",
      description:
        "Discover the Temporal Dead Zone (TDZ), why it occurs, and how it affects variable access in JavaScript.",
    },
    {
      id: "prototype",
      title: "05. Prototype",
      description:
        "Dive into JavaScript's prototype system, how inheritance works, and how objects share properties and methods.",
    },
    {
      id: "this",
      title: "06. this",
      description:
        "Master the `this` keyword, its binding rules, and how its value is determined in different contexts.",
    },
    {
      id: "scope",
      title: "07. Scope & Scope Chain",
      description:
        "Learn about scope, how it determines variable visibility, and how the scope chain resolves variable references.",
    },
    {
      id: "closures",
      title: "08. Closures",
      description:
        "Understand closures, how they capture and retain access to variables, and their practical applications in JavaScript.",
    },
    {
      id: "async-programming",
      title: "09. Async Programming",
      description:
        "Master asynchronous programming in JavaScript. Explore concepts like callbacks, Promises, and async/await. Learn to handle concurrent operations, manage API calls, and write efficient non-blocking code for improved application performance and responsiveness.",
    },
  ];
};
