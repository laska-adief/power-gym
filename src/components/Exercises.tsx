import Grid from "@mui/material/Grid";
import { useExerciseStore } from "../hooks/useExerrcise";
import { ExerciseProp } from "../types/exercise";
import CardExercise from "./CardExercise";
import { Skeleton, Stack, Typography } from "@mui/material";
import NotFoundImage from "./../assets/notfound-image.svg";

const Exercises = () => {
  const loadingExercise = useExerciseStore((state) => state.loadingExercise);
  const exercisesData = useExerciseStore((state) => state.exercises);
  const searchValue = useExerciseStore((state) => state.searchValue);
  const searchedExercises = exercisesData.filter(
    (exercise: ExerciseProp) =>
      exercise.name.includes(searchValue) ||
      exercise.bodyPart.includes(searchValue) ||
      exercise.equipment.includes(searchValue) ||
      exercise.target.includes(searchValue)
  );

  const LoadingDisplay = () => (
    <Stack justifyContent={"center"} alignContent={"center"}>
      <Grid container spacing={4}>
        {Array.from({ length: 12 }, (_, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} xl={3} minWidth={264}>
            <Skeleton variant="rounded" sx={{ width: "100%", height: { xs: 358, sm: 260, md: 262, lg: 362, xl: 264 }, mb: 1 }}></Skeleton>
            <Stack direction={"row"} spacing={1} mb={1}>
              <Skeleton variant="rounded" height={32} width={62} sx={{ borderRadius: 4 }}></Skeleton>
              <Skeleton variant="rounded" height={32} width={62} sx={{ borderRadius: 4 }}></Skeleton>
            </Stack>
            <Skeleton variant="rounded" height={32} sx={{ width: "80%" }}></Skeleton>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );

  const DataDisplay = () => (
    <Grid container spacing={4}>
      {searchedExercises?.length ? (
        searchedExercises?.map((exercise: ExerciseProp) => (
          <Grid item key={exercise?.id} xs={12} sm={6} md={4} xl={3}>
            <CardExercise exercise={exercise} />
          </Grid>
        ))
      ) : (
        <Grid item xs={12} textAlign={"center"} mt={6}>
          <Typography variant="h3" color={"#BE3144"}>
            Data Not Found
          </Typography>
          <img src={NotFoundImage} alt="Not Found" style={{ width: "40%" }} />
        </Grid>
      )}
    </Grid>
  );

  return loadingExercise ? <LoadingDisplay /> : <DataDisplay />;
};
export default Exercises;
