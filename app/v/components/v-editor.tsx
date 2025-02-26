/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Card } from "@/components/ui/card";
import Editor from "react-simple-code-editor";
import { Highlight } from "./highlight";

export function VEditor({ at, code, set_at, step, set_code }: any) {
  const updateEditor = (str: string) => {
    if (str !== code && at !== 0) {
      set_at(0);
    }
    console.log(str);
    if (str.trim() === "" && at !== 0) {
      set_at(0);
    }
    set_code(str);
  };

  return (
    <Card className="col-span-12 sm:col-span-7 bg-white dark:bg-black dark:text-white">
      <Editor
        value={code}
        onValueChange={updateEditor}
        highlight={(code) => {
          return <Highlight code={code} step={step} />;
        }}
        padding={24}
        style={{
          fontFamily: "Menlo, Consolas, monospace",
          fontSize: 18,
          lineHeight: 1.5,
        }}
        className="outline-none"
        preClassName="language-js"
        textareaClassName="Code"
      />
    </Card>
  );
}
