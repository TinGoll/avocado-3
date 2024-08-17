import React from "react";

export type ReactFCWithChildren<T = unknown> = React.FC<
  { children?: React.ReactNode } & T
>;
