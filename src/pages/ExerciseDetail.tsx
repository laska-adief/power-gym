import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ExerciseProp } from "../types/exercise";
import { fetchDataExercisesById } from "../action";

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

  return <div></div>;
};
export default ExerciseDetail;
