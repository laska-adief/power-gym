import Grid from "@mui/material/Grid";
import { useExerciseStore } from "../hooks/useExerrcise";
import { ExerciseProp } from "../types/exercise";
import CardExercise from "./CardExercise";

const Exercises = () => {
  const exercisesData = useExerciseStore((state) => state.exercises);
  return (
    <Grid container spacing={4}>
      {exercisesData?.length &&
        exercisesData?.map((exercise: ExerciseProp) => (
          <Grid item key={exercise?.id} xs={12} md={4} xl={3}>
            <CardExercise exercise={exercise} />
          </Grid>
        ))}
    </Grid>
  );
};
export default Exercises;
