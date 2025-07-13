export type TTodo = {
  id: string;
  label: string;
  completed: boolean;
};

export type TTodoFiltered = "all" | "active" | "completed";
