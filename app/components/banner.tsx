"use client";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { useTranslation } from "@/libs/i18n-next/use-translation";
import { useRouter } from "next/navigation";

export const Banner = () => {
  const concepts = [
    "execution context",
    "closures",
    "lexical scope",
    "hoisting",
    "thinking in data",
    "functional programming",
    "composition",
    "inheritance",
    "hof",
    "promises",
    "software design",
  ];

  const { t } = useTranslation(["banner"]);

  const router = useRouter();

  return (
    <section>
      <p className="text-left font-bold text-5xl">learnjs</p>

      <div className="text-left font-mono mt-4 text-xl dark:text-gray-300">
        <span>{t("banner:banner.description")} </span>
        <FlipWords words={concepts} className="font-bold" />
      </div>

      <Button
        variant={"neutral"}
        onClick={() => {
          router.push("/#courses");
        }}
        className="mt-8 rounded-full dark:bg-yellow-400 dark:text-black hover:bg-yellow-400"
      >
        {t("banner:banner.explore.courses")}
      </Button>
    </section>
  );
};
