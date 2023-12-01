import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ExerciseProp } from "../types/exercise";
import { fetchDataExercisesById } from "../action";
import { Box, Grid, Typography } from "@mui/material";

const ExerciseDetail = () => {
  const { id } = useParams();
  const [detailExercise, setDetailExercise] = useState<ExerciseProp>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const detailExerciseData = await fetchDataExercisesById(id);
          setDetailExercise(detailExerciseData);
        }
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Box minHeight={"100vh"}>
      <Grid container mb={6} spacing={6}>
        <Grid item xs={12} md={6}>
          <img src={detailExercise?.gifUrl} alt={detailExercise?.name} loading="lazy" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box mb={4}>
            <Typography variant="h3" sx={{ fontWeight: "600", color: "#000", textTransform: "capitalize", mb: 2 }}>
              {detailExercise?.name}
            </Typography>
            <Typography>
              Keep your strength up and train your <b style={{ color: "#BE3144", textTransform: "capitalize" }}>{detailExercise?.target}</b>{" "}
              effortlessly with <b style={{ color: "#BE3144", textTransform: "capitalize" }}>{detailExercise?.name}</b>. An enjoyable and
              effective workout that improves overall fitness while focusing on specific areas.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5">Step by step : </Typography>
            <ul style={{ padding: "1rem" }}>
              {detailExercise?.instructions?.map((step: string, index: number) => (
                <li key={index}>
                  <Typography>{step}</Typography>
                </li>
              ))}
            </ul>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default ExerciseDetail;
