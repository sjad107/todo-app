import { FC as ReactFC } from "react";

export type FC<P = unknown> = ReactFC<P>;

export type ToDo = {
  id: number | null;
  text: string;
  completed: boolean;
};
