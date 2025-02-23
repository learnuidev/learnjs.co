import { Typewriter } from "@/components/typewriter";

export default function Home() {
  const texts = ["execution context", "closures"];

  return (
    <div className="flex items-center mx-auto flex-col justify-center h-screen">
      <p className="text-left">learnjs.co</p>

      <div>
        <div>
          <span>I want to learn about </span>
          <Typewriter
            texts={texts}
            typingSpeed={50}
            deletingSpeed={30}
            pauseBetween={3000}
          />
        </div>
      </div>
    </div>
  );
}
