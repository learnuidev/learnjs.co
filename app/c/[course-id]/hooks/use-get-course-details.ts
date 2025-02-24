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
      title: "03. Hoisting & Temporal Dead Zone",
      description:
        "Learn about hoisting, how variable and function declarations are moved to the top of their scope during compilation, and understand the concept of the Temporal Dead Zone in JavaScript.",
    },
    {
      id: "prototype",
      title: "04. Prototype",
      description:
        "Dive into JavaScript's prototype system, how inheritance works, and how objects share properties and methods.",
    },
    {
      id: "this",
      title: "05. this",
      description:
        "Master the `this` keyword, its binding rules, and how its value is determined in different contexts.",
    },
    {
      id: "scope",
      title: "06. Scope & Scope Chain",
      description:
        "Learn about scope, how it determines variable visibility, and how the scope chain resolves variable references.",
    },
    {
      id: "closures",
      title: "07. Closures",
      description:
        "Understand closures, how they capture and retain access to variables, and their practical applications in JavaScript.",
    },
    {
      id: "async-programming",
      title: "08. Async Programming",
      description:
        "Master asynchronous programming in JavaScript. Explore concepts like callbacks, Promises, and async/await. Learn to handle concurrent operations, manage API calls, and write efficient non-blocking code for improved application performance and responsiveness.",
    },
    {
      id: "composition",
      title: "09. Composition",
      description:
        "Explore the powerful concept of composition in JavaScript. Learn how to build complex functionality by combining smaller, reusable functions. Understand the benefits of composition over inheritance, discover techniques for creating flexible and maintainable code, and master the art of composing functions for more modular and scalable applications.",
    },
  ];
};
