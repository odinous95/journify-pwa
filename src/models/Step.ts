export type StepDTO = {
  id: string;
  dailyJourneyId: string;
  title: string;
  description: string;
  isCompleted: boolean;
  createdAt: string;
  lastUpdatedAt: string;
};

export type Step = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
  status?: "pending" | "synced";
};

export function mapStepToVM(dto: StepDTO): Step {
  return {
    id: dto.id,
    title: dto.title,
    description: dto.description,
    completed: dto.isCompleted,
    createdAt: dto.createdAt,
  };
}
