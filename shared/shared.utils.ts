import { RefObject } from "react";

export const onFocusNext = (nextRef: RefObject<HTMLInputElement>) => {
  nextRef.current?.focus();
};
