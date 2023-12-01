import { Box, Chip, Stack, Typography } from "@mui/material";
import { ExerciseProp } from "../types/exercise";
import { Link } from "react-router-dom";

const CardExercise = ({ exercise }: { exercise: ExerciseProp }) => {
  return (
    <Link to={`/exercise/${exercise?.id}`}>
      <Box
        sx={{
          transition: "all 0.3s ease",
          ":hover": { boxShadow: "rgba(7, 65, 210, 0.1) 0px 9px 30px" },
          borderRadius: 2,
          overflow: "hidden",
          height: "100%",
          background: "#FFF",
        }}>
        <img src={exercise?.gifUrl} alt={exercise?.name} loading="lazy" style={{ width: "100%" }} />
        <Box sx={{ p: 2 }}>
          <Stack direction={"row"} gap={2} mb={2}>
            <Chip label={exercise?.bodyPart} sx={{ background: "#D83F31", color: "#FFF", textTransform: "uppercase" }} />
            <Chip label={exercise?.target} sx={{ background: "#E9B824", color: "#FFF", textTransform: "uppercase" }} />
          </Stack>
          <Typography variant="h6" sx={{ fontWeight: "600", color: "#000", textTransform: "capitalize" }}>
            {exercise?.name}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};
export default CardExercise;
