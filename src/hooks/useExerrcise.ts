import { create } from "zustand";
import { ExerciseProp } from "../types/exercise";

interface ExerciseState {
  exercises: ExerciseProp[];
  setExercise: (item: ExerciseProp[]) => void;

  bodyPartList: string[];
  setBodyPartList: (item: string[]) => void;

  searchValue: string;
  setSearchValue: (item: string) => void;
}

const useExerciseStore = create<ExerciseState>()((set) => ({
  exercises: [],
  setExercise: (item: ExerciseProp[]) => set(() => ({ exercises: item })),

  bodyPartList: [],
  setBodyPartList: (item: string[]) => set(() => ({ bodyPartList: item })),

  searchValue: "",
  setSearchValue: (item: string) => set(() => ({ searchValue: item })),
}));

export { useExerciseStore };
