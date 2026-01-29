// ---------------------
// Data/Model shape
// ---------------------
export type Step = {
  id: string;
  dailyJourneyId: string;
  title: string;
  description: string;
  isCompleted: boolean;
  createdAt: string;
  lastUpdatedAt: string;
};

// ---------------------
// UI/ViewModel shape
// ---------------------
export type StepVM = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
  status?: "pending" | "synced";
};

// ---------------------
// Mapper
// ---------------------
export function mapStepToVM(step: Step): StepVM {
  return {
    id: step.id,
    title: step.title,
    description: step.description,
    completed: step.isCompleted,
    createdAt: step.createdAt,
  };
}
