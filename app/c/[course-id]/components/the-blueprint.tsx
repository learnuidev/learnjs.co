import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const TheBlueprint = () => {
  return (
    <section
      id="the-blueprint"
      className="mt-32 py-16 px-12 mb-32 bg-yellow-50 rounded-xl dark:bg-[rgb(31,32,33)]"
    >
      <h3 className="text-5xl text-center font-bold">The Blueprint</h3>

      <div className="mt-12 flex flex-col lg:flex-row gap-8">
        <p className="font-mono text-xl">
          <span>
            At learnjs.co our Blueprint is simple: Teaching Practical, Copy
            Pastable and Useful concepts based on Real World Examples.
          </span>
        </p>

        <Accordion
          className="w-full lg:w-[unset] space-y-8"
          type="single"
          collapsible
        >
          <AccordionItem className="lg:w-[500px] max-w-full" value="why">
            <AccordionTrigger>Start with WHY?</AccordionTrigger>
            <AccordionContent>
              <p>
                Before we start teaching any concept, we always start this
                fundamental question: WHY? Why do we need to learn it? Asking
                allows us to establish the right context.
              </p>
              <p>
                As a result you will be better prepping and motivated you for
                the actual learning material. If we dont know why we are
                learning, then its very easy to forget or even appreciate why we
                are learning it.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="lg:w-[500px] max-w-full"
            value="short-practical-real-world"
          >
            <AccordionTrigger>
              Short, Practical based on Real World Codebase
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Before we start teaching any concept, we always start this
                fundamental question: WHY? Why do we need to learn it? Asking
                allows us to establish the right context.
              </p>

              <p>
                As a result you will be better prepping and motivated you for
                the actual learning material.
              </p>
              <p>
                If we dont know why we are learning, then its very easy to
                forget or even appreciate why we are learning it.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            className="lg:w-[500px] max-w-full"
            value="flexible-learning-path"
          >
            <AccordionTrigger>Flexible Learning Path</AccordionTrigger>
            <AccordionContent>
              <p>
                Each lesson is self contained, meaning it doesnt depend on any
                others.
              </p>
              <p>
                Whether you want to take the linear approach, or simply want to
                learn about specific concept, its up to YOU.
              </p>
              <p>You are incharge (and you should be) of your learning.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
