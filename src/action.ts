import { ExerciseProp } from "./types/exercise";
import { options, fetchData } from "./utils/fetchData";

export const fetchDataExercises = async () => {
  const url = "https://exercisedb.p.rapidapi.com/exercises?limit=1324";
  const data: ExerciseProp[] = await fetchData(url, options);
  return data;
};

export const fetchDataExercisesById = async (id: string) => {
  const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;
  const data: ExerciseProp = await fetchData(url, options);
  return data;
};

export const fetchDataExercisesByCategory = async (category: string) => {
  const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${category}?limit=1324`;
  const data: ExerciseProp[] = await fetchData(url, options);
  return data;
};

export const fetchDataBodyPartList = async () => {
  const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";
  const data: string[] = await fetchData(url, options);
  return data;
};
