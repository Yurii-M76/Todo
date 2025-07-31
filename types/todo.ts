export type TTodo = {
  id: string;
  label: string;
  date: string | null;
  time: string | null;
  completed: boolean;
};

export type TTodoCreate = Pick<TTodo, "label" | "date" | "time">;
export type TTodoFiltered = "all" | "active" | "completed";
