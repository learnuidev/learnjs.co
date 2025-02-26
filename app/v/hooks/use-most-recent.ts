/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";

export function useMostRecent(value: any, initial: any) {
  const mostRecentRef = useRef(value || initial);

  if (value) {
    mostRecentRef.current = value;
  }

  return mostRecentRef.current;
}
