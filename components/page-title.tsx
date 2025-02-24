"use client";

import Head from "next/head";

import { useEffect } from "react";

export function PageTitle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <Head key={document.title}>
      <title>{document.title}</title>
      <meta name="description" content={description} />
    </Head>
  );
}
