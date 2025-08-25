/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import {
  decompressFromEncodedURIComponent,
  compressToEncodedURIComponent,
} from "lz-string";

export function useCode(defaultInitialCode: any) {
  const initialCode =
    decompressFromEncodedURIComponent(parseQueryParams().code) ||
    defaultInitialCode;

  const [code, set_code] = useState(initialCode);

  useEffect(() => {
    if (window) {
      window.location.hash = `?code=${compressToEncodedURIComponent(code)}`;
    }
  }, [code]);

  return [code, set_code];
}

function parseQueryParams(): any {
  if (window !== undefined) {
    return window.location.hash
      .replace(/^#\??/, "")
      .split("&")
      .map((part) => part.split("="))
      .reduce((result, parts) => {
        // @ts-ignore-all
        result[parts[0]] = decodeURIComponent(parts[1]);
        return result;
      }, {});
  }
}
