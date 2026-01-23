// src/models/journey.model.ts

// ---------------------
// Backend shape (DTO)
// ---------------------
export type JourneyDTO = {
  id: string;
  userId: string;
  journeyName: string;
  createdAt: string;
  entries: unknown[];
};

// ---------------------
// UI/ViewModel shape
// ---------------------
export type Journey = {
  id: string;
  title: string;
  createdAt: string;
  entryCount: number;
};

// ---------------------
// Mapper
// ---------------------
export function mapJourneyToVM(dto: JourneyDTO): Journey {
  return {
    id: dto.id,
    title: dto.journeyName, // rename for UI
    createdAt: dto.createdAt,
    entryCount: dto.entries.length, // example derived field
  };
}
