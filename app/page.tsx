import { Typewriter } from "@/components/typewriter";

export default function Home() {
  const texts = [
    "execution context",
    "closures",
    "lexical scope",
    "hoisting",
    "thinking in data",
  ];

  return (
    <div className="flex mx-0 sm:mx-32 flex-col mt-32">
      <p className="text-left font-bold text-5xl">learnjs</p>

      <div className="text-left font-mono mt-4 text-xl dark:text-gray-300">
        <span>I want to learn about </span>
        <Typewriter
          displayCursor={false}
          texts={texts}
          typingSpeed={100}
          deletingSpeed={100}
          pauseBetween={3000}
        />
      </div>
    </div>
  );
}
