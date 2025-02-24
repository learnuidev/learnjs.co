"use client";
import { FlipWords } from "@/components/ui/flip-words";
import { useTranslation } from "@/libs/i18n-next/use-translation";

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

  const { t } = useTranslation("banner");

  return (
    <section>
      <p className="text-left font-bold text-5xl">learnjs</p>

      <div className="text-left font-mono mt-4 text-xl dark:text-gray-300">
        <span>{t("banner.description")} </span>
        <FlipWords words={concepts} className="text-pink-500 font-bold" />
      </div>
    </section>
  );
};
