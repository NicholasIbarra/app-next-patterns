"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import type { AppStore } from "@/lib/store";
import { makeStore } from "@/lib/store";

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  const storeRef = useRef<AppStore>();
  const store = storeRef.current ?? makeStore();

  if (!storeRef.current) {
    storeRef.current = store;
  }

  return <Provider store={store}>{children}</Provider>;
}
