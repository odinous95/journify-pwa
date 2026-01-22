export type Step = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdlabel: string;
  status?: "pending" | "synced";
};
