import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "@/lib/i18n-next/use-translation";

export const TheBlueprint = () => {
  const { t } = useTranslation(["blueprint"]);

  const blueprintList = [
    {
      title: t("blueprint:blueprint.why.title"),
      contents: [
        t("blueprint:blueprint.why.content.one"),
        t("blueprint:blueprint.why.content.two"),
      ],
    },
    {
      title: t("blueprint:blueprint.practical.title"),
      contents: [
        t("blueprint:blueprint.practical.content.one"),
        t("blueprint:blueprint.practical.content.two"),
        t("blueprint:blueprint.practical.content.three"),
      ],
    },
    {
      title: t("blueprint:blueprint.learning-path.title"),
      contents: [
        t("blueprint:blueprint.learning-path.content.one"),
        t("blueprint:blueprint.learning-path.content.two"),
        t("blueprint:blueprint.learning-path.content.three"),
      ],
    },
  ];
  return (
    <section
      id="the-blueprint"
      className="mt-32 py-16 px-12 mb-32 bg-yellow-50 rounded-xl dark:bg-[rgb(31,32,33)]"
    >
      <h3 className="text-5xl text-center font-bold">
        {t("blueprint:blueprint.title")}
      </h3>

      <div className="mt-12 flex flex-col lg:flex-row gap-8">
        <p className="font-mono text-xl">
          <span>{t("blueprint:blueprint.description")}</span>
        </p>

        <Accordion
          className="w-full lg:w-[unset] space-y-8"
          type="single"
          collapsible
        >
          {blueprintList.map((blueprint) => {
            return (
              <AccordionItem
                key={blueprint.title}
                className="lg:w-[500px] max-w-full"
                value={blueprint.title}
              >
                <AccordionTrigger>{blueprint.title}</AccordionTrigger>
                <AccordionContent>
                  {blueprint.contents.map((content) => {
                    return <p key={content}>{content}</p>;
                  })}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};
