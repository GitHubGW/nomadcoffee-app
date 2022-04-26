import { RefObject } from "react";

export const onFocusNext = (nextRef: RefObject<HTMLInputElement>) => {
  nextRef.current?.focus();
};

export const onRefresh = async (setRefreshing: any, refetch: any) => {
  setRefreshing(true);
  await refetch();
  setRefreshing(false);
};
